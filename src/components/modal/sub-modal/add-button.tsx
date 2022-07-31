import Input from "../../input";
import Button from "../../button";
import { useStore } from "../../../hooks/useStore";
import { useForm } from "react-hook-form";

const AddButton = ({ el, item, onClose }) => {
  const { formStore } = useStore();
  const { addItem, setItem, formLength } = formStore;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      label: item?.label || "",
    },
  });

  const onSave = (data) => {
    const field = {
      id: item ? item.id : formLength + 1,
      element: item ? item?.element : el,
      label: data.label,
    };

    if (item) setItem(field);
    else addItem(field);
    onClose();
  };

  return (
    <div className="flex flex-col gap-2 ">
      <Input
        label="Label"
        name="label"
        placeholder="Enter label..."
        hasErrors={errors.label ? true : false}
        {...register("label", { required: true })}
      />
      <div className="flex flex-col gap-4 pt-4 sm:flex-row">
        <Button label="Save" onClick={handleSubmit(onSave)} />
        <Button label="Close" onClick={onClose} />
      </div>
    </div>
  );
};

export default AddButton;
