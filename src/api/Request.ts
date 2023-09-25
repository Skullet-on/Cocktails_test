import axios, { AxiosRequestConfig } from "axios";

const baseUrl = "https://www.thecocktaildb.com";

export const request = async (
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    endpoint: string,
    headers: { "Content-type": string; Accept: string },
) => {
    const config: AxiosRequestConfig = {
        method,
        url: `${baseUrl}/api/json/v1/1/search.php${endpoint}`,
        headers,
    };

    return axios(config)
        .then(async (res) => res)
        .catch(async (res) => res.response);
};
