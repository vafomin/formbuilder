import { useState } from "react";
import { observer } from "mobx-react";
import Modal from "../components/modal";
import FormElement from "../components/form-element";
import Button from "../components/button";
import {
  FaCheckSquare,
  FaChevronCircleDown,
  FaFont,
  FaRegSquare,
  FaDownload,
} from "react-icons/fa";
import { useStore } from "../hooks/useStore";

const Editor = ({ onDownload }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [currentEl, setCurrentEl] = useState("");

  const { formStore } = useStore();
  const { form, formLength, deleteItem } = formStore;

  const onShowModal = (el?: string) => {
    setIsModalVisible(true);
    setCurrentEl(el);
  };

  const onCloseModal = () => {
    setIsModalVisible(false);
    setCurrentItem(null);
    setCurrentEl("");
  };

  const onEdit = (id: number) => {
    setCurrentItem(form[id - 1]);
    onShowModal();
  };

  const onDelete = (id: number) => {
    deleteItem(id);
  };

  return (
    <aside className="flex flex-col w-full sm:w-4/12 sm:fixed sm:right-0 sm:top-0 sm:h-screen bg-slate-700 p-10 overflow-auto">
      <h1 className="text-white text-4xl mb-4">Editor</h1>
      {form &&
        form.map((item) => (
          <FormElement
            key={`${item.id}_element_${item.element}`}
            id={item.id}
            name={item.element === "button" ? item.label : item.name}
            onEdit={() => onEdit(item.id)}
            onDelete={() => onDelete(item.id)}
          />
        ))}

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
        disabled={formLength === 0}
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
