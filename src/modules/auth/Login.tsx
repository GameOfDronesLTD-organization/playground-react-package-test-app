import { Button, Form, notification, Typography } from "antd";
import { Input } from "../../components/atoms/Input/component";
import { Label } from "../../components/atoms/Label/component";
import fullLogo from "../../assets/full-logo.svg";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { authApi } from "god5g";
import { AxiosError } from "axios";
import { appLocalStorage } from "god5g";
import { useEffect } from "react";

export const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    appLocalStorage.removeAuthToken();
    appLocalStorage.removeRefreshToken();
  }, []);

  const loginMutation = useMutation(
    (data: { email: string; password: string }) => authApi.login(data),
    {
      onSuccess(data) {
        console.log(data);
        appLocalStorage.persistTokens({
          accessToken: data.data.access_token,
          refreshToken: data.data.refresh_token,
        });
        navigate("/");
      },
      onError(error: AxiosError<{ msg: string; info: string }>) {
        notification.error({
          key: "login",
          message: error.response ? error.response.data.info : error.message,
        });
      },
    }
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      loginMutation.mutate(values);
    },
  });

  return (
    <div className="w-full h-full flex relative overflow-hidden">
      <div className="z-0">
        <div className="absolute top-0 -left-72 -rotate-[40deg] w-[200vw] h-10 bg-gray-200"></div>
        <div className="absolute top-0 -left-96 -rotate-[40deg] w-[200vw] h-10 bg-red-500"></div>
      </div>
      <div className="m-auto max-w-sm w-full flex flex-col items-center justify-center z-10 p-3">
        <img src={fullLogo} className="max-w-xs mb-6" alt="" />
        <Form
          className="w-full shadow-lg p-5 rounded-lg border bg-white border-gray-100"
          layout="vertical"
          onSubmitCapture={() => formik.submitForm()}
        >
          <Form.Item className="mb-3">
            <Typography.Text className="text-2xl">Вход</Typography.Text>
          </Form.Item>
          <Form.Item className="mb-5" label={<Label>Логин</Label>}>
            <Input
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Введите логин"
            />
          </Form.Item>
          <Form.Item className="mb-5" label={<Label>Пароль</Label>}>
            <Input
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Введите пароль"
            />
          </Form.Item>
          <Button
            htmlType="submit"
            loading={loginMutation.isLoading}
            disabled={loginMutation.isLoading}
            className="w-full h-10 bg-black text-white font-medium"
          >
            Войти
          </Button>
        </Form>
      </div>
    </div>
  );
};
