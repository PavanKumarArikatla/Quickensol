import { useEffect, useState } from "react";

export default function useFetch(fetchFunction) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    async function fetchData() {
        try {
            const result = await fetchFunction();
            setData(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    fetchData();
    }, [fetchFunction]);

    return { data, loading, error };
}