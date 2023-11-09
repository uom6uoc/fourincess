import * as React from 'react';
import axios from 'axios';

import { BASE_API_URL } from '~/app/config';

import type {
  AxiosError,
  RawAxiosRequestConfig,
  AxiosResponse,
  AxiosRequestConfig,
} from 'axios';

axios.defaults.baseURL = BASE_API_URL;

const useAxios = (axiosParams: RawAxiosRequestConfig, initFetch = true) => {
  const [response, setResponse] = React.useState<AxiosResponse>();
  const [error, setError] = React.useState<AxiosError>();
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchData = async (params: AxiosRequestConfig) => {
    await axios
      .request(params)
      .then((response) => {
        setResponse(response);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const refetch = () => {
    fetchData(axiosParams);
  };

  React.useEffect(() => {
    if (initFetch) fetchData(axiosParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, error, loading, refetch };
};

export default useAxios;
