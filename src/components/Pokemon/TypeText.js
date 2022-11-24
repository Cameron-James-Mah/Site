import { grey, red, purple, brown, pink } from "@mui/material/colors";
import { Paper, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
/*
    Going to have to set for light AND dark
*/
const TypeText = ({Type}) =>{ //Type is the pokemon type, first letter cap
    const [NormalTheme, setNormalTheme] = useState('#A8A77A');
    const [FireTheme, setFireTheme] = useState('#EE8130');
    const [WaterTheme, setWaterTheme] = useState('#6390F0');
    const [ElectricTheme, setElectricTheme] = useState('#F7D02C');
    const [GrassTheme, setGrassTheme] = useState('#7AC74C');
    const [IceTheme, setIceTheme] = useState('#96D9D6');
    const [FightingTheme, setFightingTheme] = useState('#C22E28');
    const [PoisonTheme, setPoisonTheme] = useState('#A33EA1');
    const [GroundTheme, setGroundTheme] = useState('#E2BF65');
    const [FlyingTheme, setFlyingTheme] = useState('#A98FF3');
    const [PsychicTheme, setPsychicTheme] = useState('#F95587');
    const [BugTheme, setBugTheme] = useState('#A6B91A');
    const [RockTheme, setRockTheme] = useState('#B6A136');
    const [GhostTheme, setGhostTheme] = useState('#735797');
    const [DragonTheme, setDragonTheme] = useState('#6F35FC');
    const [DarkTheme, setDarkTheme] = useState('#705746');
    const [SteelTheme, setSteelTheme] = useState('#B7B7CE');
    const [FairyTheme, setFairyTheme] = useState('#D685AD');
    
    const [currentTheme, setCurrentTheme] = useState(); 
    useEffect(()=>{
        console.log(Type+"Theme");
        setCurrentTheme(eval(Type+"Theme")); //dont want to have 18 if/switch statements so using eval and string concatenate 
    })
    return(
        <>
            <Paper elevation={0} variant="outlined" style={{ backgroundColor: currentTheme, blockSize: "fit-content", width: "fit-content", padding: "0.3vh"}}>
                <Typography variant = "h5" align = "center">{Type}</Typography>
            </Paper>
        </>
    )
}

export default TypeText;