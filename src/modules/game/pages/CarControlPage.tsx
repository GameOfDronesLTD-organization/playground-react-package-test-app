import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { requestFullScreen } from "god5g";
import { Controls } from "god5g";
import { VideoStreamJetson } from "god5g";

export const CarControlPage = () => {
  const { id: droneId } = useParams<{ id: string }>();

  useEffect(() => {
    requestFullScreen(document.body);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Controls droneId={droneId || "default"} />
      <VideoStreamJetson droneId={droneId || "default"} />
    </div>
  );
};
