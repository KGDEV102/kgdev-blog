import { FaHeart, FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Postcard.css"
function Postcard({
  id,
  title,
  description,
  author,
  createdAt,
  media,
  likes,
  comments,
}) {
  return (
    <>
      <div className="postcard">
        <div className="postcard__media">
          {media.type === "image" && <img src={media.src.default} alt={title} />}
          {media.type === "video" && <video src={media.src} controls />}
          {media.type === "audio" && <audio src={media.src} controls />}
        </div>
        <div className="postcard__content">
          <h2 className="postcard__title">{title}</h2>
          <p className="postcard__description">{description}</p>
          <div className="postcard__footer">
            <span className="postcard__author-date">
              {author} <br /> {createdAt}
            </span>
            <div className="postcard__stats">
              <FaHeart /> {likes} &nbsp; <FaComment /> {comments}
            </div>
          </div>
        </div>
        <button className="read-more btn btn-small hidden-hover">
          <Link to={`/posts/${id}`}>Xem thêm →</Link>
        </button>
      </div>
    </>
  );
}
export default Postcard;
