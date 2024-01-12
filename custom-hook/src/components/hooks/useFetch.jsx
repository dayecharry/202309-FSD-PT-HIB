import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(url).then(
      (resp) => {
        setData(resp.data);
      },
      (error) => {
        setError(error);
      }
    );
  }, [url]);
  return { data, error };
};
export default useFetch;
