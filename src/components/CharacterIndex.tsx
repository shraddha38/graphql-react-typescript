import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useGraphQlApolloClient } from '../hooks/useGraphQlApolloClient';
import "./Character.css";
import { NavLink } from 'react-router-dom';


export const CharacterIndex = () => {
    const { loading, error, data } = useGraphQlApolloClient();
    console.log(data, loading, error);
    return (
        <div className='CharacterList'>
            {loading && <p>Loading...</p>}
            {error && <p>Error :</p>}
            {data && data.characters.results.map((character: any) => (
                <div key={character.id}>
                    <NavLink to={`/${character.id}`}>
                        <p>{character.name}</p>
                        <img src={character.image} alt={character.name} /></NavLink>
                </div>
            ))}
        </div>
    );
};  