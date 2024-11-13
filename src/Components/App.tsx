import '../Styles/App.css';
import { Box } from '@mui/material';
import Video_Principal from '../assets/Videos/NeverStopExploringTheWorld.mp4';
import { Header } from './Header';

function App(){

  return(
    <>
      <Box component={"video"} src={Video_Principal} className={"Video_Principal"} autoPlay loop muted/>

      <Header/>
    </>
  );

}

export default App;