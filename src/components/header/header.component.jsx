import React from "react";
import "./header.styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="brand">
        <h1>
          <Link to="/">Brand</Link>
        </h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/watchlist">WatchList</Link>
        </li>
        <li>
          <Link to="/watched">Watched</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
