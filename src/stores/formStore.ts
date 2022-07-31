import { IForm , FormProps} from '../types';
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
    this.form[item.id - 1] = item;
  }

  deleteItem = (id: number) => {
    this.form = this.form.filter((item) => item.id !== id);
  };

  get formLength() {
    return this.form.length;
  }
}

export default FormStore;
