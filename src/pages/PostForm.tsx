import { useState } from "react";

const PostForm = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false); 


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: "title" | "body"
  ) => {
    if (error) setError(null);
    if (field === "title") setTitle(e.target.value);
    else if (field === "body") setBody(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newPost = { title, body };

    try {
      setLoading(true); 
      setSuccess(false); 
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      const result = await response.json();
      console.log("New Post Created: ", result);

      setTitle("");
      setBody("");
      setSuccess(true); 
    } catch (error) {
      setError("An error occurred while submitting the post");
      console.error("Error creating post:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">Create New Post</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => handleInputChange(e, "title")}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
            aria-describedby="title-error"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="block text-sm font-medium text-gray-700">
            Body
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => handleInputChange(e, "body")}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
            rows={4}
            aria-describedby="body-error"
          />
        </div>

        {error && <p id="form-error" className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">Post submitted successfully!</p>}

        <button
          type="submit"
          disabled={loading} // Disable the button while the request is loading
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          {loading ? "Submitting..." : "Submit Post"}
        </button>
      </form>
    </div>
  );
};

export default PostForm;
