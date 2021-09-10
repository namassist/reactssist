// Library
import React, { useState, useEffect } from "react";
// Components
import Section from "../components/Section";
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
      <Section myClass="my-clock">
        <Container>
          <div className="clock">
            <h1>Now At : {time}</h1>
          </div>
          <div className="countdown">
            <h4>Countdown: {countdown}</h4>
          </div>
        </Container>
      </Section>
    );
  } else {
    return <></>;
  }
};

export default Tugas10;
