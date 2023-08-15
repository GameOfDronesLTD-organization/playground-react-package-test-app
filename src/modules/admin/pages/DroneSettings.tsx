import { Button, Col, Form, Input, Row, Typography, notification } from "antd";
import { Label } from "../../../components/atoms/Label/component";
import { useFormik } from "formik";
import { useMutation, useQuery } from "react-query";
import { dronesAPI } from "god5g";
import { useParams } from "react-router-dom";
import { useSocketContext } from "god5g";

export const DroneSettings = () => {
  const { id } = useParams<{ id: string }>();
  const { socket } = useSocketContext();

  const formik = useFormik({
    initialValues: {
      name: "",
      forward: 0,
      downward: 0,
      left: 0,
      right: 0,
      center_x: 0,
      center_y: 0,
      forward_coefficient: 0,
      downward_coefficient: 0,
      left_coefficient: 0,
      right_coefficient: 0,
      stream_pipeline: "",
    },
    onSubmit: (values) => {
      if (id === "new") {
        createMutation.mutate(values);
      } else {
        updateMutation.mutate({ id: id!, update: values });
      }
    },
  });

  useQuery(
    ["drones", id],
    () => dronesAPI.getDrone(id!).then((res) => res.data),
    {
      onSuccess: (res) => {
        formik.setValues({
          ...res,
        });
      },
      onError: () => {
        notification.error({
          message: "Ошибка при загрузке данных о дроне",
        });
      },
      enabled: id !== "new",
    }
  );

  const updateMutation = useMutation(
    (data: { id: string; update: any }) =>
      dronesAPI.updateDrone(data.id, data.update),
    {
      onSuccess: () => {
        notification.success({
          message: "Настройки обновлены",
        });
        socket.emit("command", {
          droneId: id,
          payload: "config",
        });
      },
      onError: () => {
        notification.error({
          message: "Ошибка при сохранении настроек",
        });
      },
    }
  );

  const createMutation = useMutation(
    (values: any) => dronesAPI.createDrone(values),
    {
      onSuccess: () => {
        notification.success({
          message: "Настройки созданы",
        });
      },
      onError: () => {
        notification.error({
          message: "Настройки не удалось создать",
        });
      },
    }
  );

  const deleteMutation = useMutation(
    (id: string) => dronesAPI.deleteDrone(id),
    {
      onSuccess: () => {
        notification.success({
          message: "Настройки удалены",
        });
      },
      onError: () => {
        notification.error({
          message: "Настройки не удалось удалить",
        });
      },
    }
  );

  return (
    <Form className="max-w-xl w-full p-6" layout="vertical">
      <div className="mt-6 border p-2">
        <Row className="w-full" gutter={[12, 12]}>
          <Col span={12}>
            <Form.Item label={<Label>Forward</Label>}>
              <Input
                name="forward"
                value={formik.values.forward}
                onChange={formik.handleChange}
                type="number"
                placeholder="[0, 2500]"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label={<Label>Backward</Label>}>
              <Input
                name="downward"
                value={formik.values.downward}
                onChange={formik.handleChange}
                type="number"
                placeholder="[0, 2500]"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row className="w-full" gutter={[12, 12]}>
          <Col span={24}>
            <Form.Item label={<Label>Center Y</Label>}>
              <Input
                name="center_y"
                type="number"
                value={formik.values.center_y}
                onChange={formik.handleChange}
                placeholder="[0, 2500]"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label={<Label>Forward Coefficient</Label>}>
              <Input
                name="forward_coefficient"
                type="number"
                value={formik.values.forward_coefficient}
                onChange={formik.handleChange}
                placeholder="[0, 10]"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label={<Label>Downward Coefficient</Label>}>
              <Input
                name="downward_coefficient"
                type="number"
                value={formik.values.downward_coefficient}
                onChange={formik.handleChange}
                placeholder="[0, 10]"
              />
            </Form.Item>
          </Col>
        </Row>
      </div>

      <div className="mt-6 border p-2">
        <Row className="w-full" gutter={[12, 12]}>
          <Col span={12}>
            <Form.Item label={<Label>Left</Label>}>
              <Input
                name="left"
                type="number"
                value={formik.values.left}
                onChange={formik.handleChange}
                placeholder="[0, 2500]"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label={<Label>Right</Label>}>
              <Input
                name="right"
                type="number"
                value={formik.values.right}
                onChange={formik.handleChange}
                placeholder="[0, 2500]"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row className="w-full" gutter={[12, 12]}>
          <Col span={24}>
            <Form.Item label={<Label>Center X</Label>}>
              <Input
                name="center_x"
                type="number"
                value={formik.values.center_x}
                onChange={formik.handleChange}
                placeholder="[0, 2500]"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label={<Label>Left Coefficient</Label>}>
              <Input
                name="left_coefficient"
                type="number"
                value={formik.values.left_coefficient}
                onChange={formik.handleChange}
                placeholder="[0, 10]"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label={<Label>Right Coefficient</Label>}>
              <Input
                name="right_coefficient"
                type="number"
                value={formik.values.right_coefficient}
                onChange={formik.handleChange}
                placeholder="[0, 10]"
              />
            </Form.Item>
          </Col>
        </Row>
      </div>

      <div className="mt-6 border p-2">
        <Row className="w-full" gutter={[12, 12]}>
          <Col span={24}>
            <Form.Item label={<Label>Name</Label>}>
              <Input
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label={<Label>Stream pipeline</Label>}>
              <Input
                name="stream_pipeline"
                value={formik.values.stream_pipeline}
                onChange={formik.handleChange}
              />
            </Form.Item>
          </Col>
        </Row>
      </div>

      <Row className="w-full mt-2" gutter={[12, 12]}>
        <Col span={24}>
          <Button
            onClick={formik.submitForm}
            htmlType="submit"
            className="w-full"
          >
            Сохранить & Применить
          </Button>
        </Col>
        <Col span={24}>
          <Button
            onClick={() => deleteMutation.mutate(id!)}
            htmlType="button"
            className="w-full"
          >
            Удалить
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
