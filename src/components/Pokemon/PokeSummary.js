import { Container, Paper, Typography, Box } from "@mui/material";
import {Link as MuiLink} from '@mui/material/';
import pokeSearchGIF from '../../images/pokeSearchGIF.gif'
import pokedexGIF from '../../images/pokedexGIF.gif'
import { useEffect } from "react";

const PokeSummary = ({paperTheme}) =>{
    useEffect(()=> {
        window.scrollTo(0, 0);
    },[])
    return(
        <>
            <Container>
                <Paper elevation={10} variant="outlined" style={{ backgroundColor: paperTheme, marginTop: "5vh"}}>
                    <Typography variant = "h3" align = "center" gutterBottom paddingTop = "3vh">Pokemon Search</Typography>
                    <br/>
                    <div align = "center">
                        <img alt = "search" src = {pokeSearchGIF} style={{width: "60%"}}></img>
                    </div>
                    
                    <br/>
                    <Typography paddingLeft = "1vw" paddingRight = "1vw" variant = "h5" align = "left" paragraph paddingBottom = "3vh">In my pokemon search users can search for a specific pokemon. Whenever an existing pokemon name/number is searched the user is directed to my page that displays basic information on the pokemon. When searching a pokemon name/number that doesn't exist, the user is directed to my page explaining possible issues and linking my github repo issues page to report any possible errors in my site.

                    
                    </Typography>
                    
                </Paper>

                <Paper elevation={10} variant="outlined" style={{ backgroundColor: paperTheme, marginTop: "5vh"}}>
                    <Typography variant = "h3" align = "center" gutterBottom paddingTop = "3vh">Pokedex</Typography>
                    <br/>
                    <div align = "center">
                        <img alt = "search" src = {pokedexGIF} style={{width: "60%"}}></img>
                    </div>
                    <br/>
                    <Typography paddingLeft = "1vw" paddingRight = "1vw" variant = "h5" align = "left" paragraph paddingBottom = "3vh">In my pokedex users can skim through all existing pokemon. Users are given a selection where they can choose to view pokemon of specific generations or to view all pokemon. The user can then select a pokemon and be directed my page that displays basic information on that pokemon</Typography>
                </Paper>

                <Paper elevation={10} variant="outlined" style={{ backgroundColor: paperTheme, marginTop: "5vh"}}>
                    <Typography variant = "h3" align = "center" gutterBottom paddingTop = "3vh">Pokeapi and troubleshooting</Typography>
                    <br/>
                    <Typography paddingLeft = "1vw" paddingRight = "1vw" variant = "h5" align = "left" paragraph paddingBottom = "3vh">PokeAPI is an API containing a massive amount of pokemon data. <MuiLink href = "https://pokeapi.co/docs/v2" rel="noopener noreferrer" target="_blank" >Here</MuiLink> is a link to the full documentation. Although for most uses the <MuiLink href = "https://pokeapi.co/" rel="noopener noreferrer" target="_blank" >home</MuiLink> page contains enough information and a JSON formatter to figure out how to fetch your desired data.
                    <br/><br/>
                    While working on these projects I ran into a few issues:
                    <br/><br/>
                    1. In the beginning I was initially fetching my pokemon data via pokeapi.co/api/v2/pokemon/pokemonName. This is one of the ways they show on there home page. However I noticed they had a different query for pokemon with multiple types such as Aegislash which is as follows pokeapi.co/api/v2/pokemon-species/pokemonName moreover the JSON data didn't have the same data. I realized that pokemon that have different types have to be handled differently. When looking further I realized pokemon types could be searched under the initial query I was using as long as you specify the type(ex: pokeapi.co/api/v2/pokemon/aegislash-sword). My initial workaround was to just add a note under the search bar that explained this situation and that you would have to search the pokemon and include the type, or search by pokemon number. Later I added an autocomplete which covered this issue.
                    <br/><br/>
                    2. Before I fully worked out my issues with how i wanted to fetch data for pokemon with many types, I began started working on my pokedex. My pokedex invevitably ran into the same issue. The initial workaround I had for this was that I would always fetch data for all pokemon so in my javascript object I would have an array with each index containing individual pokemon data. This also meant that I always knew the pokemon number for any selected pokemon. The pokemon at index 0 for example would be the pokemon with the corresponding pokemon number. So in the case that the pokemon name could not be searched, I would instead search via the pokemon number. This however became unecessary once I decided to just include the pokemon type in the fetch. 
                    <br/><br/>
                    3. As I was testing for bugs I noticed one pokemon in particular(I cant remember the exact pokemon) had only a NULL in the evolution_chain field. This was the only pokemon with this issue. Even pokemon with no evolutions just had a chain that would only include themselves. I just added a simple workaround for cases like these but it makes me wonder what other edge cases there might still be.
                    <br/><br/>
                    4. This wasn't really much of a bug but was still something that went unnoticed for some time while testing. Sometimes pokemon would have ability descriptions that would be in different languages. I fixed it by simply just iterating over the array of descriptions and took the one that had a language.name field equal to "en" to ensure I get the first english one. In the case there was no english description I would just take the first description.
                    <br/><br/>
                    5. As far as I know this is unavoidable but fetching data can be really slow. I'd imagine there are many factors that are involved here but even with really good internet, if the user is using the pokedex and selects to show pokemon of "All Generations" it will take a very long time. I minimized the amount of api calls I was doing for individual generations but this is something that will just have to be accepted. 
                    
                    </Typography>
                </Paper>
            </Container>
            <br/>
        </>
    )
}

export default PokeSummary;