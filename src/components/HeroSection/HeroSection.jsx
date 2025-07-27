
import "./HeroSection.css"; 
import futuristicImg from "../../assets/imgs/A futuristic 3D illu.png";
import { Link } from "react-router-dom";

function HeroSection({ onScrollClick }) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="text-content">
          <h1>
            Chào mừng đến với <span className="highlight">KGDEV</span>
          </h1>
          <p>Nơi chia sẻ kiến thức, kinh nghiệm, cuộc sống...</p>
      <Link to="/listposts">
            <button className="cta-button" onClick={() => {
              
            }}>
              Xem bài viết
            </button>
      </Link>
        </div>

        <div className="image-content">
          <img src={futuristicImg} alt="Mô hình công nghệ 3D" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
