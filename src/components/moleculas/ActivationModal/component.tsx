import { Button, notification, Typography } from "antd";
import { FC, useEffect } from "react";
import { accessApi } from "god5g";
import { useGlobalModalContext } from "god5g";
import { useSocketContext } from "god5g";
import { Modal } from "../../atoms/Modal/component";
import { ActivationModalProps } from "./props";

export const ActivationModal: FC<ActivationModalProps> = (props) => {
  const { socket } = useSocketContext();
  const { hideModal, store } = useGlobalModalContext();
  const drone = store.modalProps.drone;

  const handleActivateClick = (minutes: number) => {
    accessApi.updateAccess(socket, drone.id, minutes * 60, () => {
      notification.success({ message: "Успешно активирован" });
    });
  };

  return (
    <Modal
      {...props}
      open
      onCancel={hideModal}
      onOk={() => {
        handleActivateClick(store.modalProps.minutes);
        hideModal();
      }}
      title={
        <Typography.Text className="text-white text-xl">
          Подтверждение
        </Typography.Text>
      }
      footer={
        <div className="flex items-center justify-center gap-2">
          <Button
            onClick={hideModal}
            className="w-full bg-white h-10 font-medium text-base"
          >
            Отмена
          </Button>
          <Button
            onClick={() => {
              handleActivateClick(store.modalProps.minutes);
              hideModal();
            }}
            className="w-full bg-white h-10 font-medium text-base"
          >
            ОК
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-10 my-10 items-center justify-center">
        <Typography.Text className="text-white text-4xl block">
          {store.modalProps.minutes} минут
        </Typography.Text>
        <Typography.Text className="text-gray-400 block">
          Машина{" "}
          <Typography.Text className="text-gray-200 font-medium">
            {drone.DroneModel.name} #{drone.id}
          </Typography.Text>{" "}
          будет активирована
        </Typography.Text>
      </div>
    </Modal>
  );
};
