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
            <div>
                {
                    data && <h1>{" Rick And Morty Characters\n"} </h1>
                }
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap"
            }}>
                {data && data.characters.results.map((character: any) => (
                    <div key={character.id} style={{ border: "1px solid-red" }}>
                        <NavLink to={`/${character.id}`}>
                            <img src={character.image} alt={character.name} width={250} height={250} />
                            <p>{character.name}</p>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
};  