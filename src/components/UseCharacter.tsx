import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useGraphQlApolloClient } from '../hooks/useGraphQlApolloClient';



export const UseCharacter = () => {
    const { loading, error, data } = useGraphQlApolloClient();
    console.log(data, loading, error);
    return (
        <div>

            {data.language.name}
        </div>
    );
};  