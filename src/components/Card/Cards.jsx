import React from "react";
import { Link } from "react-router-dom";
const Cards = ({ results }) => {
  let display;

  if (results) {
    display = results.map((ch) => {
      let { id, name, image, status } = ch;
      return (
        <Link
          to={`${id}`}
          key={id}
          className="p-4 bg-blue-50 flex mx-auto my-2 rounded border-2 shadow hover:shadow-md hover:shadow-blue-500"
        >
          <div className="">
            <img src={image} alt={name} className="max-w-full h-auto" />

            <div className="content cursor-pointer">
              <div className="text-sm pt-2  text-center">{name}</div>

              {(() => {
                if (status === "Alive") {
                  return (
                    <div className="text-sm text-green-600 pt-2  text-center">
                      Status : {status}
                    </div>
                  );
                } else if (status === "Dead") {
                  return (
                    <div className="text-sm text-red-600 pt-2 text-center">
                      Status : {status}
                    </div>
                  );
                } else {
                  return (
                    <div className="text-sm text-gray-600 pt-2 text-center">
                      Status : {status}
                    </div>
                  );
                }
              })()}
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = "No Characters Found";
  }

  return <>{display}</>;
};
export default Cards;
