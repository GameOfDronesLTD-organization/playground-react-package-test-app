import { Layout } from "antd";
import { FC, ReactNode } from "react";
import { CashierHeader } from "../moleculas/CashierHeader/component";

export const CashierLayout: FC<{ children: ReactNode }> = (props) => {
  return (
    <Layout className="w-full h-full p-10" style={{ background: "white" }}>
      <CashierHeader />
      {props.children}
    </Layout>
  );
};
