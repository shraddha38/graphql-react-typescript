import React from 'react';
import { useQuery, gql } from '@apollo/client';
const myQuery = gql`
                    query{
                        language(code:"hi"){
                            code
                                name
                            native
                        }
                    }
                    `

export const useGraphQlApolloClient = () => {
    const { loading, error, data } = useQuery(myQuery);
    return { loading, error, data };
};

