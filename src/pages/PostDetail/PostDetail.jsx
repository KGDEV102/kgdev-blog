import { useParams } from "react-router-dom";
import "./PostDetail.css"
import PostMedia from "./PostMedia";
function PostDetail() {
  const { id } = useParams();

  const post = {
    id: 1,
    title: "The Blog Post Title",
    author: {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    date: "April 24, 2024",
    likes: 25,
    commentsCount: 12,
    readTime: "2:15",
    // media: {
    //   type: "image",
    //   url: "https://placehold.co/900x400",
    // },
    // media: {
    //   type: "video",
    //   url: "https://www.w3schools.com/html/mov_bbb.mp4",
    // },
    // media: {
    //   type: "audio",
    //   url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    // },
  //   media:{
  // "type": "file",
  // "url": "https://example.com/document.pdf",
  // "filename": "Hướng dẫn sử dụng.pdf"
  //   },
//     media:{
//   "type": "link", 
//   "url": "https://example.com",
//   "title": "Xem thêm tại đây"
// },
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <ul>
        <li>Text items</li>
        <li>List items</li>
      </ul>
      <pre><code>console.log("Hello World");</code></pre>
    `,
    comments: [
      {
        id: 1,
        author: "John Doe",
        avatar: "https://i.pravatar.cc/150?img=3",
        text: "Lorem ipsum comment",
        time: "2 hours ago",
      },
      {
        id: 2,
        author: "John Doe",
        avatar: "https://i.pravatar.cc/150?img=3",
        text: "Another comment!",
        time: "2 hours ago",
      },
    ],
  };

  return (
    <div className="post-detail">
      <div className="post-container">
        {/* Ảnh tiêu đề */}
        <PostMedia media={post.media} title={post.title} />

        {/* Tiêu đề + Meta info */}
        <h1 className="post-title">
          {post.title} {id}
        </h1>
        <div className="post-meta">
          <img
            className="author-avatar"
            src={post.author.avatar}
            alt="Author"
          />
          <span className="author-name">{post.author.name}</span>
          <span className="publish-date">{post.date}</span>
          <span className="meta-icon">❤️ {post.likes}</span>
          <span className="meta-icon">💬 {post.commentsCount}</span>
          <span className="meta-icon">👁 2145</span>
        </div>

        {/* Nội dung bài viết */}
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>

        {/* Comments */}
        <div className="comments-section">
          <h3>Bình luận</h3>
          <textarea placeholder="Viết bình luận của bạn..."></textarea>
          <button className="btn">Gửi</button>

          {post.comments.map((c) => (
            <div key={c.id} className="comment">
              <img className="comment-avatar" src={c.avatar} alt={c.author} />
              <div className="comment-body">
                <div className="comment-header">
                  <span className="comment-author">{c.author}</span>
                  <span className="comment-time">{c.time}</span>
                </div>
                <p>{c.text}</p>
                <button className="reply-btn">Trả lời</button>
              </div>
            </div>
          ))}
        </div>

        {/* Related posts */}
        <div className="related-posts">
          <h3>Bài viết liên quan</h3>
          <div className="related-list">
            <div className="related-item">Bài liên quan 1</div>
            <div className="related-item">Bài liên quan 2</div>
            <div className="related-item">Bài liên quan 3</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
