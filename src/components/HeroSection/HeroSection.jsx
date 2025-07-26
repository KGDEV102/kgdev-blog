
import "./HeroSection.css"; 
import futuristicImg from "../../assets/imgs/A futuristic 3D illu.png";

function HeroSection({ onScrollClick }) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="text-content">
          <h1>
            Chào mừng đến với <span className="highlight">KGDEV</span>
          </h1>
          <p>Nơi chia sẻ kiến thức, kinh nghiệm, cuộc sống...</p>
          <button className="cta-button" onClick={onScrollClick}>
            Xem bài viết
          </button>
        </div>

        <div className="image-content">
          <img src={futuristicImg} alt="Mô hình công nghệ 3D" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
