import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {_id, img, title, price } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center">
          <p className="text-xl text-red-400 font-semibold">Price:${price}</p>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}>
              <button className="text-red-400 font-bold text-4xl rounded-full px-2">→</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
