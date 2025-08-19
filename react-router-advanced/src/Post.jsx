import { useParams } from "react-router-dom";

export default function Post() {
  const { postId } = useParams();
  return <h2>Post ID: {postId}</h2>;
}
