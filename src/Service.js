import React from "react";
import { RiComputerFill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
const Service = () => {
  return (
    <>
      <h1 id="services" className="about-heading a">
        services
      </h1>
      <section data-aos="fade-up" className="services">
        <div className="service">
          <RiComputerFill className="skill-icon service-icon" />
          <p className="service-p">WEB APPLICATION DEVELOPMENT</p>
        </div>
        <div className="service">
          <CgWebsite className="skill-icon service-icon" />
          <p className="service-p">WEBSITE COUSTOMIZATION</p>
        </div>
      </section>
    </>
  );
};

export default Service;
