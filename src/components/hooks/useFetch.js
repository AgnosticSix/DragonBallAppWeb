import { useEffect, useState } from "react";
import { getData } from "../../utils/localStorageUtils";

export const useFetch = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    await new Promise((resolve) => setTimeout(resolve, 1500));
    const response = getData();

    setState({
      data: response,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    getFetch();
  }, []);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};