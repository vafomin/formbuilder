export interface IForm {
  element: string;
  id: number;
  label: string;
  name?: string;
  placeholder?: string;
  type?: string;
  options?: string[];
  required?: boolean;
}

export interface FormProps extends Array<IForm> {}
