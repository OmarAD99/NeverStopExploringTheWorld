import '../Styles/Footer.css';
import { Box } from '@mui/material';

export function Footer(){
    return(
        <Box className={"List-Footer-Little"} component={"footer"}>
            <Box rel={"noopener"} title={"Facebook - Social Networks"} href={"https://www.facebook.com/profile.php?id=61559019952628"} target={"_blank"} className={"Facebook-SocialNetworks"} component={"a"}>
                <Box className={"fa-brands fa-facebook-f"} component={"i"}></Box>
            </Box>

            <Box rel={"noopener"} title={"Twitter X - Social Networks"} href={"https://x.com/CdmxPilares"} target={"_blank"} className={"TwitterX-SocialNetworks"} component={"a"}>
                <Box className={"fa-brands fa-twitter"} component={"i"}></Box>
            </Box>

            <Box rel={"noopener"} title={"Instagram - Social Networks"} href={"https://www.instagram.com/pilarescdmx/"} target={"_blank"} className={"Instagram-SocialNetworks"} component={"a"}>
                <Box className={"fa-brands fa-instagram"} component={"i"}></Box>
            </Box>
        </Box>
    );
}