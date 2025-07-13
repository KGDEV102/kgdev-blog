import { useParams } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();

  return (
    <div className="post-detail">
      <h1>Trang chi tiết bài viết</h1>
      <p>ID bài viết là: {id}</p>
    </div>
  );
}

export default PostDetail;
