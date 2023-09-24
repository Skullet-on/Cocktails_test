import axios from "axios";

const baseUrl = "https://www.thecocktaildb.com";

export const request = async (
  method,
  endpoint,
  headers,
  data,
  params,
  responseType,
) => {
  const config = {
    method,
    url: `${baseUrl}/api/json/v1/1/search.php${endpoint}`,
    headers,
  };

  if (data) config.data = data;
  if (params) config.params = params;
  if (responseType) config.responseType = responseType;

  return axios(config)
    .then(async (res) => {
      return res;
    })
    .catch(async (res) => {
      return res.response;
    });
};
