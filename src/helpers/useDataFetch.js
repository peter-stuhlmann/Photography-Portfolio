import { useState, useEffect } from 'react';

const useDataFetch = url => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async url => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    };
    loadData(url);
  }, [url]);

  return data;
};

export default useDataFetch;
