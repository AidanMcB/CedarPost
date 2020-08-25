import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Path} from 'react-router-dom'
// Components
import About from './components/About/About'
function App() {

  const [state,setState] = useState(0)
  return (
   <BrowserRouter>
      <Route exact path="/about" component={About} />
   </BrowserRouter>
  );
}

export default App;
