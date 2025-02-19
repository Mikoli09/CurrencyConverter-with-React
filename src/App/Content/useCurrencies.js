import axios from "axios";
import { useEffect, useState } from "react";
import { APIsource } from "../APIsource";

export const useCurrencies = () => {
    const [responseData, setResponseData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(APIsource);
                // const response = await axios.get("/templateDataFromAPI.json");
                if (!response.data) {
                    throw new Error();
                }
                setResponseData(response.data);
            }
            catch (error) {
                console.error(error);
                setError(error);
            }
        }
        setTimeout(() => {
            fetchData();
        }, 2000);
    }, []);

    return { responseData, error }
};