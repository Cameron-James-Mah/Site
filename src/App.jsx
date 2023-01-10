import { Routes, Route } from 'react-router-dom'

//Components
import Home from './components/Home.js'
import Pathing from './components/Pathing/Pathing.js';
import Sudoku from './components/Sudoku/Sudoku';
import PathingSummary from './components/Pathing/Summary.js';
import SudokuSummary from './components/Sudoku/Summary.js';
import ShowPokemon from './components/Pokemon/ShowPokemon.js';
import SearchPokemon from './components/Pokemon/SearchPokemon.js';
import Pokedex from './components/Pokemon/Pokedex.js';
import PokedexGenSelect from './components/Pokemon/PokedexGenSelect.js';
import PokeSummary from './components/Pokemon/PokeSummary'

import { ThemeProvider, CssBaseline, createTheme } from '@mui/material/';
import Menubar from './components/Menubar';
import { useState } from "react";
import { grey } from '@mui/material/colors';

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


function App() {
  //Paper theme
  const [homePaperTheme, setHomePaperTheme] = useState(grey[200]);
  const [currentTheme, setTheme] = useState(lightTheme);
    const setThemeCallback = (childTheme) =>{
        if(childTheme === "light"){
            setTheme(lightTheme);
            setHomePaperTheme(grey[200]);
            //console.log(1);
        }
        else{
            setTheme(darkTheme);
            setHomePaperTheme(grey[900]);
            //console.log(2);
        }
    }
    
  return (
    <>
    <ThemeProvider theme = {currentTheme}>
      <CssBaseline />
    <Menubar parentCallback = {setThemeCallback} />
      <Routes>
        <Route path = "/" element={<Home paperTheme = {homePaperTheme}/>}></Route>
        <Route path = "/sudoku" element={<Sudoku />}></Route>
        <Route path = "/pathing" element={<Pathing />}></Route>
        <Route path = "/pathingSummary" element={<PathingSummary paperTheme={homePaperTheme}/>}></Route>
        <Route path = "/sudokuSummary" element={<SudokuSummary paperTheme={homePaperTheme}/>}></Route>
        <Route path = "/showPokemon" element={<ShowPokemon paperTheme={homePaperTheme}/>}></Route>
        <Route path = "/searchPokemon" element={<SearchPokemon/>}></Route>
        <Route path = "/genSelect" element={<PokedexGenSelect paperTheme={homePaperTheme}/>}></Route>
        <Route path = "/genSelect/pokedex" element={<Pokedex paperTheme={homePaperTheme}/>}></Route>
        <Route path = "/pokemonSummary" element={<PokeSummary paperTheme={homePaperTheme}/>}></Route>
      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;