import React from "react";
import { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle"> My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button qualification__active button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button qualification__active button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Higher Diploma in Digital Marketing
                </h3>
                <span className="qualification__subtitle">
                  Dublin Business School — Dublin, Ireland
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022 – 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  {" "}
                  Master of Computer Applications (MCA)
                </h3>
                <span className="qualification__subtitle">
                  MACFAST — Thiruvalla, India
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2017 – 2019
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {" "}
                  Bachelor of Science in Computer Science
                </h3>
                <span className="qualification__subtitle">
                  IHRD College of Applied Science — Payyapady, India
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2012 – 2015
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> UI/UX Designer</h3>
                <span className="qualification__subtitle">
                  Winnersoft IT Solutions — Kerala, India
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>May 2020 – July 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title"> UI/UX Designer</h3>
                <span className="qualification__subtitle">
                  Techbox Solutions — Coimbatore, India
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>July 2019 – April 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">

              <div>
                <h3 className="qualification__title"> Graphic Designer</h3>
                <span className="qualification__subtitle">
                  MGS Graphics — Kerala, India
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>September 2015 –
                  August 2017
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title"> Java Developer Intern</h3>
                <span className="qualification__subtitle">
                  Spectrum Softtech Solutions Pvt. Ltd. — Kerala, India
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>May 2015 – July 2015
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
