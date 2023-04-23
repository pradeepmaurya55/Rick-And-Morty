import React from "react";
import { Link } from "react-router-dom";
const Cards = ({ results, search }) => {
  let display;

  if (results) {
    display = results.map((ch) => {
      let { id, name, image, status } = ch;
      return (
        <Link
          to={`${id}`}
          key={id}
          className="flex p-4 mx-auto my-2 border-2 rounded shadow bg-blue-50 hover:shadow-md hover:shadow-blue-500"
        >
          <div className="">
            <img src={image} alt={name} className="h-auto max-w-full" />

            <div className="cursor-pointer content">
              <div className="pt-2 text-sm text-center">{name}</div>

              {(() => {
                if (status === "Alive") {
                  return (
                    <div className="pt-2 text-sm text-center text-green-600">
                      Status : {status}
                    </div>
                  );
                } else if (status === "Dead") {
                  return (
                    <div className="pt-2 text-sm text-center text-red-600">
                      Status : {status}
                    </div>
                  );
                } else {
                  return (
                    <div className="pt-2 text-sm text-center text-gray-600">
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
    if (search === "") display = "Loading";
    else display = "No characters Found";
  }

  return <>{display}</>;
};
export default Cards;
