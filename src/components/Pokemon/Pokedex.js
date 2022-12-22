import { Container, Paper, Typography, Card, CardActionArea, CardMedia, CardContent, Grid, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import pokedex from "../../images/pokedex.png"
import TypeText2 from "./TypeText2"

let pokeCardInfo = []; //Pokemon card info contains name, image src, type(s) 

const Pokedex = ({paperTheme}) =>{
    let currentStep, maxSteps; //For my loading screen, progress info
    const [progressText, setProgress] = useState(0);
    const location = useLocation();
    const {Gen} = location.state;
    const [isLoaded, setLoaded] = useState(false);
    //const [pokeData, setPokeData] = useState([]);
    useEffect(()=>{
        currentStep = 0;
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        const dataInRange = async (len, offset) => {//Pull data for pokemon in range, using for each generation
            const data = await ( 
                await fetch(
                `https://pokeapi.co/api/v2/pokemon?limit=${len}&offset=${offset}`
                )
            ).json(); 
            return data;
        }

        function updateProgress(){
            setProgress(`Loading pokemon: ${currentStep}/${maxSteps}`);
        }
        
        pokeCardInfo = [];
        //console.log(Gen);
        const dataFetch = async () => {
            /*
            const data = await ( //fetching data for pokemon all pokemon
                await fetch(
                `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
                )
            ).json(); 
            //setPokeData(data.results);
            */
           let data = [];
            if(Gen == 1){
                maxSteps = 151;
                let offset = 0;
                data = await(dataInRange(151, offset))
                for(let i = 0; i < data.results.length; i++){//Get the data I need for each pokemon
                    const tempData = await (
                        await fetch(
                            `${data.results[i].url}`
                        )
                    ).json();
                    let tempArr = [];
                    for(let i = 0; i < tempData.types.length; i++){
                        tempArr.push(capitalizeFirstLetter(tempData.types[i].type.name));
                    }
                    let tempObj = {
                        name: tempData.name,
                        displayName: capitalizeFirstLetter(tempData.name),
                        src: tempData.sprites.other["official-artwork"].front_default,
                        types: tempArr,
                    }
                    pokeCardInfo.push(tempObj);
                    currentStep++;
                    updateProgress();
                }

            }
            else if(Gen == 2){
                maxSteps = 100;
                let offset = 151;
                data = await(dataInRange(100, offset))
                for(let i = 0; i < data.results.length; i++){//Get the data I need for each pokemon
                    const tempData = await (
                        await fetch(
                            `${data.results[i].url}`
                        )
                    ).json();
                    let tempArr = [];
                    for(let i = 0; i < tempData.types.length; i++){
                        tempArr.push(capitalizeFirstLetter(tempData.types[i].type.name));
                    }
                    let tempObj = {
                        name: tempData.name,
                        displayName: capitalizeFirstLetter(tempData.name),
                        src: tempData.sprites.other["official-artwork"].front_default,
                        types: tempArr,
                    }
                    pokeCardInfo.push(tempObj);
                    currentStep++;
                    updateProgress();
                }

                
            }
            else if(Gen == 3){
                let offset = 251;
                maxSteps = 135;
                data = await(dataInRange(135, offset))
                for(let i = 0; i < data.results.length; i++){//Get the data I need for each pokemon
                    const tempData = await (
                        await fetch(
                            `${data.results[i].url}`
                        )
                    ).json();
                    let tempArr = [];
                    for(let i = 0; i < tempData.types.length; i++){
                        tempArr.push(capitalizeFirstLetter(tempData.types[i].type.name));
                    }
                    let tempObj = {
                        name: tempData.name,
                        displayName: capitalizeFirstLetter(tempData.name),
                        src: tempData.sprites.other["official-artwork"].front_default,
                        types: tempArr,
                    }
                    pokeCardInfo.push(tempObj);
                    currentStep++;
                    updateProgress();
                }
                
                
            }
            else if(Gen == 4){
                let offset = 386;
                maxSteps = 107;
                data = await(dataInRange(107, offset))
                for(let i = 0; i < data.results.length; i++){//Get the data I need for each pokemon
                    const tempData = await (
                        await fetch(
                            `${data.results[i].url}`
                        )
                    ).json();
                    let tempArr = [];
                    for(let i = 0; i < tempData.types.length; i++){
                        tempArr.push(capitalizeFirstLetter(tempData.types[i].type.name));
                    }
                    let tempObj = {
                        name: tempData.name,
                        displayName: capitalizeFirstLetter(tempData.name),
                        src: tempData.sprites.other["official-artwork"].front_default,
                        types: tempArr,
                    }
                    pokeCardInfo.push(tempObj);
                    currentStep++;
                    updateProgress();
                }
                
                
            }
            else if(Gen == 5){
                let offset = 493;
                maxSteps = 156;
                data = await(dataInRange(156, offset))
                for(let i = 0; i < data.results.length; i++){//Get the data I need for each pokemon
                    const tempData = await (
                        await fetch(
                            `${data.results[i].url}`
                        )
                    ).json();
                    let tempArr = [];
                    for(let i = 0; i < tempData.types.length; i++){
                        tempArr.push(capitalizeFirstLetter(tempData.types[i].type.name));
                    }
                    let tempObj = {
                        name: tempData.name,
                        displayName: capitalizeFirstLetter(tempData.name),
                        src: tempData.sprites.other["official-artwork"].front_default,
                        types: tempArr,
                    }
                    pokeCardInfo.push(tempObj);
                    currentStep++;
                    updateProgress();
                }
                
                
            }
            else if(Gen == 6){
                let offset = 649;
                maxSteps = 72;
                data = await(dataInRange(72, offset))
                for(let i = 0; i < data.results.length; i++){//Get the data I need for each pokemon
                    const tempData = await (
                        await fetch(
                            `${data.results[i].url}`
                        )
                    ).json();
                    let tempArr = [];
                    for(let i = 0; i < tempData.types.length; i++){
                        tempArr.push(capitalizeFirstLetter(tempData.types[i].type.name));
                    }
                    let tempObj = {
                        name: tempData.name,
                        displayName: capitalizeFirstLetter(tempData.name),
                        src: tempData.sprites.other["official-artwork"].front_default,
                        types: tempArr,
                    }
                    pokeCardInfo.push(tempObj);
                    currentStep++;
                    updateProgress();
                }
                
                
            }
            else if(Gen == 7){
                let offset = 721;
                maxSteps = 88;
                data = await(dataInRange(88, offset))
                for(let i = 0; i < data.results.length; i++){//Get the data I need for each pokemon
                    const tempData = await (
                        await fetch(
                            `${data.results[i].url}`
                        )
                    ).json();
                    let tempArr = [];
                    for(let i = 0; i < tempData.types.length; i++){
                        tempArr.push(capitalizeFirstLetter(tempData.types[i].type.name));
                    }
                    let tempObj = {
                        name: tempData.name,
                        displayName: capitalizeFirstLetter(tempData.name),
                        src: tempData.sprites.other["official-artwork"].front_default,
                        types: tempArr,
                    }
                    pokeCardInfo.push(tempObj);
                    currentStep++;
                    updateProgress();
                }
                
                
            }
            else if(Gen == 8){
                let offset = 809;
                maxSteps = 96;
                data = await(dataInRange(96, offset))
                for(let i = 0; i < data.results.length; i++){//Get the data I need for each pokemon
                    const tempData = await (
                        await fetch(
                            `${data.results[i].url}`
                        )
                    ).json();
                    let tempArr = [];
                    for(let i = 0; i < tempData.types.length; i++){
                        tempArr.push(capitalizeFirstLetter(tempData.types[i].type.name));
                    }
                    let tempObj = {
                        name: tempData.name,
                        displayName: capitalizeFirstLetter(tempData.name),
                        src: tempData.sprites.other["official-artwork"].front_default,
                        types: tempArr,
                    }
                    pokeCardInfo.push(tempObj);
                    currentStep++;
                    updateProgress();
                }
                
                
                
            }
            else{ //All pokemon
                data = await(dataInRange(905, 0))
                maxSteps = 905;
                for(let i = 0; i < 905; i++){//Get the data I need for each pokemon
                    let tempData = [];
                    try{
                        tempData = await (
                            await fetch(
                                `${data.results[i].url}`
                            )
                        ).json();
                    }
                    catch{
                        console.log(i);
                    }
                    
                    let tempArr = [];
                    for(let i = 0; i < tempData.types.length; i++){
                        tempArr.push(capitalizeFirstLetter(tempData.types[i].type.name));
                    }
                    let tempObj = {
                        name: tempData.name,
                        displayName: capitalizeFirstLetter(tempData.name),
                        src: tempData.sprites.other["official-artwork"].front_default,
                        types: tempArr,
                    }
                    pokeCardInfo.push(tempObj);
                    currentStep++;
                    updateProgress();
                }
                //console.log("Loaded all");
                
            }
            setLoaded(true);
        }
        dataFetch();
    },[])
    if(isLoaded){
        //console.log(pokeData);
        /*
        for(let i = 0; i < pokeData.length; i++){
            console.log(pokeData[i]);
        }*/

        return(
        <>
            <Container maxWidth = "lg">
                <Paper elevation={16} variant="outlined" style={{ backgroundColor: paperTheme, marginTop: "5vh", marginBottom: "4vh"}}>
                    <Grid container
                spacing={10}
                direction="row"
                alignItems="center"
                justifyContent="center"
                paddingTop = "2vh"
                paddingBottom = "9vh">

                    
                        {pokeCardInfo.map(elem =>(
                            <Grid item  key={pokeCardInfo.indexOf(elem)}>
                             <Card>
                                <CardActionArea component = {Link} to = "/showPokemon" state={{ pokeName: elem.name}}>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image= {elem.src}
                                    alt="Pokemon"
                                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {elem.displayName}
                                    </Typography>
                                    <div style = {{display: "flex", flexDirection: "row", alignItems: "center", gap: "0.5em"}}>
                                        {elem.types.map(elem2 => (
                                        <TypeText2 Type = {elem2}></TypeText2>
                                    ))}
                                    </div>
                                    
                                    </CardContent>
                                </CardActionArea>
                                </Card>
                                </Grid>
                        ))}
                        </Grid>
                </Paper>
            </Container>
        </>
        )
    }
    else{
        return(
            <>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: "30vh"}}>
                <CircularProgress size={"5rem"} />
            </div>
            <Typography variant = "h5" align = "center" marginTop={5}>{progressText}</Typography>
            </>
        )
    }
    
}

export default Pokedex;