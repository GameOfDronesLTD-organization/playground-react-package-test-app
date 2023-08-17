import { useQuery } from "react-query";
import { checkerAPI } from "god5g";
import { useNavigate } from "react-router-dom";

export const ListOfDrones = () => {
  const navigate = useNavigate();

  const availableCarsCheck = useQuery(
    ["availableCarsCheck"],
    checkerAPI.getAvailableCarsCheck,
    {
      retry: false,
    }
  );

  const availableCarId = useQuery(
    ["availableCarId"],
    () => checkerAPI.getFreeCarID().then((res) => res.data),
    {
      retry: false,
      enabled: availableCarsCheck.isSuccess && availableCarsCheck.data.data,
    }
  );

  if (
    (availableCarsCheck.isSuccess && !availableCarsCheck.data.data) ||
    availableCarId.isError
  ) {
    return "Нет доступных машин!";
  }

  if (availableCarId.isSuccess) {
    console.log(availableCarId.data.carId);
    navigate(`/drone/${availableCarId.data.carId}`);
  }

  return <h1>Loading...</h1>;
};
