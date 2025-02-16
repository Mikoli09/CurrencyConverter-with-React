import axios from "axios";
import { useEffect, useState } from "react";
import { APIsource } from "../APIsource";

export const useCurrencies = () => {
    const [responseData, setResponseData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        console.log('Component useEffect rendered');

        const fetchData = async () => {
            try {
                const response = await axios.get(APIsource);
                // const response = await axios.get("dataFromApi.json");
                if (!response.data) {
                    throw new Error();
                }
                setResponseData(response.data);
                console.log(response.data);
            }
            catch (error) {
                console.error(error);
                setError(error);
            }
        }

        setTimeout(() => {
            console.log('Component rendered');
            fetchData();
        }, 2000);

    }, []);

    return { responseData, error }
};