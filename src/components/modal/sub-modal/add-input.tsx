import Input from "../../input";
import Button from "../../button";
import { useStore } from "../../../hooks/useStore";
import { useForm } from "react-hook-form";

const AddInput = ({ el, item, onClose }) => {
  const { formStore } = useStore();
  const { addItem, setItem, formLength } = formStore;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      label: item?.label || "",
      name: item?.name || "",
      required: item?.required || false,
      placeholder: item?.placeholder || "",
    },
  });

  const onSave = (data) => {
    const field = {
      id: item ? item.id : formLength + 1,
      element: item ? item?.element : el,
      label: data.label,
      name: data.name,
      required: data.required,
      placeholder: data.placeholder,
    };

    if (item) setItem(field);
    else addItem(field);
    onClose();
  };

  return (
    <div className="flex flex-col gap-2 ">
      <Input
        label="Name"
        name="name"
        placeholder="Enter name..."
        hasErrors={errors.name ? true : false}
        {...register("name", { required: true })}
      />
      <Input
        label="Label"
        name="label"
        placeholder="Enter label..."
        hasErrors={errors.label ? true : false}
        {...register("label", { required: true })}
      />
      <label className="flex items-center space-x-3 my-3">
        <input
          type="checkbox"
          name="required-cb"
          className="bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-indigo-500 checked:border-transparent focus:outline-none"
          {...register("required")}
        />
        <span className="text-gray-700 font-normal">Required</span>
      </label>
      <Input
        label="Placeholder"
        name="placeholder"
        placeholder="Enter placeholder..."
        hasErrors={errors.label ? true : false}
        {...register("placeholder")}
      />

      <div className="flex flex-col gap-4 pt-4 sm:flex-row">
        <Button label="Save" onClick={handleSubmit(onSave)} />
        <Button label="Close" onClick={onClose} />
      </div>
    </div>
  );
};

export default AddInput;