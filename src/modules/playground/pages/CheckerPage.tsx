import { useQuery } from "react-query";
import { checkerAPI } from "god5g";
import { Spin, notification } from "antd";
import { useNavigate } from "react-router-dom";

export const CheckerPage = () => {
  const navigate = useNavigate();

  const { isLoading, isSuccess } = useQuery(
    ["availableCarsCheck"],
    checkerAPI.getAvailableCarsCheck,
    {
      onSuccess(res) {
        if (!res) {
          navigate("/playground/cameras");
          notification.warning({
            message: "Нет доступных машин!",
          });
        }
      },
      retry: false,
    }
  );

  useQuery(
    ["availableCarId"],
    () => checkerAPI.getFreeCarID().then((res) => res.data),
    {
      onSuccess(carId) {
        console.log(carId);
        navigate(`/game/rc/${carId}`);
        notification.success({
          message: "Перенаправление на игру",
        });
      },
      onError(err: any) {
        console.log(err.response.status === 403);
        if (err.response.status === 403) {
          notification.warning({
            message: "Нет доступных машин!",
          });
          return navigate("/playground/cameras");
        }
      },
      retry: false,
      enabled: isSuccess && !isLoading,
    }
  );

  return (
    <div className="relative w-full h-full">
      <Spin
        size="large"
        tip="Поиск доступных машин..."
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};
