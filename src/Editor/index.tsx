import { useState } from "react";
import { observer } from "mobx-react";
import Modal from "../components/modal";
import Button from "../components/button";
import {
  FaCheckSquare,
  FaChevronCircleDown,
  FaFont,
  FaRegSquare,
  FaDownload,
} from "react-icons/fa";
import { useStore } from "../hooks/useStore";
import Elements from "./elements";

const Editor = ({ onDownload }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [currentEl, setCurrentEl] = useState("");

  const { formStore } = useStore();
  const { formFields, formButtons, formIsEmpty, deleteItem, getItemById } =
    formStore;

  const onShowModal = (el?: string) => {
    setIsModalVisible(true);
    setCurrentEl(el);
  };

  const onCloseModal = () => {
    setIsModalVisible(false);
    setCurrentItem(null);
    setCurrentEl("");
  };

  const onEdit = (id: string) => {
    const item = getItemById(id);
    setCurrentItem(item);
    onShowModal();
  };

  const onDelete = (id: string) => {
    deleteItem(id);
  };

  return (
    <aside className="flex flex-col w-full sm:w-4/12 sm:fixed sm:right-0 sm:top-0 sm:h-screen bg-slate-700 p-10 overflow-auto">
      <h1 className="text-white text-4xl mb-4">Editor</h1>
      <Elements
        formFields={formFields}
        formButtons={formButtons}
        onEdit={onEdit}
        onDelete={onDelete}
      />

      <div className="flex flex-col gap-4 mt-4">
        <div className="flex gap-4">
          <Button
            label="Add input"
            icon={<FaFont />}
            className=""
            onClick={() => onShowModal("input")}
          />
          <Button
            label="Add list"
            icon={<FaChevronCircleDown />}
            className=""
            onClick={() => onShowModal("list")}
          />
        </div>
        <div className="flex gap-4">
          <Button
            label="Add checkbox"
            icon={<FaCheckSquare />}
            className=""
            onClick={() => onShowModal("checkbox")}
          />
          <Button
            label="Add button"
            icon={<FaRegSquare />}
            className=""
            onClick={() => onShowModal("button")}
          />
        </div>
      </div>

      <Button
        label="Download form"
        icon={<FaDownload />}
        className="mt-4"
        onClick={onDownload}
        disabled={formIsEmpty}
      />

      <Modal
        isOpen={isModalVisible}
        onClose={onCloseModal}
        item={currentItem}
        el={currentEl}
      />
    </aside>
  );
};

export default observer(Editor);
