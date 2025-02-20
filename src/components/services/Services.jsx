import React from "react";
import { useState } from "react";
import "../services/services.css";
const Services = () => {
    const[toggleState, setToggleState] = useState(0);


    const toggleTab = (index) =>{
        setToggleState(index);
    }



  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i Offer</span>

      <div className="services__container container grid">

        <div className="services__content">
          <i className="uil uil-web-grid services__icon"></i>
          <h3 className="service__title"> Product <br /> Designer</h3>

          <span className="services__button" onClick={() => toggleTab(1)}>
           
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState===1? "services__modal active-modal":"services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and Companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Build prototypes
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Conducting ux research</p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Design and develop new products</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Prototype and test</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  User experience (ux) designer
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <i className="uil uil-arrow services__icon"></i>
          <h3 className="service__title">Ui/Ux <br /> Designer</h3>

          <span className="services__button" onClick={() => toggleTab(2)}>
           
           View More
           <i className="uil uil-arrow-right services__button-icon"></i>
         </span>

         <div className={toggleState===2? "services__modal active-modal":"services__modal"}>
           <div className="services__modal-content">
             <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and Companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Wireframing & Prototyping
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">User Interface (UI) Design</p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">User Experience (UX) Design</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Responsive & Mobile-First Design</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  E-Commerce & Product Design
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <i className="uil uil-edit services__icon"></i>
          <h3 className="service__title">Graphic <br /> Designer</h3>

          <span className="services__button" onClick={() => toggleTab(3)}>
           
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState===3? "services__modal active-modal":"services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Graphic Designer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and Companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Branding & Identity Design
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Digital Design</p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Print Design</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Motion Graphics & Animation</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Advertising & Marketing Design
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <i className="uil uil-laptop services__icon"></i>
          <h3 className="service__title">Digital <br /> Marketing</h3>

          <span className="services__button" onClick={() => toggleTab(4)}>
           
           View More
           <i className="uil uil-arrow-right services__button-icon"></i>
         </span>

         <div className={toggleState===4? "services__modal active-modal":"services__modal"}>
           <div className="services__modal-content">
             <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Digital Marketing</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and Companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Website Design & Development
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">E-Commerce Marketing</p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Social Media Marketing (SMM)</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Search Engine Optimization (SEO)</p>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
