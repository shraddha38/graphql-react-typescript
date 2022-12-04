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

export function useFetch({ url, query }: UseFetchInputProps): UseFetchResponse {
    const [data, setData] = React.useState<any>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    async function getData() {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    query: query
                })

            });
            const data = await response.json();
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
