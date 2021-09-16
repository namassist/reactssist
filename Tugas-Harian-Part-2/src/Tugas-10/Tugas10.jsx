// Library
import React, { useState, useEffect } from "react";

// CSS
import "./Tugas10.css";
import "../index.css";

// Components
import Layout from "../components/Layout";
import Container from "../components/Container";

const Tugas10 = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-US"));
  const [countdown, setCountdown] = useState(100);

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString("en-US")), 1000);

    const tick = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearInterval(tick);
  }, [countdown]);

  if (countdown > 0) {
    return (
      <Layout myClass="my-clock">
        <Container>
          <div className="clock">
            <h1>Now At : {time}</h1>
          </div>
          <div className="countdown">
            <h4>Countdown: {countdown}</h4>
          </div>
        </Container>
      </Layout>
    );
  } else {
    return null;
  }
};

export default Tugas10;
