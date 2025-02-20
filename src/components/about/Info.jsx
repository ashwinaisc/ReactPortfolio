import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-certification' ></i>
            <h3 className="about__title">Education</h3>
            <span className="about__subtitle">Masters In Computer Application</span>
        </div>
        <div className="about__box">
             <i class='bx bx-award' ></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">4 Years</span>
        </div>
        
        <div className="about__box">
        <i class='bx bx-briefcase' ></i>
            <h3 className="about__title">Specialization</h3>
            <span className="about__subtitle">Front end Development</span>
        </div>
    </div>
  )
}

export default Info