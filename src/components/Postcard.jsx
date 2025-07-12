import { FaHeart, FaComment } from "react-icons/fa";

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
      <article className="postcard">
        <div className="postcard__media">
          {media.type === "image" && <img src={media.src} alt={title} />}
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
      </article>
    </>
  );
}
export default Postcard;
