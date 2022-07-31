import ModalBody from "./modal-body";
import AddButton from "./sub-modal/add-button";
import AddInput from "./sub-modal/add-input";
import AddList from "./sub-modal/add-list";
import AddCheckbox from "./sub-modal/add-checkbox";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  item?: any;
  el?: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, item, el }) => {
  return (
    <ModalBody isOpen={isOpen} onClose={onClose}>
      {(el || item?.element) === "button" && (
        <AddButton item={item} el={el} onClose={onClose} />
      )}
      {(el || item?.element) === "input" && (
        <AddInput item={item} el={el} onClose={onClose} />
      )}
      {(el || item?.element) === "list" && (
        <AddList item={item} el={el} onClose={onClose} />
      )}
      {(el || item?.element) === "checkbox" && (
        <AddCheckbox item={item} el={el} onClose={onClose} />
      )}
    </ModalBody>
  );
};

export default Modal;
