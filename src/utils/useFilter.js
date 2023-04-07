import { useEffect, useState } from "react";

export const useFilter = (data, filter) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const filterData = () => {
      let res =
        data &&
        data.filter((item) => {
          return item.status.toLowerCase() === filter.toLowerCase();
        });
      setResult(res);
    };

    filterData();
  }, [data]);

  return { result };
};
