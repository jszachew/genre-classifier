import logo from './logo.svg';
import './App.css';
import InputArea from './components/InputArea/InputAreaContainer';
import ResultArea from './components/ResultArea/ResultAreaContainer';
import Button from './components/Button/ButtonContainer';

function App() {
  return (
    <div >
      <header className="App-header ">
        <div className='parent'>
          <InputArea/>
          <Button/>
          <ResultArea/>  
         </div>        
      </header>
    </div>
  );
}

export default App;
