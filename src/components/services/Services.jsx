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
                    I develop User Interface
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Webpage Development</p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I Do Graphi</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I do Digital Marketing</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I Do digital Media Contents
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
                    I develop User Interface
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Webpage Development</p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I Do Graphic Designs</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I do Digital Marketing</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I Do digital Media Contents
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <i className="uil uil-edit services__icon"></i>
          <h3 className="service__title">Visual <br /> Designer</h3>

          <span className="services__button" onClick={() => toggleTab(3)}>
           
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState===3? "services__modal active-modal":"services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and Companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop User Interface
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Webpage Development</p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I Do Graphic Designs</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I Digital Marketing</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I Do digital Media Contents
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
                    I develop User Interface
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Webpage Development</p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I Do Graphic Designs</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I do 6Digital Marketing</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I Do digital Media Contents
                  </p>
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
