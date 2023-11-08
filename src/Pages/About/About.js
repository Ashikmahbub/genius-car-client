import React from "react";
import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" relative w-1/2">
            <img src={person} alt="" className="rounded-lg shadow-2xl w-4/5 h-full" />
            <img src={parts} alt="" className="rounded-lg shadow-2xl absolute w-3/5 right-5 top-1/2 border-8" />
          </div>
          <div>
            <p className="my-5 text-2xl text-orange-600 font-bold">About Us</p>
            <h1 className="text-5xl font-bold w-1/2">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary bg-orange-600">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
