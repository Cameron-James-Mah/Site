import { Container, Paper, Typography, Card, CardActionArea, CardMedia, CardContent, Grid, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import pokedex from "../../images/pokedex.png"

let pokeCardInfo = []; //Pokemon card info contains name, image src, type(s) 

const Pokedex = ({paperTheme}) =>{
    const location = useLocation();
    const {Gen} = location.state;
    const [isLoaded, setLoaded] = useState(false);
    const [pokeData, setPokeData] = useState([]);
    useEffect(()=>{
        //console.log(Gen);
        const dataFetch = async () => {
            const data = await ( //fetching data for pokemon all pokemon
                await fetch(
                `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
                )
            ).json(); 
            setPokeData(data.results);
            if(Gen == 0){

            }
            for(let i = 0; i < data.results.length; i++){//Get the data I need for each pokemon
                const tempData = await (
                    await fetch(
                        `${data.results[i].url}`
                    )
                ).json();
                let tempObj = {
                    name: tempData.name,
                    src: tempData.sprites.other["official-artwork"].front_default
                }
                pokeCardInfo.push(tempObj);
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
                <Paper elevation={16} variant="outlined" style={{ backgroundColor: paperTheme, marginTop: "5vh"}}>
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
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image= {elem.src}
                                    alt="Pokemon"
                                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {elem.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {elem.name}
                                    </Typography>
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
            <div style={{display: 'flex', justifyContent: 'center', marginTop: "30vh"}}>
                <CircularProgress size={"5rem"} />
            </div>
            
        )
    }
    
}

export default Pokedex;