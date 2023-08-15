import { Card, Col, Row, Typography } from "antd";
import { FC } from "react";
import { Timer } from "../../atoms/Timer/compoent";
import { Drone } from "../../../types/drone";

export const DroneCard: FC<{ drone: Drone; totalSeconds?: number }> = (
  props
) => {
  return (
    <Card className="bg-black w-full rounded-2xl relative">
      {props.totalSeconds && <Timer totalSeconds={props.totalSeconds} />}
      <div className="flex flex-col gap-3">
        <img
          src={props.drone.DroneModel.image}
          className="rounded-lg object-cover w-full h-48 mb-2"
        />
        <Typography.Text className="text-white text-xl font-semibold ">
          Дрон #{props.drone.id}
        </Typography.Text>
        <Row align={"middle"}>
          <Col span={12}>
            <Typography.Text className="text-gray-400">
              Стоимость:{" "}
            </Typography.Text>
            <Typography.Text className="text-white font-medium">
              {props.drone.price}
            </Typography.Text>
          </Col>
          <Col span={12}>
            <Typography.Text className="text-gray-400">
              Артикул:{" "}
            </Typography.Text>
            <Typography.Text className="text-white font-medium">
              {props.drone.serial_number}
            </Typography.Text>
          </Col>
        </Row>
      </div>
    </Card>
  );
};
