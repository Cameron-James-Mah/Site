import { Typography, Paper, Grid, CircularProgress } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import "./styles.css";
import TypeText from "./TypeText"
import HelpIcon from '@mui/icons-material/Help';
import Tooltip from '@mui/material/Tooltip';


let pokeChain = []; //holds names of pokemon evo chain
let pokeChainSrc = []; //holds javascript objects with properties for image src with corresponding pokemon name used for image alt and onclick events

const ShowPokemon = ({paperTheme}) =>{
    const location = useLocation();
    const [isLoaded, setLoaded] = useState(false);
    let {pokeName} = location.state;
    const [pokemon, setPokemon] = useState([]);
    const [flavorText, setFlavorText] = useState("");
    const [ability, setAbility] = useState([]);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    


    useEffect(()=>{
        pokeChain = [];
        pokeChainSrc = [];
        const dataFetch = async () => {
            const data = await ( //fetching data for pokemon
                await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokeName}`
                )
            ).json();        
            setPokemon(data);
            const abilityData = await ( //fetching data for ability
                await fetch(data.abilities["0"].ability.url)
            ).json();
            let abilityObj = {
                name : abilityData.name,
                flavorText : abilityData.flavor_text_entries["0"].flavor_text
            }
            
            setAbility(abilityObj);
            let data2 = await (
                await fetch(
                `https://pokeapi.co/api/v2/pokemon-species/${pokeName}`
                )
            ).json();  
            //console.log(data2.evolution_chain.url);
            setFlavorText(data2.flavor_text_entries["0"].flavor_text);
            for(let i = 0; i < data2.flavor_text_entries.length; i++){//Make sure to grab english flavor text
                if(data2.flavor_text_entries[i].language.name == "en"){
                    setFlavorText(data2.flavor_text_entries[i].flavor_text);
                    break;
                }
            }
            data2 = await ( //fetching data for pokemon species (evochains)
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
        //console.log(pokemon);
        if(pokeChain.length===0){//if no evos then just display current pokemon
                let tempObj = {
                    src: pokemon.sprites.other["official-artwork"].front_default,
                    alt: pokemon.name
                };
                pokeChainSrc.push(tempObj);
        }
        //console.log(pokemon.name);
        pokemon.name = capitalizeFirstLetter(pokemon.name);
        ability.name = capitalizeFirstLetter(ability.name);
        for(let i = 0; i < pokemon.types.length; i++){
            pokemon.types[i].type.name = capitalizeFirstLetter(pokemon.types[i].type.name);
        }
        
        return(
        <>
            <Container>
                <Paper elevation={16} variant="outlined" style={{ backgroundColor: paperTheme, marginTop: "5vh"}}>
                    <Typography variant = "h3" align = "center" marginTop="2vh" marginBottom="3vh">{pokemon.name}</Typography>
                        <Grid container columnSpacing = "10vw" direction="row"
                alignItems="center"
                justifyContent="center">
                            <Grid item>
                                <div align = "left">
                                <img src = {pokemon.sprites.other["official-artwork"].front_default} style = {{width: "15rem", marginLeft: "8vw"}} ></img>
                                </div>
                            </Grid>
                            <Grid item direction="column" spacing={10}>
                            <div style = {{width: "20rem"}}> 
                            <Typography variant = "h5" marginTop = "4vh" sx={{fontStyle: 'italic'}}>{flavorText}</Typography>
                            </div>
                        
                        <Grid item>
                            <div style = {{display: "flex", flexDirection: "row", alignItems: "center", gap: "0.5em", marginTop : "5vw"}}>
                                <Typography variant = "h5">Type(s): </Typography>
                                {pokemon.types.map(elem => (
                                    <TypeText Type = {elem.type.name}></TypeText>
                                ))}
                            </div>
                            
                            <Typography variant = "h5" >Height: {pokemon.height}</Typography>
                            <Typography variant = "h5" >Weight: {pokemon.weight}</Typography>
                            <Typography variant = "h5" >Ability: {ability.name} <Tooltip title = {ability.flavorText}><HelpIcon/></Tooltip></Typography>
                            </Grid>
                            </Grid>
                        </Grid>

                    
                    
                    <Typography marginTop = "10vh" variant = "h4" align = "center">Evolution Chain</Typography>
                    <div style = {{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "0.5em", marginTop: "2vh"}}> 
                        {pokeChainSrc.map(elem => (
                            <Link to = "" state={{ pokeName: `${elem.alt}`, temp: "testing"}}>
                                <img src = {elem.src} style = {{width: "10rem"}} className = "image" alt = {elem.alt} onClick={() => window.location.reload(false)}></img>
                            </Link>
                        ))}
                    </div>
                </Paper>
                <br></br>
            </Container> 
        </>
        )
     }
     else{
        return(
            <div style={{display: 'flex', justifyContent: 'center', marginTop: "30vh"}}>
                <CircularProgress size={"5rem"} />
            </div>
            
        )
    }
    
}

export default ShowPokemon;