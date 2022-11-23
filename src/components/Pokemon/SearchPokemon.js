
import { TextField, Button, Typography } from "@mui/material";
import Pokeball from "../../images/Pokeball.png"
import pokeBG from "../../images/pokeBG.png"
import { Link } from "react-router-dom";

const SearchPokemon = () =>{
    return(
        <>
            <div align = "center" style = {{marginTop: "4vh"}}>
                <Typography variant = "h2" >Pokedex</Typography>
                <img src = {Pokeball} width = "300vh" height = "300vh" mix-blend-mode = "multiply" paddingBottom = "10vh" align = "center"></img>
            </div>
            
            <div align = "center" style = {{marginTop: "4vh"}}>
                    <TextField id="pokeName" label="Pokemon Name" variant="outlined"   />
            </div>
            <div align = "center" style = {{marginTop: "4vh"}}>
                <Button component = {Link} to = "showPokemon" variant="outlined" paddingTop = "12vh" >Search</Button>
            </div>
            <div align = "right" style = {{marginTop: "4vh", marginRight: "4vw"}}>
                <img src = {pokeBG} width = "300vw" mix-blend-mode = "multiply" paddingBottom = "10vh" align = "center"></img>
            </div>
        </>
    )
}

export default SearchPokemon;