import React from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiSass } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import "animate.css";
import ScrollToTop from "react-scroll-up";

const About = () => {
  return (
    <>
      <h1 id="about" className="about-heading">
        About Me
      </h1>
      {/* <ScrollToTop> */}
      <section className="about">
        <div data-aos="fade-right" className="hz-img  ">
          <img className="img  " src={require("./hanzla.png")} />
        </div>
        <div data-aos="fade-left" className="info about-info  ">
          <p>
            I'm a front-end developer with a passion for creating stunning web
            experiences that not only look great, but also provide a seamless
            user experience. With over 2 years of experience in the field, I
            have honed my skills in HTML, CSS, JavaScript, and various front-end
            frameworks such as React and Angular. I thrive on challenging
            projects that require creative problem-solving and attention to
            detail. Let's connect and chat about how I can help bring your
            web vision to life!
          </p>

          <button className="btn">Download CV</button>
          <span className="padd"> </span>
          <a className="ad" href="#contact">
            <button className="btn ">Contact Me</button>
          </a>
          {/* <button className='btn '><a className='ad' href='#contact'>Contact Me</a></button> */}
        </div>
      </section>
      {/* </ScrollToTop> */}
      <section className="abc">
        <h1 className="about-heading">MY Skills</h1>
        <h4 className="best">What i AM best AT</h4>
        <section className="skills" data-aos="fade-down">
          <div className="item">
            <FaReact className="skill-icon" />
            <p className="skill-p">React</p>
          </div>
          <div className="item">
            <TbBrandNextjs className="skill-icon" />
            <p className="skill-p">Next js</p>
          </div>
          <div className="item">
            <SiTailwindcss className="skill-icon" />
            <p className="skill-p">Tailwand</p>
          </div>
          <div className="item">
            <FaBootstrap className="skill-icon" />
            <p className="skill-p">bootstrap</p>
          </div>
          <div className="item">
            <TbBrandJavascript className="skill-icon" />
            <p className="skill-p">React</p>
          </div>
          <div className="item">
            <AiOutlineHtml5 className="skill-icon" />
            <p className="skill-p">html 5</p>
          </div>
          <div className="item">
            <FaNodeJs className="skill-icon" />
            <p className="skill-p">Node js</p>
          </div>
          <div className="item">
            <FaCss3Alt className="skill-icon" />
            <p className="skill-p">CSS</p>
          </div>
          <div className="item">
            <DiSass className="skill-icon" />
            <p className="skill-p">sass</p>
          </div>
          <div className="item">
            <FaVuejs className="skill-icon" />
            <p className="skill-p">React</p>
          </div>
          {/*    
    <div className='item'>
        <TbBrandJavascript className='skill-icon' />
        <p className='skill-p'>React</p> */}
          {/* </div> */}
        </section>
      </section>
    </>
  );
};

export default About;
