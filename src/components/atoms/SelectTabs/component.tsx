import { Button, Row } from "antd";
import { FC } from "react";
import { SelectTabsProps } from "./props";

export const SelectTabs: FC<SelectTabsProps> = (props) => {
  const options = [
    {
      value: "enabled",
      label: "Все",
    },
    {
      value: "temp_blocked",
      label: "Временно заблокированные",
    },
    {
      value: "blocked_by_admin",
      label: "Заблокированные",
    },
  ];

  return (
    <Row className="mb-10 flex gap-3">
      {options.map((option) => (
        <Button
          className={`${
            props.value === option.value && "bg-black text-white"
          } w-full h-12 max-w-[260px] font-medium`}
          onClick={() => props?.onChange?.(option.value!)}
        >
          {option.label}
        </Button>
      ))}
    </Row>
  );
};
