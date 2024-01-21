import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://192.168.29.135:3000/api/products");
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Ensure it runs only once on mount

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
