import { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://fakestoreapi.com";

const useAxios = (path, method, body) => {
    const [response, setResponse] = useState([]);
    const [loading, setLoding] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        axios(`${URL}${path}`, {
            method,
            ...(body ? { body } : {}),
            headers: {
                Accept: "application/json",
                "Contetn-Type": "application/json"
            }
        })
            .then((response) => {
                if (!signal.aborted) {
                    console.log(response.data);
                    setResponse(response.data);
                    setLoding(false);
                }
            })
            .catch((error) => console.warn("Something went wrong", error));
        return () => abortController.abort();
    }, [path, method, body]);
    return { response, loading };
};

export default useAxios;
