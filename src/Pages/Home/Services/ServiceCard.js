import React from "react";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex">
          <p className="text-xl text-red-400 font-semibold">Price:${price}</p>
          <div className="card-actions justify-end">
            <button className="text-red-400 font-bold text-4xl">→</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
