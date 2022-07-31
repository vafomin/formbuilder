export const downloadHTML = (form: string) => {
    const html = `<html><head><script src="https://cdn.tailwindcss.com?plugins=forms"></script></head><body><div id="form" class="flex flex-col gap-4 justify-center p-10 max-w-lg mx-auto">${form}</div></body></html>`;
    const url = window.URL.createObjectURL(
      new Blob([html], { type: "text/html" })
    );
    window.open(url);
}