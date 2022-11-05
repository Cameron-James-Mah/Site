import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.js'
import Pathing from './components/Pathing.js';
import Sudoku from './components/Sudoku.js';
function App() {
  return (
    <>
      <Routes>
        <Route path = "/Personal_Site" element={<Home />}></Route>
        <Route path = "/Personal_Site/sudoku" element={<Sudoku />}></Route>
        <Route path = "/Personal_Site/pathing" element={<Pathing />}></Route>
      </Routes>
    </>
  );
}

export default App;