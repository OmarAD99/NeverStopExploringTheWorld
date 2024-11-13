import '../Styles/Header.css';
import { Box } from '@mui/material';
import { Navegation } from './Navegation';

export const Header = () => {

    return(
        <Box component={"header"} className={"Header"} id={"Encabezado"}>
            <Box component={"a"} href={"/"} className={"Logotipo"}>
                <Box component={"h1"}>Travel</Box>
            </Box>

            <Navegation/>
        </Box>
    );

};