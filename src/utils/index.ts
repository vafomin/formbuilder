import { saveAs } from "file-saver";
import { v4 as uuidv4 } from "uuid";

export const downloadHTML = (form: string) => {
  const html = `<html><head><script src="https://cdn.tailwindcss.com?plugins=forms"></script></head><body><form action="" id="form" class="flex flex-col gap-4 justify-center p-10 max-w-lg mx-auto">${form}</form></body></html>`;
  const url = window.URL.createObjectURL(
    new Blob([html], { type: "text/html" })
  );
  saveAs(url, "form.html");
};

export const generateUid = () => {
  return uuidv4();
};