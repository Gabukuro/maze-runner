import { Container } from '@mui/material';
import MazeContainer from './Components/MazeContainer';
import UploadForm from './Components/uploadForm';
import { MazeProvider } from './Context/MazeContext';
import './App.css';

function App() {
  return (
    <MazeProvider>
      <Container maxWidth="none" className="container">
        <UploadForm />

        <MazeContainer />

      </Container>
    </MazeProvider>
  );
}

export default App;
