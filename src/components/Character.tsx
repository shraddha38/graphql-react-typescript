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
                border: "2px solid red",
                margin: "20px 50px",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)"

            }}>

                {data && data.character &&
                    <>

                        <img src={data.character.image} style={{ marginTop: "20px" }} />
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

                        <button style={{
                            padding: "10px 20px",
                            backgroundColor: "lightgray",
                            color: "black",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            marginTop: "20px"

                        }}
                            onClick={() => window.history.back()}

                        >
                            Explore All Characters</button>



                    </>
                }

            </div>
        </div >
    );
};
