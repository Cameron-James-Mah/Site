
import { TextField, Button, Typography, Autocomplete, CircularProgress } from "@mui/material";
import Pokeball from "../../images/Pokeball.png"
import pokeBG from "../../images/pokeBG.png"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

let pokemons = [];

const SearchPokemon = () =>{
    const [poke, setPoke] = useState(); //Holds entered name, to be sent to showPokemon so I know where to pull from api
    const [isLoaded, setLoaded] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        pokemons = [];
        const dataFetch = async () => {
            const data = await ( //fetching data for pokemon all pokemon
                await fetch(
                `https://pokeapi.co/api/v2/pokemon?limit=1500&offset=0`
                )
            ).json(); 
            for(let i = 0; i < data.results.length; i++){
                pokemons.push(data.results[i].name)
            }
            setLoaded(true);
            //console.log(1);
            //console.log(pokemons)
        }
        dataFetch();
    },[])
    if(isLoaded){
        return(
        <>
            <div align = "center" style = {{marginTop: "4vh"}}>
                <Typography variant = "h2" sx={{fontFamily: ['London Stokes']}} >Pokemon Search</Typography>
                <img src = {Pokeball} width = "300vh" height = "300vh" mix-blend-mode = "multiply" paddingBottom = "10vh" align = "center" style = {{marginTop: "4vh"}}></img>
            </div>
            
            <div align = "center" style = {{marginTop: "4vh"}}>
                <Autocomplete    
                    options = {pokemons}
                    sx={{ width: 300 }}
                    poke={poke}
                    onChange={(e,v) => setPoke(v)}
                    renderOption={(props, option) => <li {...props}>{option}</li>}
                    renderInput={(params) => <TextField {...params} id="pokeName" label="Pokemon Name" variant="outlined" onChange={({ target }) => setPoke(target.value)}/>}
                    ListboxProps={{style:{maxHeight: '150px', }}}
                    />
                    
            </div>
            <div align = "center" style = {{marginTop: "4vh"}}>
                <Button component = {Link} to = "/showPokemon" state={{ pokeName: poke, temp: "testing"}}  variant="outlined" paddingTop = "12vh" >Search</Button>
            </div>
            <div align = "center" style = {{marginTop: "4vh"}}>
                <Typography marginTop = "6vh" variant = "h7" sx={{ fontWeight: 'bold' }}>NOTE: Pokemon can also be searched via their pokemon number(ex: Bulbasaur is 1, Ivysaur is 2, etc) </Typography>
            </div>
            <div align = "right" style = {{marginTop: "4vh", marginRight: "4vw"}}>
                <img src = {pokeBG} width = "300vw" mix-blend-mode = "multiply" paddingBottom = "10vh" align = "center"></img>
            </div>
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

export default SearchPokemon;