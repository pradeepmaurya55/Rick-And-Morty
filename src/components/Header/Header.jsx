import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex flex-row items-center justify-center py-2 bg-blue-50">
      <Link to="/" className="text-3xl text-center text-gray-600 ">
        Rick And Morty
      </Link>
    </div>
  );
};

export default Header;
