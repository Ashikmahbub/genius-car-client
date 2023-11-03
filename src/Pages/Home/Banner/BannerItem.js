import React from "react";
import './Banner.css';

const BannerItem = ({ slide }) => {
  const {image,id,prev,next}=slide ;

  return (
    
      <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="carousol-image">
          <img src={image} className="w-full rounded-xl" />
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/3">
          <h1 className="text-6xl text-white font-bold">
            Affordable <br />
            Price for car <br />
            Servicing
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 w-2/5 mt-4">
          <p className=" text-white font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Architecto eveniet sapiente praesentium commodi ut voluptate nihil
            sit tempore quidem necessitatibus sequi distinctio vel perferendis
            enim temporibus reiciendis, culpa neque cupiditate?
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4 w-2/5 mt-4">
          <button className="btn btn-warning mr-5">Warning</button>
          <button className="btn btn-outline btn-warning">Warning</button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle mr-5">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    
  );
};

export default BannerItem;
