import styled from "styled-components";
import { Modal as AntdModal } from "antd";
import tw from "twin.macro";

export const Modal = styled(AntdModal)`
  .ant-modal-close {
    ${tw`hidden`}
  }
  .ant-modal-content {
    ${tw`bg-black`}
    .ant-modal-header {
      ${tw`bg-black`}
    }
  }
`;
