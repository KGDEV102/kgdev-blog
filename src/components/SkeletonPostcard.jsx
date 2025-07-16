// SkeletonPostcard.jsx
import "./SkeletonPostcard.css";

function SkeletonPostcard() {
  return (
    <div className="skeleton-postcard">
      <div className="skeleton-media shimmer"></div>
      <div className="skeleton-body">
        <div className="skeleton-title shimmer"></div>
        <div className="skeleton-description shimmer"></div>
       
        <div className="skeleton-footer">
          <div className="skeleton-author shimmer"></div>
          <div className="skeleton-stats shimmer"></div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonPostcard;
