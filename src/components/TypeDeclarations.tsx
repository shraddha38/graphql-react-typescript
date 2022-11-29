import React, { useState } from 'react';
type CharacterData = {
    characterData: string
}

interface rectangle {
    length: number,
    breath: number,
    characterstics: CharacterData,
    areaRectangle():any
}

export function CalculateRectangle({ length, breath, characterstics }: rectangle): JSX.Element {
    let areaRectangle = 1

    //truthiness checking if (length) {     

     // narrowing    if (typeof length==="number") {     

    if (typeof length==="number") {     
        areaRectangle = length * breath;
    }

    console.log(areaRectangle)
    return (
        <>
            <h1>{areaRectangle}</h1>
            <h2> {characterstics.characterData}</h2>
        </>

    );

}
