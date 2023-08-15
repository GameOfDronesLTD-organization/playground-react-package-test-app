import { useEffect } from "react";
import { VideoStream } from "god5g";
import { Button, Spin } from "antd";
import { useSocketContext } from "god5g";

export const CamerasPage = () => {
  const { socket } = useSocketContext();

  useEffect(() => {
    socket.disconnect();
    socket.connect();
  }, []);

  if (socket.active) {
    return (
      <div className="relative w-full h-full overflow-hidden">
        <VideoStream droneId={"camera1"} />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Spin />
    </div>
  );
};
