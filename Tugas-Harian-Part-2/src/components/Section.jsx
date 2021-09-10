import React from "react";
import "../index.css";

const Section = ({ children, myClass }) => {
  return <section className={myClass}>{children} </section>;
};

export default Section;
