import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';
import Alert from './components/Alert';
 
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";



function App() {
  const [mode , setMode] = useState('light') ;//wheather dark mode is enable or not
const [alert, setAlert] = useState(null);


const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type: type
  })
  setTimeout(()=>{
    setAlert(null);
  },1500);
}
  const toggleMode=()=>{
    if(mode ==='light'){
          setMode('dark');
          document.body.style.backgroundColor='#042743';
          showAlert("Dark mode has been enabled", "success");
          document.title='My-App-Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled", "success");
      document.title='My-App-light Mode'


    }
  }


  const togglemode2=()=>{
    if (mode === 'light'){
      setMode('green');
      document.body.style.backgroundColor="green";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
    }
  }
  return (
<>
{/* <Router> */}
<Navbar title="MyApp" aboutText="About Text"  mode={mode} toggleMode={toggleMode} togglemode2={togglemode2}/>
<Alert alert={alert}/>
<div className="container my-3" mode={mode} togglemode2={togglemode2}>
  <TextForm 
      heading="Enter your text to analyze below" 
      showAlert={showAlert} 
      mode={mode} 
      togglemode2={togglemode2} 
  />
      {/* <Routes> */}
  {/* <Route path="/about" element={<About />} /> */}
  {/* <Route path="/textform" element={<TextForm 
      heading="Enter your text to analyze below" 
      showAlert={showAlert} 
      mode={mode} 
      togglemode2={togglemode2} 
  />} />
</Routes> */}

 
        </div>

  {/* </Router> */}
</>  

  );
}

export default App;
