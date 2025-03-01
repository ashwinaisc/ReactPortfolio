import React from 'react'
import "./skills.css"
import Frontend from './Frontend'
import Uiux from './Uiux'
import Digitalmarketing from './Digitalmarketing'
import Tools from './Tools'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Skills</span>
      <div className="skills__container container grid">
        <Frontend/>
        <Uiux />
        <Digitalmarketing />
        <Tools />
      </div>
    </section>
  )
}

export default Skills