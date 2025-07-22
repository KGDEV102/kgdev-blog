import "./Footer.css"
import { FaFacebook, FaTiktok, FaTwitter, FaYoutube, } from "react-icons/fa";
function Footer() {
    return (
      <>
        <footer class="footer">
          <div class="footer-container container">
            {/* <!-- Cột 1: Logo --> */}
            <div class="footer-column">
              <h2 class="logo">KGDEV</h2>
              <p class="slogan">Nothing is impossible</p>
            </div>

            {/* <!-- Cột 2: Navigation --> */}
            <div class="footer-column">
              <h3>Navigation</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            {/* <!-- Cột 3: Contact --> */}
            <div class="footer-column">
              <h3>Contact</h3>
              <ul>
                <p>
                  Email:{" "}
                  <a href="mailto:info@kgdev.com">
                    anhkietphan2402.tg@gmail.com
                  </a>
                </p>
                <p>Phone: 0357097635</p>
                <p>Address: TPHCM, VN</p>
              </ul>
            </div>

            {/* <!-- Cột 4: Follow us --> */}
            <div class="footer-column">
              <h3>Follow us</h3>
              <div class="socials">
                <a href="https://www.facebook.com/anh.kiet.phan.kgdev/">
                  <FaFacebook></FaFacebook>
                </a>
                <a href="https://www.youtube.com">
                  <FaYoutube></FaYoutube>
                </a>
                <a href="https://www.tiktok.com/@kgdev24">
                  <FaTiktok></FaTiktok>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Bottom --> */}
          <div class="footer-bottom">
            <p>
              © <span class="year">2025</span> KGDEV. All rights reserved. |
              Terms | Privacy Policy
            </p>
          </div>
        </footer>
      </>
    );
}
export default Footer;