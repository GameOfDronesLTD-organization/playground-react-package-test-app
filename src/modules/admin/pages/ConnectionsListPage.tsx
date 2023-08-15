import { Table, Typography } from "antd";
import { useQuery } from "react-query";
import { checkerAPI } from "god5g";

export const ConnectionsListPage = () => {
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Client Socket Id",
      dataIndex: "clientSocketId",
      key: "clientSocketId",
    },
    {
      title: "Drone Socket Id",
      dataIndex: "droneSocketId",
      key: "droneSocketId",
    },
  ];

  const { data, isLoading } = useQuery([], () =>
    checkerAPI.getConnections().then((res) => res.data)
  );

  return (
    <div className="px-4 py-4">
      <Table dataSource={data} loading={isLoading} columns={columns} />
    </div>
  );
};
