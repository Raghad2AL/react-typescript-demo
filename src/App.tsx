import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import ButtonBoot from './components/BootButton/button';
import ButtonMUI from './components/MUIButton/Button';


function App() {
  return (
    <div className="d-flex justify-content-between">
      <ButtonMUI label='Click me!' size='lg'/>
      <ButtonBoot label='Click me!' size='lg'/>
    </div>
  );
}

export default App;