import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from "@mui/material"; 
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";

import pathing from "../images/pathing.gif"
import sudoku from "../images/sudoku.gif"
import { grey } from "@mui/material/colors";
import { Paper } from "@mui/material";
import pokeball from "../images/Pokeball.png"
import pokedex from "../images/pokedex.png"
import chess from "../images/Chess.png"
import cuberunner from "../images/CubeRunner.png"
import td from '../images/TD.png'
import cursedWoods from '../images/cursed_woods.png'
import tictactoe from '../images/TicTacToe.png'

import {Link as MuiLink} from '@mui/material/';



//Card data for different projects
const cardData = [
    {title: "2D pathing visualizer", description: "Visualizes different 2d pathing algorithms", src: pathing, link: "pathing", link2: "pathingSummary"},
    {title: "Sudoku Solver", description: "Visualizes sudoku solving algorithm", src: sudoku, link: "sudoku", link2: "sudokuSummary"},
    {title: "Poke Search", description: "Find information on a specific pokemon", src: pokeball, link: "searchPokemon", link2: "pokemonSummary"},
    {title: "Pokedex", description: "Browse all Pokemon", src: pokedex, link: "genSelect", link2: "pokemonSummary"},
]

//projects hosted elsewhere
const cardData2 = [
    {title: "Chess Rooms", description: "Site where users can join friends or strangers in a quick game of chess", src: chess, link: "https://chess-rooms.onrender.com/", link2: ""},
    {title: "Cube Runner", description: "Remake of old flash game Cube Runner made with Three js", src: cuberunner, link: "https://cuberunner.onrender.com/", link2: ""},
    {title: "Zombie_TD", description: "Zombie tower defense game made with Three js", src: td, link: "https://zombie-td.onrender.com/", link2: ""},
    {title: "Cursed Woods", description: "3D Horror game made with Three js", src: cursedWoods, link: "https://cursed-woods.onrender.com/", link2: ""},
    {title: "TicTacToe_AI", description: "TicTacToe AI using minimax algorithm", src: tictactoe, link: "https://tictactoe-ai.onrender.com/", link2: ""}
]

const Home = ({paperTheme}) => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <>
                
                <Container maxWidth = "md">
                    <Typography variant = "h2" align = "center" gutterBottom paddingTop = "3vh" sx={{fontFamily: ['Roboto']}}>
                        Welcome
                    </Typography>
                    <Typography variant = "h5" align = "center" paragraph paddingBottom = "3vh">
                        My name is Cameron Mah, I am a computer programmer based in Canada. I enjoy programming and problem solving.
                    </Typography>
                </Container>
                    
                
                <Container maxWidth = "md"  paddingTop = "2vh">
                <Paper elevation={16} variant="outlined" marginBottom = "50vh" style={{ backgroundColor: paperTheme}}>
                <Typography variant = "h3" align = "center" gutterBottom paddingTop = "5vh" sx={{fontFamily: ['Roboto']}}>
                            Projects:
                </Typography>
                <Grid
                container
                spacing={10}
                direction="row"
                alignItems="center"
                justifyContent="center"
                paddingTop = "2vh"
                paddingBottom = "9vh"
            >
                
                {cardData.map(elem => (
                    <Grid item  key={cardData.indexOf(elem)}>
                        <Card
                        sx={{width: 300}}
                            >
                            <CardMedia
                                component="img"
                                height="140"
                                image= {elem.src}
                                alt="temp"
                                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                                
                                />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {elem.title}
                                </Typography>
                                <Typography variant="body2">
                                    {elem.description}
                                </Typography> 
                            </CardContent>
                            <CardActions style={{justifyContent: 'space-between'}}>
                                <Button component = {Link} color = "primary" to = {elem.link} size="small">Try it out!</Button>
                                <Button component = {Link} color = "primary" to = {elem.link2} size="small">Summary</Button>    
                            </CardActions>
                        </Card>
                     </Grid>
                ))}
            </Grid> 
            <Grid
                container
                spacing={10}
                direction="row"
                alignItems="center"
                justifyContent="center"
                paddingTop = "2vh"
                paddingBottom = "9vh"
            >
                
                {cardData2.map(elem => (
                    <Grid item  key={cardData2.indexOf(elem)}>
                        <Card
                        sx={{width: 300}}
                            >
                            <CardMedia
                                component="img"
                                height="140"
                                image= {elem.src}
                                alt="temp"
                                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                                
                                />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {elem.title}
                                </Typography>
                                <Typography variant="body2">
                                    {elem.description}
                                </Typography> 
                            </CardContent>
                            <CardActions style={{justifyContent: 'space-between'}}>
                                <MuiLink style={{textDecoration: 'none'}} href = {elem.link} rel="noopener noreferrer" target="_blank" > <Button color = "primary" size="small">Try it out!</Button></MuiLink>
                                <Button component = {Link} color = "primary" to = {elem.link2} size="small">Summary</Button>    
                            </CardActions>
                        </Card>
                     </Grid>
                ))}
            </Grid>   
            </Paper>
            </Container>
            <br/>
</>
    );
}

export default Home;