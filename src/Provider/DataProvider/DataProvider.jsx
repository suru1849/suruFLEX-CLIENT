import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [Email, setEmail] = useState(null);
  const [data, setData] = useState("light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", data);
  }, [data]);

  const dataInfo = {
    Email,
    setEmail,
    setData,
  };
  return (
    <DataContext.Provider value={dataInfo}>{children}</DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node,
};

export default DataProvider;
