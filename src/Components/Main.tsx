import '../Styles/Main.css';
import { Box } from '@mui/material';

export function Main(){
    return(
        <Box className={"List-Main-Little"} component={"main"}>
            <Box component={"h2"}>Never Stop<br/>Exploring The World</Box>

            <Box component={"h3"}>All trips have secret destinations that you have to discover</Box>

            <Box className={"Button-Explore"} href={"https://www.google.com.mx/maps/@19.4361442,-99.1405913,3a,75y,190.92h,96.35t/data=!3m6!1e1!3m4!1sBmz_qTHndCVnDQKwj0-4IQ!2e0!7i16384!8i8192?coh=205409&entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"} title={"Go to Explore"} component={"a"}>Explore</Box>
        </Box>
    );
}