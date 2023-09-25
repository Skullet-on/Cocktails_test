import { request } from "./Request";

export const CocktailApi = {
    async get(urlParams: URLSearchParams) {
        return request("GET", `/search.php?${urlParams}`, {
            Accept: "application/json",
            "Content-type": "application/json",
        });
    },
};
