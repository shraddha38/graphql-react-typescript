import React from 'react';
import { useQuery, gql } from '@apollo/client';
const myQuery = gql`
                    query { 
                        characters{
                            results{
                                name
                                image
                                id
                            }
                        }}

                    `;
export const useGraphQlApolloClient = () => {
    const { loading, error, data, refetch } = useQuery(myQuery, {
        pollInterval: 500,
        fetchPolicy: "cache-first",
        nextFetchPolicy: "network-only"
    });
    React.useEffect(() => {
        refetch();
    }, [refetch]);

    return { loading, error, data };

};

