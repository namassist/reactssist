import React from "react";
import "../index.css";

const Layout = ({ children, myClass }) => {
  return <section className={myClass}>{children} </section>;
};

export default Layout;
