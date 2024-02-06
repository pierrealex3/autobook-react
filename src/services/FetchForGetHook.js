import { useState, useEffect } from "react";

const API_BASE_URI = "http://localhost:7778/autobook/";

export default function useFetch(resourcePath) {

    const [dataArr, setDataArr] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        async function fetchWrapper() {

            try {

                const response = await fetch(API_BASE_URI + resourcePath, {
                    method: "GET",
                    headers: {
                        "X-MockUser": localStorage.getItem("user"),
                    },
                });

                if (response.ok) {
                    const json = await response.json();
                    setDataArr(json);
                } else {
                    throw response;
                }
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }

        }

        fetchWrapper();

    }, []);

    return { dataArr, error, loading };



};