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
            <h1>{"Characters\n"} </h1>
            {data && data.characters.results.map((character: any) => (

                <div key={character.id} style={{ border: "1px solid-red" }}>
                    <NavLink to={`/${character.id}`}>
                        <img src={character.image} alt={character.name} />
                        <p>{character.name}</p>
                    </NavLink>
                </div>
            ))}
        </div>
    );
};  