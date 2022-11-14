import React from "react";
import { Container, Paper, Typography, Box } from "@mui/material";
import DFS from "../../images/DFS.png"
import BFS from "../../images/BFS.gif"
import A from "../../images/A.gif"
import "./styles.css";
//Thinking make a grid, 1 column space between each column
//Each row a paragraph
const Summary = ({paperTheme}) => {
    return(
        <>
            <Container maxWidth = "lg" >
                <Paper elevation={16} variant="outlined" style={{ backgroundColor: paperTheme, marginTop: "5vh"}}>
                    <Typography variant = "h3" align = "center" gutterBottom paddingTop = "3vh">Introduction</Typography>
                    <Typography variant = "h5" align = "center" paragraph paddingBottom = "3vh">
                            This is a 2D pathing algorithm visualizer where users can simulate different 2D pathing algorithms with different board configurations. Users have the option to place a Passable cell, Wall cell, Start cell, Goal cell. Every cell by default is passable and users MUST place one Start and one Goal cell. Algorithms and playback speed are selected via the selection boxes on the bottom left. 
                        </Typography>
                        <Typography variant = "h5" align = "center">Below is a video of a test run:</Typography>

                        <div className="embed-video">
                        <iframe
                            width="853"
                            height="480"
                            src={`https://www.youtube.com/embed/-vsdKbBkQ5Y`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Tutorial"
                            />
                        </div>
                        
                </Paper>

                <Paper elevation={16} variant="outlined" style={{ backgroundColor: paperTheme, marginTop: "5vh"}}>
                    <Typography variant = "h3" align = "center" gutterBottom paddingTop = "3vh">Algorithms Implemented</Typography>
                    <Typography paddingLeft = "1vw" paddingRight = "1vw" variant = "h4" align = "left" paragraph paddingBottom = "3vh" paddingTop = "3vh">
                             -DFS(Depth First Search)
                        </Typography>
                        <Typography paddingLeft = "1vw" paddingRight = "1vw" variant = "h5" align = "left" paragraph paddingBottom = "3vh">
                            DFS is an algorithm that follows a possible branch until it reaches a dead end or its goal(in this case the goal cell). When reaching a dead end it will then backtrack its path until it can branch out again. This is a recursive algorithm.
                        </Typography>
                        <img alt = "DFS code" src = {DFS} style={{width: "60%", marginLeft: "1vw"}}></img>
                        <Typography paddingLeft = "1vw" paddingRight = "1vw" variant = "h5" align = "left" paragraph paddingBottom = "3vh">
                            DFS functions are often very similar and can be GENERALLY broken down as follows: 
                            <br />1. Boundary check <br />2. Goal check <br />3. Some operations <br />4. Recursive calls to adjacent 
                            <br /><br />
                            My code can be broken down as follows:
                            <br />1. Boundary check(If cell coordinates are out of bounds or cell has been visited)
                            <br />2. Add cell to visited cells set and cache the coordinate(To be shown later in visualization)
                            <br />3. Goal check
                            <br />4. Recursive calls to adjacent cell coordinates
                            <br /><br />In my opinion, for anyone wanting to learn DFS. I would suggest looking at an inorder BST traversal for a small BST and following how it is executed manually on paper.
                        </Typography>

                        <Typography paddingLeft = "1vw" paddingRight = "1vw" variant = "h4" align = "left" paragraph paddingBottom = "3vh" paddingTop = "3vh">
                             -BFS(Breadth First Search)
                        </Typography>
                        <Typography paddingLeft = "1vw" paddingRight = "1vw" variant = "h5" align = "left" paragraph paddingBottom = "3vh">
                            BFS is an algorithm that spreads from the start evenly flowing out. Visually I like to think of this like if you were to spill water on a flat surface or in a maze with a flat surface. The water would evenly flood out similar to how BFS would. Both BFS and Dijkstra's algorithm are guranteed to find the shortest paths. Note that in a non weighted graph(such as my grid) BFS is the same as Dijkstra's Algorithm. 
                        </Typography>
                        <div className = "imageWrapper">
                        <img alt = "BFS gif" src = {BFS} style={{ width: "60%"}}></img>
                        </div>
                        <Typography paddingLeft = "1vw" paddingRight = "1vw" variant = "h5" align = "left" paragraph paddingTop = "3vh" paddingBottom = "3vh">
                            To branch out evenly, you first push the starting cell into your queue. Then you repeat the process of: <br />
                            1. Getting the size of your queue<br />
                            2. Traversing through all cells in your queue(up to its previous size) and pushing new adjacent cells<br />
                            Until you reach the target cell or your queue is empty(goal could not be reached). Note that we are getting the size of our queue before traversing the next wave because we are popping cells after we traverse them and appending new adjacent cells to our queue, so the size distinguishes the current wave from the next wave.
                        </Typography>

                        <Typography paddingLeft = "1vw" paddingRight = "1vw" variant = "h4" align = "left" paragraph paddingBottom = "3vh" paddingTop = "3vh">
                             -A*
                        </Typography>
                        <Typography paddingLeft = "1vw" paddingRight = "1vw" variant = "h5" align = "left" paragraph paddingBottom = "3vh">
                            A* is an algorithm that tries to be smarter about its path as oppose to BFS/DFS. A* considers an estimated cost from cells to the goal(this means the goal cell location must be known) and prioritzes traversing the lowest cost cells. Since this is a non-weighted graph I used the "Manhattan Distance" which is just simply cost = Δx+Δy. The implementation of A* is similar to BFS except with a priority to lower cost cells. A* will usually find a path faster then other algorithms, but is not guranteed to find the shortest path.
                        </Typography>
                        <div className = "imageWrapper">
                        <img alt = "A* gif" src = {A} style={{ width: "60%"}}></img>
                        </div>
                        <Typography paddingLeft = "1vw" paddingRight = "1vw" variant = "h5" align = "left" paragraph paddingTop = "3vh" paddingBottom = "3vh">
                            A* is similar to BFS except we prioritize the lowest estimated cost(Δx+Δy) from goal to the neighboring cells. Here I am using an array to hold my neighboring cells like in BFS except I order them in ascending order in cost. Everytime I traverse the cell at the first index of this array then add its valid neighboring cells to my array keeping the ascending order. 
                        </Typography>
                </Paper>
            </Container>
        </>
    );
}

export default Summary;