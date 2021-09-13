// Library
import React from "react";
// Components
import Layout from "../components/Layout";
import Container from "../components/Container";
import List from "./List";
// Assets
import Logo from "../assets/logo.png";
import "../index.css";

const Tugas9 = () => {
  return (
    <Layout myClass="card">
      <Container>
        <div className="logo-section">
          <img src={Logo} alt="logo-jabarcodingcamp" />
        </div>
        <div className="title-section">
          <h1>things to do</h1>
          <p>During Bootcamp in Jabarcodingcamp</p>
        </div>
        <div className="form-section">
          <List name="Belajar Git & CLI" type="checkbox" />
          <List name="Belajar HTML & CSS" type="checkbox" />
          <List name="Belajar Javascript" type="checkbox" />
          <List name="Belajar ReactJS Dasar" type="checkbox" />
          <List name="Belajar ReactJS Advance" type="checkbox" />
          <button type="submit">Send</button>
        </div>
      </Container>
    </Layout>
  );
};

export default Tugas9;
