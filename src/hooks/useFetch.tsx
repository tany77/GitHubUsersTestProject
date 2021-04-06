import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const UseFetch = (url: string) => {
  const baseUrl = "https://api.github.com";
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch: any = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const requestOptions = {
      ...options,
    };
    axios(baseUrl + url, requestOptions)
      .then((res) => {
        setResponse(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.response);
        setIsLoading(false);
      });
  }, [isLoading, url, options]);

  return [{ isLoading, response, error }, doFetch];
};

export default UseFetch;
