import { useEffect, useState } from "react";

const useGet = (apiFunction, params = null) => {
  const [data, setData] = useState([]);
  const [args, setArgs] = useState(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiFunction(args);
        const responseData = response.data.data;
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };

    if (args !== null) {
      fetchData();
    }
  }, [apiFunction, args]);

  return { data, setData, setArgs };
};

export default useGet;
