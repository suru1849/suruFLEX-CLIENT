import { useContext } from "react";
import { DataContext } from "../../Provider/DataProvider/DataProvider";

const useDataData = () => {
  const all = useContext(DataContext);

  return all;
};

export default useDataData;
