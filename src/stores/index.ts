import { createContext } from "react";
import FormStore from "./formStore";

export const rootStoreContext = createContext({
    formStore: new  FormStore(),
});