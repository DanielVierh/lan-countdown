import { useState, useEffect } from "react";
import DateBanner from "./components/DateBanner";

function App() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const elapse_time = () => {
      const now = new Date();
      const targetDate = new Date("2025-12-20T16:00:00");
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

  const alternate_return = (days, hours, minutes) => {
    if (days === 0 && hours === 0 && minutes === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <main className="main">
      <img src="bg.png" alt="background" />

      <DateBanner date={"20.12"} time={"16:00"} />

      <div className="counter">
        {alternate_return(
          timeLeft.days ?? 0,
          timeLeft.hours ?? 0,
          timeLeft.minutes ?? 0
        ) ? (
          "Ok, ich geh dann mal"
        ) : (
          <>
            {timeLeft.days ?? 0} {timeLeft.days === 1 ? "Tag" : "Tage"} <br />
            {return_zero(timeLeft.hours ?? 0)}:
            {return_zero(timeLeft.minutes ?? 0)}:
            {return_zero(timeLeft.seconds ?? 0)}
          </>
        )}
      </div>
    </main>
  );
}

export default App;
