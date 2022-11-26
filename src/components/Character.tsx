import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacter } from '../hooks/character';

export const Character = () => {
    const { id } = useParams();
    const { loading, error, data } = useCharacter(parseInt(id ?? ''));
    console.log(data);
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error :</p>}
            {data && data.character && <img src={data.character.image} width={750} height={750} />}
        </div>
    );
};
