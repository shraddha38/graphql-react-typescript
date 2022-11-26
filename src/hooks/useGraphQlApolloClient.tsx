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
    const { loading, error, data } = useQuery(myQuery);
    return { loading, error, data };
};

