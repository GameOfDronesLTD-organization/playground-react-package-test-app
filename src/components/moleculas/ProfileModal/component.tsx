import { useGlobalModalContext } from "god5g";
import { Modal } from "../../atoms/Modal/component";

export const ProfileModal = () => {
  const { hideModal } = useGlobalModalContext();

  return (
    <Modal onCancel={hideModal} onOk={hideModal} open>
      profile
    </Modal>
  );
};
