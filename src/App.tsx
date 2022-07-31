import { useRef } from "react";
import { observer } from "mobx-react";
import Editor from "./Editor";
import Form from "./Form";

import { downloadHTML } from "./utils";
const App = () => {
  const formRef = useRef(null);

  return (
    <div className="flex-col sm:flex">
      <Editor onDownload={() => downloadHTML(formRef.current.innerHTML)} />
      <Form formRef={formRef} />
    </div>
  );
};

export default observer(App);
