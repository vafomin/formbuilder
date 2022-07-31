import React from "react";

type InputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  hasErrors?: boolean;
  required?: boolean;
};

const Input: React.FC<InputProps> = React.forwardRef(
  (
    {
      label,
      name,
      type = "text",
      placeholder = "",
      hasErrors,
      required = false,
      ...rest
    },
    ref: React.RefObject<HTMLInputElement>
  ) => {
    const inputClass = hasErrors
      ? "focus:ring-red-500 focus:border-red-500"
      : "focus:ring-indigo-500 focus:border-indigo-500";

    return (
      <div>
        <label
          htmlFor={name}
          className="flex text-sm font-medium text-gray-700"
        >
          {label}
          {required && <p className="text-red-500">*</p>}
        </label>
        <div className="mt-1">
          <input
            type={type}
            name={name}
            className={`shadow-sm block w-full sm:text-sm border-gray-300 rounded-md ${inputClass}`}
            placeholder={placeholder}
            ref={ref}
            {...rest}
          />
        </div>
      </div>
    );
  }
);

export default Input;
