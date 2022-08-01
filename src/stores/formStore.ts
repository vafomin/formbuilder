import { IForm, FormProps } from "../types";
import { makeAutoObservable } from "mobx";

class FormStore {
  form: FormProps = [];

  constructor() {
    makeAutoObservable(this);
  }

  addItem = (item: IForm) => {
    this.form = [...this.form, item];
  };

  setItem = (item: IForm) => {
    const index = this.form.findIndex((i) => i.id === item.id);
    this.form[index] = item;
  };

  deleteItem = (id: string) => {
    this.form = this.form.filter((item) => item.id !== id);
  };

  isUniqueName = (name: string, id: string) => {
    if (this.formIsEmpty) return true;
    const index = this.form.findIndex((item) => item.name === name);

    if (id) {
      const elIndex = this.form.findIndex((item) => item.id === id);
      return index !== -1 && elIndex !== index ? false : true;
    }

    return index !== -1 ? false : true;
  };

  getItemById = (id: string) => {
    return this.form.find((item) => item.id === id);
  };

  get formIsEmpty() {
    return this.form.length === 0;
  }

  get formFields() {
    return this.form.filter((item) => item.element !== "button");
  }

  get formButtons() {
    return this.form.filter((item) => item.element === "button");
  }
}

export default FormStore;
