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
            <h2> Quick Insights About your Desired Character</h2>
            <div style={{
                border: "1px solid red",
                margin: "20px 50px",

            }}>

                {data && data.character &&
                    <>

                        <img src={data.character.image} style={{marginTop:"20px"}}/>
                        <p>
                            <b>Name:</b> {data.character.name}
                        </p>
                        <p>
                            <b>Episodes:</b> {data.character.episode.map((episode: any) => (
                                <p key={episode.id}>{episode.name}- <b>
                                    {episode.episode}
                                </b></p>
                            ))}
                        </p>


                    </>
                }

            </div>
        </div>
    );
};
