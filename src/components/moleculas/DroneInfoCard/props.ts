import { ColProps } from "antd";
import { Drone } from "../../../types/drone";

export type DroneInfoCardProps = ColProps & {
  drone?: Drone;
  onActivateClick?: () => void;
};
