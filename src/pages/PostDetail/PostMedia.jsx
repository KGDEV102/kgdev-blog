import React from "react";
import "./PostMedia.css";

export default function PostMedia({ media, title }) {
  if (!media) return <></>;

  return (
    <div className="post-media">
      {media.type === "image" && (
        <img
          className="post-media-image"
          src={media.url}
          alt={title || "media"}
        />
      )}

      {media.type === "video" && (
        <video className="post-media-video" controls>
          <source src={media.url} type="video/mp4" />
        </video>
      )}

      {media.type === "audio" && (
        <div className="post-media-audio">
          <audio controls>
            <source src={media.url} type="audio/mpeg" />
          </audio>
        </div>
      )}

      {media.type === "file" && (
        <a href={media.url} className="post-media-file" download>
          📄 {media.filename || "Tải file"}
        </a>
      )}

      {media.type === "link" && (
        <a
          href={media.url}
          className="post-media-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 {media.title || media.url}
        </a>
      )}
    </div>
  );
}
