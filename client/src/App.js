import logo from './logo.svg';
import './App.css';
import InputArea from './components/InputArea/InputAreaContainer';
import ResultArea from './components/ResultArea/ResultAreaContainer';
import Button from './components/Button/ButtonContainer';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="jszachewicz.com">
        jszachewicz.com
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

function App() {
  return (
    <Container maxWidth="sm">
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Classify with CD1 set
      </Typography>
      <InputArea/>
      <Button/>
      <ResultArea/>  
      <Copyright/>
    </Box>
  </Container>
  );
}

export default App;
