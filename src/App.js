import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Articles from './components/Articles'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/articles">
            Articulos
          </Route>
          <Route path="/gallery">
            Galeria
          </Route>
          <Route path="/aboutme">
            Sobre mi
          </Route>
          <Route path="/">
            <Home />
            <Articles />
            <AboutMe />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
