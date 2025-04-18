// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const PostDetail = () => {
//   const { postId } = useParams(); // Get the postId from the URL
//   const [post, setPost] = useState<any | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch post");
//         }
//         const data = await response.json();
//         setPost(data);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPost();
//   }, [postId]); // Dependency on postId to refetch when it changes

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   return (
//     <div className="min-h-screen p-6 bg-gray-100">
//       <h1 className="text-2xl font-bold mb-6">Post Details</h1>
//       {post && (
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">{post.title}</h2>
//           <p className="text-gray-700">{post.body}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PostDetail;
