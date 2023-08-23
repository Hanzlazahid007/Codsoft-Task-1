import React from "react";

// import "@fontsource/poppins"
const Title = () => {
  return (
    <>
      <section id="title" className="title-page">
        <div className="hz-info">
          <p data-aos="zoom-in" className="name ">
            HANZLA ZAHID
          </p>
          {/* <div class="wrapper">
            <div class="typing-demo">This is a typing demo.</div>
          </div> */}
          <p className="info">
            {" "}
            HELLO ! I am a web developer. Building websites that not only look
            great but also perform flawlessly, every time.
          </p>
          <a className="ad" href="#contact">
            <button className="btn">Contact Me</button>
          </a>
        </div>
        <div className="hz-img">
          <img className="img" src={require("./hanzla.png")} />
        </div>
      </section>
    </>
  );
};

export default Title;
