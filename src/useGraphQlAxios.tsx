import axios from 'axios';
import React, { useCallback } from 'react';


interface UseFetchInputProps {
    url: string;
    query?: string;
};
interface UseFetchResponse<T> {
    data: T | null;
    loading: boolean;
    error: any;
    refetch: () => void;
}

export function useAxios<T>({ url, query }: UseFetchInputProps): UseFetchResponse<T> {
    const [data, setData] = React.useState<T | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    console.log(query, "query in Axios hook")
    async function getData() {
        try {
            const response = await axios.post(url, {
                query: query
            });
            const data = await response;
            setData(data.data);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    React.useEffect(() => {
        getData();
    }, [url, query]);

    const refetch = useCallback(() => {
        getData();
    }, [url, query]);

    return { data, loading, error, refetch };
};
