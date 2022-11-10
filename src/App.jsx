import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.js'
import Pathing from './components/Pathing/Pathing.js';
import Sudoku from './components/Sudoku/Sudoku';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material/';
import Menubar from './components/Menubar';
import { useState } from "react";

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
  const [currentTheme, setTheme] = useState(darkTheme);
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
    <>
    <ThemeProvider theme = {currentTheme}>
      <CssBaseline />
    <Menubar parentCallback = {setThemeCallback} />
      <Routes>
        <Route path = "/Site" element={<Home />}></Route>
        <Route path = "/Site/sudoku" element={<Sudoku />}></Route>
        <Route path = "/Site/pathing" element={<Pathing />}></Route>
      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;