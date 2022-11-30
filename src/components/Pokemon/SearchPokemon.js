
import { TextField, Button, Typography } from "@mui/material";
import Pokeball from "../../images/Pokeball.png"
import pokeBG from "../../images/pokeBG.png"
import { Link } from "react-router-dom";
import { useState } from "react";
const SearchPokemon = () =>{
    const [poke, setPoke] = useState(); //Holds entered name, to be sent to showPokemon so I know where to pull from api
    function updatePoke(e){
        setPoke(e.target.value.toLowerCase());
        //console.log(poke);
    }
    return(
        <>
            <div align = "center" style = {{marginTop: "4vh"}}>
                <Typography variant = "h2" sx={{fontFamily: ['London Stokes']}} >Pokemon Search</Typography>
                <img src = {Pokeball} width = "300vh" height = "300vh" mix-blend-mode = "multiply" paddingBottom = "10vh" align = "center" style = {{marginTop: "4vh"}}></img>
            </div>
            
            <div align = "center" style = {{marginTop: "4vh"}}>
                    <TextField id="pokeName" label="Pokemon Name" variant="outlined" onChange = {updatePoke} />
            </div>
            <div align = "center" style = {{marginTop: "4vh"}}>
                <Button component = {Link} to = "/showPokemon" state={{ pokeName: poke, temp: "testing"}}  variant="outlined" paddingTop = "12vh" >Search</Button>
            </div>
            <div align = "center" style = {{marginTop: "4vh"}}>
                <Typography marginTop = "6vh" variant = "h7" sx={{ fontWeight: 'bold' }}>NOTE: Pokemon such as Aegislash and Deoxys that have multiple forms must have their form included(ex: Aegislash-blade, Deoxys-attack, etc). Pokemon can also be searched via their pokemon number(ex: Bulbasaur is 1, Ivysaur is 2, etc) </Typography>
            </div>
            <div align = "right" style = {{marginTop: "4vh", marginRight: "4vw"}}>
                <img src = {pokeBG} width = "300vw" mix-blend-mode = "multiply" paddingBottom = "10vh" align = "center"></img>
            </div>
        </>
    )
}

export default SearchPokemon;