import { useEffect, useState, useMemo } from "react";

const CountDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [cycle, setCycle] = useState(0);

  const cycles = useMemo(
    () => [
      { startDate: new Date("2024-05-08T19:35:00+05:30"), duration: 5 },
      { startDate: new Date("2024-04-30T00:00:00-03:00"), duration: 15 },
      { startDate: new Date("2024-05-05T00:00:00-03:00"), duration: 15 },
    ],
    []
  );

  useEffect(() => {
    const currentCycle = cycles[cycle];
    let { startDate, duration } = currentCycle;

    startDate = new Date(startDate.getTime() + 30 * 60 * 60 * 1000);

    const endTime = new Date("2024-05-18T16:00:00Z");

    const interval = setInterval(() => {
      const currentTime = new Date();
      let timeDiff = endTime - currentTime;
      if (timeDiff <= 0) {
        setDays(0);
        setHours(0);
        setMins(0);
        setSecs(0);
        clearInterval(interval);
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((timeDiff / (1000 * 60)) % 60);
      const secs = Math.floor((timeDiff / 1000) % 60);

      setDays(days);
      setHours(hours);
      setMins(mins);
      setSecs(secs);
    }, 1000);

    return () => clearInterval(interval);
  }, [cycle, cycles]);

  return (
    <div className="countdown">
      <FlipDigit value={days} label="Day" />
      <FlipDigit value={hours} label="Hour" />
      <FlipDigit value={mins} label="Min" />
      <FlipDigit value={secs} label="Sec" />
    </div>
  );
};

const FlipDigit = ({ value, label }) => {
  const [previousValue, setPreviousValue] = useState(value);

  useEffect(() => {
    if (previousValue !== value) {
      const container = document.getElementById(`${label.toLowerCase()}-flip`);
      container?.classList?.add("flip");
      setTimeout(() => {
        container?.classList?.remove("flip");
      }, 500);
    }
    setPreviousValue(value);
  }, [value, previousValue, label]);

  return (
    <div
      className="cursor-pointer flip-container"
      id={`${label.toLowerCase()}-flip`}
    >
      <div className="font-bold flip-digit">
        <span>{value < 10 ? "0" + value : value}</span>
      </div>
      <div className="font-bold flip-label">
        <span>{label}</span>
      </div>
    </div>
  );
};

export default CountDown;
