import React from "react";

type InputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  hasErrors?: boolean;
};

const Input: React.FC<InputProps> = React.forwardRef(
  (
    { label, name, type = "text", placeholder = "", hasErrors, ...rest },
    ref: React.RefObject<HTMLInputElement>
  ) => {
    const inputClass = hasErrors
      ? "focus:ring-red-500 focus:border-red-500"
      : "focus:ring-indigo-500 focus:border-indigo-500";

    return (
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
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
