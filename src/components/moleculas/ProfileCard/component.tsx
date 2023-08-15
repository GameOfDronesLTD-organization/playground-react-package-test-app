import { Avatar, Dropdown, MenuProps, Typography } from "antd";
import {
  CaretDownOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { usersApi } from "god5g";
import { useGlobalModalContext } from "god5g";
import { ModalType } from "../../../types/modals";

export const ProfileCard = () => {
  const { data } = useQuery(["current", "user"], () =>
    usersApi.getCurrentUser().then((data) => data.data)
  );

  const { showModal } = useGlobalModalContext();

  const items: MenuProps["items"] = [
    {
      label: (
        <div
          onClick={() => showModal(ModalType.profile)}
          className="py-1 flex gap-3 items-center"
        >
          <UserOutlined />
          <Typography.Text>Открыть профиль</Typography.Text>
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <Link to="/login" className="py-1 flex gap-3 items-center ">
          <LogoutOutlined className="text-current text-red-500" />
          <Typography.Text className="text-current text-red-500">
            Выйти
          </Typography.Text>
        </Link>
      ),
      key: "1",
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <div className="w-56 rounded-lg flex items-center justify-between gap-3 bg-gray-100 px-4 py-2">
        <div className="flex items-center justify-center gap-2">
          <Avatar>{data?.full_name.charAt(0)}</Avatar>
          <Typography.Text className="font-medium">
            {data?.full_name}
          </Typography.Text>
        </div>
        <CaretDownOutlined />
      </div>
    </Dropdown>
  );
};
