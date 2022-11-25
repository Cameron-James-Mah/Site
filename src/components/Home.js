import React from "react";
import { Link } from 'react-router-dom'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from "@mui/material"; 
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import pathing from "../images/pathing.gif"
import sudoku from "../images/sudoku.gif"
import { grey } from "@mui/material/colors";
import { Paper } from "@mui/material";
import pokeball from "../images/Pokeball.png"
import pokedex from "../images/pokedex.png"



const cardData = [
    {title: "2D pathing visualizer", description: "Visualizes different 2d pathing algorithms", src: pathing, link: "pathing", link2: "pathingSummary"},
    {title: "Sudoku Solver", description: "Visualizes sudoku solving algorithm", src: sudoku, link: "sudoku", link2: "sudokuSummary"},
    {title: "Poke Search", description: "Find information on a pokemon", src: pokeball, link: "searchPokemon", link2: ""},
    {title: "Pokedex", description: "Browse all Pokemon", src: pokedex, link: "", link2: ""}
]

const Home = ({paperTheme}) => {
    
    return (
        <>
                
                <Container maxWidth = "md">
                    <Typography variant = "h2" align = "center" gutterBottom paddingTop = "3vh">
                        Welcome
                    </Typography>
                    <Typography variant = "h5" align = "center" paragraph paddingBottom = "3vh">
                        My name is Cameron Mah, I am a computer programmer based in Canada. I enjoy programming and problem solving.
                    </Typography>
                </Container>
                    
                
                <Container maxWidth = "md"  paddingTop = "2vh">
                <Paper elevation={16} variant="outlined" marginBottom = "50vh" style={{ backgroundColor: paperTheme}}>
                <Typography variant = "h3" align = "center" gutterBottom paddingTop = "5vh">
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
                        <Card>
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
            </Paper>
            </Container>
            <br/>
</>
    );
}

export default Home;