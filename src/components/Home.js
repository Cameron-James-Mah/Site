import React from "react";
import { Link } from 'react-router-dom'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from "@mui/material"; 
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import pathing from "../images/pathing.gif"
import sudoku from "../images/sudoku.gif"
import Menubar from './Menubar';
/*
const HomeDiv = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  
}));*/
const HomeDiv = styled('div')({
  //backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
});

const cardData = [
    {title: "2D pathing visualizer", description: "Visualizes different 2d pathing algorithms", src: pathing, link: "/pathing"},
    {title: "Sudoku Solver", description: "Visualizes sudoku solving algorithm", src: sudoku, link: "/sudoku"}
]

const Home = () => {
    
    return (
        <>
                <Menubar />
                <br />
                <HomeDiv>
                    <Container maxWidth = "sm">
                        <Typography variant = "h2" align = "center" color = "textPrimary" gutterBottom>
                            Welcome
                        </Typography>
                        <Typography variant = "h5" align = "center" color = "textSecondary" paragraph>
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
                                <Typography variant="body2" color="text.secondary">
                                    {elem.description}
                                </Typography> 
                            </CardContent>
                            <CardActions style={{justifyContent: 'space-between'}}>
                                <Button component = {Link} to = {elem.link} size="small">Try it out!</Button>
                                <Button component = {Link} size="small">Summary</Button>    
                            </CardActions>
                        </Card>
                     </Grid>
                ))}
            </Grid>    
                </HomeDiv>
                <div>

                </div>


                
        </>
    );
}

export default Home;