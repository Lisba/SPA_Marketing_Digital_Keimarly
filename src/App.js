import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Articles from './components/Articles'
import OnlineEntrepreneurship from './components/OnlineEntrepreneurship'
import Gallery from './components/Gallery'
import Footer from './components/Footer';
import Circle from './components/Circle'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/articles/why-and-where-marketing">
            Article why-and-where-marketing
          </Route>
          <Route path="/articles/What-do-we-do-marketing-for">
            Article What-do-we-do-marketing-for
          </Route>
          <Route path="/articles/what-is-branding">
            Article what-is-branding
          </Route>
          <Route path="/articles/why-marketing">
            Article why-marketing
          </Route>
          <Route path="/articles/instagramArticle">
            Instagram Article
          </Route>
          <Route path="/hotmartArticle">
            Hotmart Article
          </Route>
          <Route path="/youtubeArticle">
            Yotube Article
          </Route>
          <Route path="/googleAdsArticle">
            Google Ads Article
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/online-entrepreneurship">
            <OnlineEntrepreneurship />
          </Route>
          <Route path="/">
            <Home />
            <Circle classi="circle" src={require('./img/keima.jpg')} alt="circle-image" />
            <Articles />
            <OnlineEntrepreneurship />
            <Gallery />
            <Footer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
