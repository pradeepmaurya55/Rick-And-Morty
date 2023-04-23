import React from "react";

const DetailsCard = ({ characterData }) => {
  let { name, image, species, gender, type, status, origin, location } =
    characterData;
  return (
    <div className="flex flex-col p-2 border-2 rounded shadow-sm md:w-1/2 lg:w-1/4">
      <h1 className="p-1 my-2 text-3xl font-bold text-center">{name}</h1>
      <img src={image} alt={name} className="rounded-lg" />

      {(() => {
        if (status === "Alive") {
          return (
            <div className="p-1 my-2 text-center text-white bg-green-600 rounded">
              {status}
            </div>
          );
        } else if (status === "Dead") {
          return (
            <div className="p-1 my-2 text-center text-white bg-red-600 rounded">
              {status}
            </div>
          );
        } else {
          return (
            <div className="p-1 my-2 text-center text-white bg-gray-600 rounded">
              {status}
            </div>
          );
        }
      })()}

      <div className="text-sm text-center content">
        <div className="">
          <span className="font-semibold">Gender: </span>
          {gender}
        </div>
        <div className="">
          <span className="font-semibold">Species: </span>
          {species}
        </div>
        <div className="">
          <span className="font-semibold">Type: </span>
          {type ? type : `----`}
        </div>
        <div className="">
          <span className="font-semibold">Origin: </span>
          {origin?.name}
        </div>
        <div className="">
          <span className="font-semibold">Location: </span>
          {location?.name}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
