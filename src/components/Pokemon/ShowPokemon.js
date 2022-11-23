import { useEffect, useState } from "react";

const ShowPokemon = () =>{
    const [pokemon, setPokemon] = useState([]);

    useEffect(()=>{
        const dataFetch = async () => {
            const data = await (
                await fetch(
                "https://pokeapi.co/api/v2/pokemon/ditto"
                )
            ).json();

            setPokemon(data);
            };

        dataFetch();
     },[]);

    return(
        <>
            <ul>
                <p>{pokemon.height}</p>
            </ul>
        </>
    )
}

export default ShowPokemon;