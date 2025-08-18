import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,       // data stays “fresh” for 60s (from cache)
      cacheTime: 5 * 60 * 1000,   // unused cache kept for 5 min
      refetchOnWindowFocus: false // less noisy demos
    }
  }
});

export default function App() {
  const [view, setView] = useState("home");

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: 16, fontFamily: "system-ui, sans-serif" }}>
        <h1>React Query Demo</h1>

        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          <button onClick={() => setView("home")}>Home</button>
          <button onClick={() => setView("posts")}>Posts</button>
        </div>

        {view === "home" ? (
          <p>
            Navigate to <b>Posts</b>, then come back here and return to Posts to
            see caching in action (instant load if still fresh).
          </p>
        ) : (
          <PostsComponent />
        )}
      </div>
    </QueryClientProvider>
  );
}
