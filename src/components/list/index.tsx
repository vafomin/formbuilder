import React from "react";

type ListProps = {
  name: string;
  label: string;
  options: string[];
};

const List: React.FC<ListProps> = React.forwardRef(
  (
    { name, label, options, ...rest },
    ref: React.RefObject<HTMLSelectElement>
  ) => {
    return (
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <select
          name={name}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          ref={ref}
          {...rest}
        >
          {options &&
            options.map((o, i) => <option key={`option-${i}`}>{o}</option>)}
        </select>
      </div>
    );
  }
);

export default List;
