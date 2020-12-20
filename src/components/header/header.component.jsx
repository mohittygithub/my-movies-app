import React from "react";
import "./header.styles.css";
import { Link } from "react-router-dom";
import FormInput from "../form-input/form-input.component";

const Header = () => {
  return (
    <div className="container">
      <div className="brand">
        <h1>
          <Link to="/">Movie-Watchlist</Link>
        </h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">
            <FormInput type="button" value="WatchList" />
          </Link>
        </li>
        <li>
          <Link to="/watched">
            <FormInput type="button" value="Watched" />
          </Link>
        </li>
        <li>
          <Link to="/add">
            <FormInput type="button" value="+ Add" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
