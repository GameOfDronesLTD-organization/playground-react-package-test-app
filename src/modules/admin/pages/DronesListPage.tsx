import { Button, Table } from "antd";
import { useQuery } from "react-query";
import { dronesAPI } from "god5g";
import { Link } from "react-router-dom";

export const DronesListPage = () => {
  const { data, isLoading } = useQuery(["drones"], () =>
    dronesAPI.getAllDrones().then((res) => res.data)
  );

  const columns = [
    {
      title: "id",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "left",
      dataIndex: "left",
      key: "left",
    },
    {
      title: "right",
      dataIndex: "right",
      key: "right",
    },
    {
      title: "center_x",
      dataIndex: "center_x",
      key: "center_x",
    },
    {
      title: "center_y",
      dataIndex: "center_y",
      key: "center_y",
    },
    {
      title: "forward_coefficient",
      dataIndex: "forward_coefficient",
      key: "forward_coefficient",
    },
    {
      title: "downward_coefficient",
      dataIndex: "downward_coefficient",
      key: "downward_coefficient",
    },
    {
      title: "left_coefficient",
      dataIndex: "left_coefficient",
      key: "left_coefficient",
    },
    {
      title: "right_coefficient",
      dataIndex: "right_coefficient",
      key: "right_coefficient",
    },
    {
      title: "stream_pipeline",
      dataIndex: "stream_pipeline",
      key: "stream_pipeline",
    },
    {
      title: "",
      dataIndex: "_id",
      key: "stream_pipeline",
      render: (id: string) => (
        <Link to={`/admin/drones/${id}`}>
          <Button>edit</Button>
        </Link>
      ),
    },
  ];

  return (
    <div>
      <Button>Add drone</Button>
      <Table loading={isLoading} dataSource={data} columns={columns} />
    </div>
  );
};
