import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [Email, setEmail] = useState(null);

  const dataInfo = {
    Email,
    setEmail,
  };
  return (
    <DataContext.Provider value={dataInfo}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
