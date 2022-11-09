import React from "react";
import { Link } from 'react-router-dom'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from "@mui/material"; 
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import pathing from "../images/pathing.gif"
import sudoku from "../images/sudoku.gif"
import Menubar from './Menubar';
import { useState } from "react";
import { blue, green, grey } from '@mui/material/colors';




const cardData = [
    {title: "2D pathing visualizer", description: "Visualizes different 2d pathing algorithms", src: pathing, link: "pathing", link2: ""},
    {title: "Sudoku Solver", description: "Visualizes sudoku solving algorithm", src: sudoku, link: "sudoku", link2: ""}
]


const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    },
});

const lightTheme = createTheme({
    palette: {
      mode: 'light'
    },
});


const Home = () => {
    
    const [currentTheme, setTheme] = useState(lightTheme);
    const setThemeCallback = (childTheme) =>{
        if(childTheme === "light"){
            setTheme(lightTheme);
            //console.log(1);
        }
        else{
            setTheme(darkTheme);
            //console.log(2);
        }
    }
    return (
        <ThemeProvider theme = {currentTheme}>
            <CssBaseline />
            <Menubar parentCallback = {setThemeCallback} />
                <br />
                    <Container maxWidth = "sm">
                        <Typography variant = "h2" align = "center" gutterBottom>
                            Welcome
                        </Typography>
                        <Typography variant = "h5" align = "center" paragraph>
                            ds fsdfdsf djsdn jwnd wa dw saiodia sofhoiasfh ioafhoiawh fowhow ihfioahf oiwhfiow hfhwaoifhw  wjopw ajdpoawfjwop afjwj fow
                        </Typography>
                    </Container>
                    
                <br /><br /><br /><br /><br />
                
                <Grid
                container
                spacing={10}
                direction="row"
                alignItems="center"
                justifyContent="center"
                
            >
                {cardData.map(elem => (
                    <Grid item xs={12} sm={6} md={3} key={cardData.indexOf(elem)}>
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
                </ThemeProvider>

    );
}

export default Home;