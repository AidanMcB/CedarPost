import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Path} from 'react-router-dom'
// Components
import About from './components/About/About'
import Header from './layouts/Header'
import HomePage from './components/Home/HomePage'
function App() {

  const [state,setState] = useState(0)

  return (
   <BrowserRouter>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={About} />
   </BrowserRouter>
  );
}

export default App;
