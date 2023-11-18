import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { img, price, title ,_id} = service;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="no service" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-2xl text-orange-600 semi-bold">$ {price}</p>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-primary bg-orange-600 text-white">
                CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
