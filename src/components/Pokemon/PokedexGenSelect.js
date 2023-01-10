import { Paper, Card, Grid, Typography, Container, CardActionArea, CardMedia, CardContent } from "@mui/material";
import { useEffect } from "react";
import { Link } from 'react-router-dom'
import Gen1 from "../../images/Gen1.png"
import Gen2 from "../../images/Gen2.png"
import Gen3 from "../../images/Gen3.png"
import Gen4 from "../../images/Gen4.png"
import Gen5 from "../../images/Gen5.png"
import Gen6 from "../../images/Gen6.png"
import Gen7 from "../../images/Gen7.png"
import Gen8 from "../../images/Gen8.png"
import Gen9 from "../../images/Gen9.png"
import GenAll from "../../images/GenAll.png"

//Card data for all pokemon generations
const cardData = [
    {title: "Generation 1", src: Gen1, gen: 1},
    {title: "Generation 2", src: Gen2, gen: 2},
    {title: "Generation 3", src: Gen3, gen: 3},
    {title: "Generation 4", src: Gen4, gen: 4},
    {title: "Generation 5", src: Gen5, gen: 5},
    {title: "Generation 6", src: Gen6, gen: 6},
    {title: "Generation 7", src: Gen7, gen: 7},
    {title: "Generation 8", src: Gen8, gen: 8},
    {title: "All Generations", src: GenAll, gen: 0}
]

const PokedexGenSelect = ({paperTheme}) =>{
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
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
                        {cardData.map(elem =>(
                            <Grid item  key={cardData.indexOf(elem)}>
                             <Card>
                                <CardActionArea component = {Link} to = "pokedex" state={{ Gen: elem.gen }}>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image= {elem.src}
                                    alt="Pokemon"
                                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" align = "center">
                                        {elem.title}
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

export default PokedexGenSelect;