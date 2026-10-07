import axios from "axios";
import { useEffect, useState } from "react";

function useAxiosAPI(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [url]);
  return { data, loading, error };
}
export default useAxiosAPI;
