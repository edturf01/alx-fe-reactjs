import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

export default function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 5, 
    staleTime: 1000 * 60, 
    refetchOnWindowFocus: false, 
    keepPreviousData: true, 
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Posts</h2>
      <button
        onClick={() => refetch()}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Refetch Posts
      </button>
      <ul className="mt-4">
        {posts.map((post) => (
          <li key={post.id} className="border-b py-2">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
