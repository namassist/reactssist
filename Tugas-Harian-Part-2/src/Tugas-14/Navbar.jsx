// Library
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Switch } from "antd";
// Context
import { MahasiswaContext } from "../Tugas-13/MahasiswaContext";
// Style
import "./styles/navbar.css";

const Navbar = () => {
  const { changeColor, functions } = useContext(MahasiswaContext);
  const { functionChangeColor } = functions;

  return (
    <nav className={changeColor ? "dark" : ""}>
      <ul>
        <li>
          <Link to="/">Tugas 9</Link>
        </li>
        <li>
          <Link to="/tugas10">Tugas 10</Link>
        </li>
        <li>
          <Link to="/tugas11">Tugas 11</Link>
        </li>
        <li>
          <Link to="/tugas12">Tugas 12</Link>
        </li>
        <li>
          <Link to="/tugas13">Tugas 13</Link>
        </li>
        <li>
          <Link to="/tugas14">Tugas 14</Link>
        </li>
        <li>
          <Link to="/tugas15">Tugas 15</Link>
        </li>
      </ul>
      <div className="toogle-switch">
        <Switch
          onClick={functionChangeColor}
          checkedChildren="Dark"
          unCheckedChildren="White"
          defaultChecked={false}
        />
      </div>
    </nav>
  );
};

export default Navbar;
