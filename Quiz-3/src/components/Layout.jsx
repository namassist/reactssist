import React from "react";

const Layout = ({ content }) => {
  return (
    <>
      <div className="row">
        <div className="section">
          <div className="card">{content}</div>
        </div>
      </div>
      <footer>
        <h5>&copy; Quiz 3 ReactJS Sanbercode</h5>
      </footer>
    </>
  );
};

export default Layout;
