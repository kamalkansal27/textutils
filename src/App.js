import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react'
import Alert from './components/Alert';

function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg : message,
        type : type
      });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  };
  
  const togglemode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "info");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "info");
    }
  }

  return (
    <>
      <Navbar title = "TextUtils" about = "About us" mode = {mode} togglemode = {togglemode}/>
      <Alert alert={alert}/>
      <Textform heading = "Try TextUtils - Manipulate your text" showAlert = {showAlert}/>
    </>
  );
}

export default App;
