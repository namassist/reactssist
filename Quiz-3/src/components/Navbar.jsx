import React from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";

import Logo from "../assets/img/logo.png";

const Navbar = () => {
  const { Search } = Input;

  const onSearch = (value) => console.log(value);

  return (
    <div className="topnav">
      <Link to="/">
        <img src={Logo} width="70" alt="gambar" />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/mobile-list">Movie List</Link>
      <Link to="about">About</Link>
      <form>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </form>
    </div>
  );
};

export default Navbar;
