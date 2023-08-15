import { useGlobalModalContext } from "god5g";
import { Modal } from "../../atoms/Modal/component";

export const TempBlockModal = () => {
  const { hideModal } = useGlobalModalContext();

  return (
    <Modal onOk={hideModal} onCancel={hideModal} open>
      Block
    </Modal>
  );
};
