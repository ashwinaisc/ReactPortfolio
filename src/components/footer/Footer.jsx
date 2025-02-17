import React from "react";
import "../footer/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ashwin</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
        <a href="https://www.fb.com/ashwinaisc" className="footer__social-link"target="blank"> 
        <i class="bx bxl-facebook"></i>
        </a>

        <a href="https://www.linkedin.com/in/ashwinaisc/" className="footer__social-link"target="blank"> 
        <i class="bx bxl-linkedin"></i>
        </a>

        <a href="https://x.com/ashwinaisc" className="footer__social-link"target="blank"> 
        <i class="bx bxl-twitter"></i>
        </a>

        </div>
        <span className="footer__copy">AIS the Designer. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
