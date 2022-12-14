import { observer } from "mobx-react";
import { useStore } from "../hooks/useStore";
import Input from "../components/input";
import Checkbox from "../components/checkbox";
import List from "../components/list";
import Button from "../components/button";
import { IForm } from "../types";

const Form = ({ formRef }) => {
  const { formStore } = useStore();
  const { formFields, formButtons, formIsEmpty } = formStore;

  return (
    <main className="flex flex-col gap-4 p-10 w-96 sm:mr-4/12">
      <h1 className="text-4xl">Form</h1>
      <div className="flex">
        {formIsEmpty ? (
          <h1>Looks like you haven't created a form yet...</h1>
        ) : (
          <div id="form" className="flex flex-col gap-4 w-96" ref={formRef}>
            {formFields.map((item: IForm, index: number) => {
              switch (item.element) {
                case "input":
                  return (
                    <Input
                      key={`form_element_${index}`}
                      name={item.name}
                      label={item.label}
                      placeholder={item.placeholder}
                      type={item.type}
                      required={item.required}
                    />
                  );
                case "checkbox":
                  return (
                    <Checkbox
                      key={`form_element_${index}`}
                      name={item.name}
                      label={item.label}
                      required={item.required}
                    />
                  );

                case "list":
                  return (
                    <List
                      key={`form_element_${index}`}
                      name={item.name}
                      label={item.label}
                      options={item.options}
                      required={item.required}
                    />
                  );
              }
            })}

            {formButtons.map((item: IForm, index: number) => (
              <Button key={`form_element_${index}`} label={item.label} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default observer(Form);
