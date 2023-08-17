import { useParams } from "react-router-dom";
import { VideoStream } from "god5g";
import { Controls } from "god5g";

export const Drone = () => {
  const { droneId } = useParams();

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Controls droneId={droneId || "default"} />
      <VideoStream droneId={droneId || "default"} />
    </div>
  );
};
