import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ApiCall = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [postDetails, setPostDetails] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<{ title: string; body: string } | null>(null);
  const navigate = useNavigate();
  const { postid } = useParams();

  
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      setPosts(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  
  const fetchPostDetails = async (id: string) => {
    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch post details");
      }
      const data = await response.json();
      setPostDetails(data);
      setFormData({ title: data.title, body: data.body });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  
  const deletePost = async (id: number) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete the post");
      }
      setPosts(posts.filter((post) => post.id !== id));
      if (postDetails?.id === id) {
        setPostDetails(null);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  
  const updatePost = async (id: number, updatedData: { title: string; body: string }) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error("Failed to update the post");
      }
      const updatedPost = await response.json();
      const updatedPosts = posts.map((post) =>
        post.id === id ? { ...post, ...updatedPost } : post
      );
      setPosts(updatedPosts);
      setPostDetails(updatedPost);
      navigate("/api_call")
    } catch (err: any) {
      setError(err.message);
    }
  };

  
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: "title" | "body"
  ) => {
    if (formData) {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    }
  };

 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (postDetails && formData) {
      updatePost(postDetails.id, formData);
    }
  };

  
  useEffect(() => {
    if (postid) {
      fetchPostDetails(postid);
    } else {
      fetchPosts();
    }
  }, [postid]);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">{postid ? "Post Details" : "JSON Posts"}</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

     
      {postid && postDetails && !loading && !error && (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">{postDetails.title}</h3>
          <p className="text-gray-700 mb-4">{postDetails.body}</p>

          
          <h2 className="text-2xl font-semibold mb-4">Edit Post</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={formData?.title || ""}
                onChange={(e) => handleFormChange(e, "title")}
                className="mt-1 p-2 w-1/2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Body</label>
              <textarea
                value={formData?.body || ""}
                onChange={(e) => handleFormChange(e, "body")}
                className="mt-1 p-2 w-1/2 border border-gray-300 rounded-md"
                required
                rows={4}
              />
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                Update Post
              </button>

              <button
                type="button"
                onClick={() => navigate('/api_call')}
                className="text-blue-600 font-medium hover:text-blue-800"
              >
                Back to Posts
              </button>
            </div>
          </form>

          <button
            onClick={() => postDetails?.id && deletePost(postDetails.id)}
            className="mt-4 text-red-600 font-medium"
          >
            Delete Post
          </button>
        </div>
      )}

      
      {!postid && !loading && !error && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition"
              >
                <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700 text-sm mb-4">{post.body.substring(0, 100)}...</p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => navigate(`/api_call/${post.id}`)}
                    className="text-blue-600 font-medium"
                  >
                    Read More
                  </button>
                  <button
                    onClick={() => deletePost(post.id)}
                    className="text-red-600 font-medium"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 0a.5.5 0 0 1 .5.5V1h9a.5.5 0 0 1 .5.5V2H1V1.5A.5.5 0 0 1 1.5 1h9V.5a.5.5 0 0 1 .5-.5zM4 3v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V3H4zm6 0V2H6v1h4z"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ApiCall;
