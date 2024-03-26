import React from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movix</div>
      </Link>
      <div className="user-image">
        <CiUser />
      </div>
    </div>
  );
};

export default Header;
