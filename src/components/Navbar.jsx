import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5  px-10 bg-blue-900">
      <Link to="/" className="font-semibold text-2xl">
        Media search
      </Link>
      <div className="flex gap-5 text-xl items-center">
        <Link
          className="text-lg text-black bg-white  rounded px-4 py-2 active:scale-95"
          to="/"
        >
          Search
        </Link>
        <Link
          className="text-lg text-black bg-white  rounded px-4 py-2 active:scale-95"
          to="/collection"
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
