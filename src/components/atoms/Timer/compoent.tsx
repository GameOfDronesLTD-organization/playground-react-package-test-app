import { FC, useEffect, useState } from "react";
import { DroneActivationCardProps } from "./props";

export const Timer: FC<DroneActivationCardProps> = ({ totalSeconds }) => {
  const [leftTotalSeconds, setLeftTotalSeconds] = useState(totalSeconds);

  useEffect(() => {
    setLeftTotalSeconds(totalSeconds);
  }, [totalSeconds]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLeftTotalSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearTimeout(intervalId);
  }, []);

  const getLeftSeconds = (totalSeconds: number): string => {
    const leftSeconds = Math.round(totalSeconds % 60);
    if (leftSeconds > 9) return "" + leftSeconds;
    return `0${leftSeconds}`;
  };

  const getLeftMinutes = (totalSeconds: number) => {
    const leftMinutes = Math.round(Math.floor(totalSeconds / 60));
    return leftMinutes;
  };

  return leftTotalSeconds > 0 ? (
    <div className="bg-white absolute top-4 left-4 px-2 py-1 w-14 rounded">
      <div className="flex items-center justify-center">
        {getLeftMinutes(leftTotalSeconds)}
        {":"}
        {getLeftSeconds(leftTotalSeconds)}
      </div>
    </div>
  ) : null;
};
