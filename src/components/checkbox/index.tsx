type CheckboxProps = {
  label: string;
  name: string;
  required?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  required = false,
}) => {
  return (
    <label className="flex items-center space-x-3 my-3">
      <input
        type="checkbox"
        name={name}
        className="bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-indigo-500 checked:border-transparent focus:outline-none"
      />
      <span className="flex text-gray-700 font-normal">
        {label} {required && <p className="text-red-500">*</p>}
      </span>
    </label>
  );
};

export default Checkbox;
