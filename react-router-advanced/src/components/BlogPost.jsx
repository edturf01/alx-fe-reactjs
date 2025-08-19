// react-router-advanced/src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post {id}</h2>
      <p>This is the content of blog post with ID {id}.</p>
    </div>
  );
}

export default BlogPost;
