import { useState, useEffect } from "react";

function App() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const elapse_time = () => {
      const now = new Date();
      const targetDate = new Date("2025-10-25T17:00:00");
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    elapse_time();
    const timer = setInterval(elapse_time, 1000);
    return () => clearInterval(timer);
  }, []);

  const return_zero = (val) => (val < 10 ? `0${val}` : val);

  return (
    <main className="main">
      <img src="bg.png" alt="background" />

      <div className="date-shield">
        25.10 <br /> 17:00
      </div>

      <div className="counter">
        {timeLeft.days} {timeLeft.days === 1 ? "Tag" : "Tage"} <br />
        {return_zero(timeLeft.hours)}:{return_zero(timeLeft.minutes)}:
        {return_zero(timeLeft.seconds)}
      </div>
    </main>
  );
}

export default App;
