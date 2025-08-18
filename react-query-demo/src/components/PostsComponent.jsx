import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export default function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
    dataUpdatedAt
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading posts…</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  const lastUpdated = new Date(dataUpdatedAt).toLocaleTimeString();

  return (
    <div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button onClick={() => refetch()}>Refetch</button>
        {isFetching && <span>Refreshing…</span>}
        <span style={{ opacity: 0.7 }}>Last updated: {lastUpdated}</span>
      </div>

      <ul style={{ marginTop: 16 }}>
        {(data ?? []).slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: 12 }}>
            <b>{post.title}</b>
            <div>{post.body}</div>
          </li>
        ))}
      </ul>

      <p style={{ marginTop: 16, opacity: 0.8 }}>
        Tip: Navigate away (Home) and back to Posts within 60s — data should load
        instantly from cache (no network).
      </p>
    </div>
  );
}
