import React from 'react';
import './App.css';
//import Input from './components/input';
//import Navbar from './components/navbar';
//import Jumbotron from './components/jumbotron';
//import Paginas from './components/pagefeatures';

function Input (){
    return (
    <form class="form-inline" role="form">
  <div class="form-group">
    <input type="text" class="form-control"
           placeholder="What needs to be done?"/>
  </div>
  </form>

    );
}



function App() {
  return (
    <div className="App">
      <Input/>
    </div>
  );
}

export default App;
