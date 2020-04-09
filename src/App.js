import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import ArticleHome from './components/ArticleHome'
import OnlineEntrepreneurship from './components/OnlineEntrepreneurship'
import Gallery from './components/Gallery'
import Footer from './components/Footer';
import Circle from './components/Circle'
import ArticleContent from './components/ArticleContent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact strict path="/articles/:id">
            <ArticleContent />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
            <Footer />
          </Route>
          <Route exact path="/online-entrepreneurship">
            <OnlineEntrepreneurship />
            <Footer />
          </Route>
          <Route exact path="/articles">
            <ArticleHome />
            <Footer />
          </Route>
          <Route exact path="/">
            <Home />
            <Circle classi="circle" src={require('./img/keima.jpg')} alt="circle-image" />
            <ArticleHome />
            <OnlineEntrepreneurship />
            <Gallery />
            <Footer />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
