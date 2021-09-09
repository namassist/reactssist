import React from "react";
import Logo from "../assets/logo.png";
import "./card.css";

const Card = ({ title, text }) => {
  return (
    <section className="card">
      <div className="container">
        <div className="logo-section">
          <img src={Logo} alt="logo-jabarcodingcamp" />
        </div>
        <div className="title-section">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <div className="form-section">
          <div className="form-check">
            <input type="checkbox" value="" id="todo" />
            <label class="form-check-label" for="todo">
              Belajar Git & CLI
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" value="" id="todo" />
            <label class="form-check-label" for="todo">
              Belajar HTML & CSS
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" value="" id="todo" />
            <label class="form-check-label" for="todo">
              Belajar Javascript
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" value="" id="todo" />
            <label class="form-check-label" for="todo">
              Belajar ReactJS Dasar
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" value="" id="todo" />
            <label class="form-check-label" for="todo">
              Belajar ReactJS Advance
            </label>
          </div>
          <button type="submit">Send</button>
        </div>
      </div>
    </section>
  );
};

export default Card;
