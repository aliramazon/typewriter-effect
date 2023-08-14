import { useState, useEffect } from "react";
import { api } from "../api";

export function useFetchFlag() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.getFlag();
        setData(response);
      } catch (error) {
        setIsError(true);
      }

      setLoading(false);
    }

    fetchData();
  }, []);

  return { data, loading, isError };
}
