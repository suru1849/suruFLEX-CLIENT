import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [Email, setEmail] = useState(null);

  const darkTheme = (data) => {
    document.getElementById("body").setAttribute("data-theme", data);
  };

  const dataInfo = {
    Email,
    setEmail,
    darkTheme,
  };
  return (
    <DataContext.Provider value={dataInfo}>{children}</DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node,
};

export default DataProvider;
