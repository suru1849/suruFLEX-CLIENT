import { createContext, useState } from "react";
import PropTypes from "prop-types";

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

DataProvider.propTypes = {
  children: PropTypes.node,
};

export default DataProvider;
