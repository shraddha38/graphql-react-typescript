import axios from 'axios';
import React, { useCallback } from 'react';

interface UseFetchInputProps {
    url: string;
    query?: string;
};
interface UseFetchResponse {
    data: any;
    loading: boolean;
    error: any;
    refetch: () => void;
}

export function useAxios({ url, query }: UseFetchInputProps): UseFetchResponse {
    const [data, setData] = React.useState<any>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    async function getData() {
        try {
            const response = await axios.post(url, {
                query: query
            });
            const data = await response;
            setData(data.data.data);    
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
