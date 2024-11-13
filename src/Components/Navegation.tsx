import { Box } from '@mui/material';
import '../Styles/Navegation.css';
import { Main } from './Main';
import { Footer } from './Footer';

export const Navegation = () => {

    return(
        <Box component={"nav"} className={"Navegation-Little"}>
            <Box type={"checkbox"} id={"Btn-Main"} placeholder={"Main-Btn"} component={"input"}/>

            <Box htmlFor={"Btn-Main"} className={"Label-Main"} component={"label"}>
                <Box component={"span"} id={"Spn-1"}/>
                <Box component={"span"} id={"Spn-2"}/>
                <Box component={"span"} id={"Spn-3"}/>
            </Box>

            <Box htmlFor={"Btn-Main"} className={"Label-Navegation"} component={"label"}>
                <Box className={"ListNavegation-Little"} id={"Navegation-List-MainLittle"} component={"ul"}>
                    <Box className={"Navegation-List-Little"} component={"li"}>
                        <Main/>
                    </Box>

                    <Box className={"Navegation-List-Little"} id={"Navegation-List-FooterLittle"} component={"li"}>
                        <Footer/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );

};