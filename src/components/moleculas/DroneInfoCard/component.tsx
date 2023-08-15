import { FC, useState } from "react";
import { Button, Col, Typography } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { DroneInfoCardProps } from "./props";
import { useGlobalModalContext } from "god5g";
import { ModalType } from "../../../types/modals";
import { Link } from "react-router-dom";

export const DroneInfoCard: FC<DroneInfoCardProps> = ({
  onActivateClick,
  drone,
  ...restProps
}) => {
  const { showModal } = useGlobalModalContext();

  const [minutes, setMinues] = useState(10);

  const handleInc = () => {
    setMinues((prev) => prev + 1);
  };

  const handleDec = () => {
    setMinues((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <Col
      className="bg-black text-white rounded-2xl px-10 py-4 flex flex-col items-start justify-around gap-4"
      {...restProps}
    >
      <Typography.Text className="text-current text-lg">
        Информация
      </Typography.Text>
      <div>
        <Typography.Text className="text-gray-400 block">
          Артикул
        </Typography.Text>
        <Typography.Text className="text-current block text-2xl font-medium">
          {drone?.serial_number}
        </Typography.Text>
      </div>
      <div>
        <Typography.Text className="text-gray-400 block">
          Стоимость активации
        </Typography.Text>
        <Typography.Text className="text-current block text-2xl font-medium">
          {drone?.price} KZT
        </Typography.Text>
      </div>
      <div>
        <Typography.Text className="text-gray-400 block">
          Длительность активации
        </Typography.Text>
        <div className="flex items-center gap-3 mt-1">
          <Button
            onClick={handleDec}
            className="flex w-8 bg-white p-1 rounded-full"
          >
            <MinusOutlined className="m-auto text-black" />
          </Button>
          <Typography.Text className="text-current block text-2xl font-medium">
            {minutes} минут
          </Typography.Text>
          <Button
            onClick={handleInc}
            className="flex w-8 bg-white p-1 rounded-full"
          >
            <PlusOutlined className="m-auto text-black" />
          </Button>
        </div>
      </div>
      <div className="w-full">
        <Link to={`/drone/car/${drone?.id}`}>
          <Button className="w-full h-10 bg-[#1F1F1F] text-[#6f7373] border-[#1f1f1f] font-semibold mb-4">
            Открыть панель управления
          </Button>
        </Link>
        <Button
          onClick={() => {
            showModal(ModalType.tempBlock);
          }}
          className="w-full h-10 bg-[#1F1F1F] text-[#6f7373] border-[#1f1f1f] font-semibold mb-4"
        >
          Временно заблокировать
        </Button>
        {drone?.status === "enabled" && (
          <Button
            onClick={() =>
              showModal(ModalType.activateDrone, {
                drone,
                minutes,
              })
            }
            className="w-full h-10 bg-white text-black font-semibold"
          >
            Активировать
          </Button>
        )}
      </div>
    </Col>
  );
};
