import axios from "axios";
import { useEffect, useState } from "react";
import { APIsource } from "../APIsource";
import { APIResponse } from "../types";
import type { AxiosError } from "axios";

export const useCurrencies = () => {
    const [responseData, setResponseData] = useState<APIResponse | null>();
    const [error, setError] = useState<AxiosError | null>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(APIsource);
                const response = await axios.get("/templateDataFromAPI.json");
                if (!response.data) {
                    throw new Error();
                }
                setResponseData(response.data);
            }
            catch (error: unknown) {
                console.error(error);
                if (axios.isAxiosError(error)) {
                    setError(error);
                }
            }
        }
        setTimeout(() => {
            fetchData();
        }, 2000);
    }, []);

    return { responseData, error }
};