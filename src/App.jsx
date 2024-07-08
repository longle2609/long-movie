import { message } from "antd";
import useRoutesElements from "./routes/useRoutesElements";
import { createContext } from "react";

export const AlertMessage = createContext();

function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const elements = useRoutesElements();

  const handleAlert = (type, content) => {
    messageApi.open({
      type,
      content,
    });
  };

  return (
    <AlertMessage.Provider
      value={{
        handleAlert,
      }}
    >
      {contextHolder}
      {elements}
    </AlertMessage.Provider>
  );
}

export default App;
