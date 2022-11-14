import React from "react";
import { Container, Paper, Typography, Box } from "@mui/material";
import SudokuCode from "../../images/SudokuCode.png"
import ValidBoard from "../../images/ValidBoard.png"
import SolvedBoard from "../../images/SolvedBoard.png"
const Summary = ({paperTheme}) =>{
    return (
        <>
            <Container maxWidth = "lg">
                <Paper elevation={16} variant="outlined" style={{ backgroundColor: paperTheme, marginTop: "5vh"}}>
                    <Typography variant = "h3" align = "center" gutterBottom paddingTop = "3vh">Introduction</Typography>
                    <Typography variant = "h5" align = "center" paragraph paddingBottom = "3vh">
                            Sudoku is a puzzle game where the player must fill a 9x9 board such that all cells are valid. A cell is valid if its row, column and 3x3 which it resides in have unique values from 1-9. Note that not all sudoku's are solveable and sudoku's can have many solutions.
                            <br />
                            <br />
                            <img alt = "sudoku code" src = {ValidBoard} style={{width: "35%", marginLeft: "1vw"}}></img>
                            <img alt = "sudoku code" src = {SolvedBoard} style={{width: "35%", marginLeft: "1vw"}}></img>
                            <br />
                            <br />
                            Above is an example of a valid sudoku puzzle and a possible solution. You'll see all rows and columns have unique numbers from 1-9 and all 9 3x3's have unique numbers from 1-9.
                            <br />
                            <br />
                            My sudoku solver uses backtracking to solve any valid sudoku board.  
                        </Typography>
                </Paper>

                <Paper elevation={16} variant="outlined" style={{ backgroundColor: paperTheme, marginTop: "5vh"}}>
                    <Typography variant = "h3" align = "center" gutterBottom paddingTop = "3vh">Implementation(Backtracking)</Typography>
                    <Typography paddingLeft = "1vw" paddingRight = "1vw" variant = "h5" align = "left" paragraph paddingBottom = "3vh">
                            Backtracking is a way of brute forcing a solution in a problem where a user has multiple decisions at multiple steps. In the context of a sudoku solver, the user has the choice of filling in an empty cell with any valid number for many different cells. In my opinion a good way to understand backtracking conceptually would be to model whatever your backtracking with a decision tree.
                            <br /> <br />
                            My Code in C++:
                            <br /><br />
                            <img alt = "sudoku code" src = {SudokuCode} style={{width: "60%", marginLeft: "1vw"}}></img>
                            <br /><br />
                            Similar to DFS, backtracking functions are all very similar and can GENERALLY be broken down as follows:
                            <br />1. Boundary check <br />2. Goal check <br />3. Some operations <br />4. Recursive calls to adjacent 
                            <br /><br />
                            My code can be broken down as follows:
                            <br />1. Goal check(See if at final cell and able to fill with valid number)
                            <br />2. Check if this is a pre filled cell(Default value in given puzzle)
                            <br />3. Get possible values for this cell
                            <br />4. Recursive call to next cell for EVERY possible value
                            <br /><br />
                            The recursion is hard to visualize at first, but backtracking/dfs functions all follow the same sort of logic.
                        </Typography>
                </Paper>
            </Container>
        </>
    )
}

export default Summary;