import { CssBaseline, AppBar, Toolbar, Typography } from "@mui/material";

const Menubar = () =>(
    <>
    <CssBaseline />
            <AppBar position = "relative">
                <Toolbar>
                        <Typography variant = "h6">
                            Home
                        </Typography>
                </Toolbar>
            </AppBar>
    </>
)

export default Menubar;