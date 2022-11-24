import { Typography, Paper } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import "./styles.css";
import TypeText from "./TypeText"

let pokeChain = []; //holds names of pokemon evo chain
let pokeChainSrc = []; //holds javascript objects with properties for image src with corresponding pokemon name used for image alt and onclick events

const ShowPokemon = ({paperTheme}) =>{
    const location = useLocation();
    const [isLoaded, setLoaded] = useState(false);
    const {pokeName} = location.state;
    const [pokemon, setPokemon] = useState([]);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    useEffect(()=>{
        pokeChain = [];
        pokeChainSrc = [];
        const dataFetch = async () => {
            const data = await (
                await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokeName}`
                )
            ).json();        
            setPokemon(data);
            let data2 = await (
                await fetch(
                `https://pokeapi.co/api/v2/pokemon-species/${pokeName}`
                )
            ).json();  
            //console.log(data2.evolution_chain.url);
            
            data2 = await (
                await fetch(
                `${data2.evolution_chain.url}`
                )
            ).json(); 
            data2 = data2.chain;
            while((data2.evolves_to).length > 0){
                pokeChain.push(data2.species.name);
                data2 = data2.evolves_to["0"];
                if((data2.evolves_to).length == 0){
                    pokeChain.push(data2.species.name); 
                }
            }
            for(let i = 0; i < pokeChain.length; i++){
                const data = await (
                    await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${pokeChain[i]}`
                    )
                ).json();
                let tempObj = {
                    src: data.sprites.other["official-artwork"].front_default,
                    alt: `${pokeChain[i]}`
                };

                pokeChainSrc.push(tempObj);
            }
            setLoaded(true);
        };
        //console.log(pokeChain);
        dataFetch();
     },[]);
     
    
     if(isLoaded){ //Using this to ensure i get my data from api before render, not sure if this is best way to go about this
        if(pokeChain.length===0){//if no evos then just display current pokemon
                let tempObj = {
                    src: pokemon.sprites.other["official-artwork"].front_default,
                    alt: pokemon.name
                };
                pokeChainSrc.push(tempObj);
        }
        //console.log(pokemon.name);
        pokemon.name = capitalizeFirstLetter(pokemon.name);
        for(let i = 0; i < pokemon.types.length; i++){
            pokemon.types[i].type.name = capitalizeFirstLetter(pokemon.types[i].type.name);
        }
        
        return(
        <>
            <Container>
                <Paper elevation={16} variant="outlined" style={{ backgroundColor: paperTheme, marginTop: "5vh"}}>
                    <Typography variant = "h3" align = "center">{pokemon.name}</Typography>
                    <div align = "center">
                        <img src = {pokemon.sprites.other["official-artwork"].front_default} style = {{width: "15vw"}} ></img>
                    </div>
                    <div style = {{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "0.5em"}}>
                        {pokemon.types.map(elem => (
                            <TypeText Type = {elem.type.name}></TypeText>
                        ))}
                    </div>
                    <Typography variant = "h5" align = "center">Height: {pokemon.height}</Typography>
                    <Typography variant = "h5" align = "center">Weight: {pokemon.weight}</Typography>
                    <Typography marginTop = "5vh" variant = "h4" align = "center">Evolution Chain</Typography>
                    <div style = {{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "0.5em", marginTop: "2vh"}}> 
                        {pokeChainSrc.map(elem => (
                            <Link to = "" state={{ pokeName: `${elem.alt}`, temp: "testing"}}>
                                <img src = {elem.src} style = {{width: "15vw"}} className = "image" alt = {elem.alt} onClick={() => window.location.reload(false)}></img>
                            </Link>
                        ))}
                    </div>
                </Paper>
                <br></br>
            </Container> 
        </>
        )
     }

    
}

export default ShowPokemon;