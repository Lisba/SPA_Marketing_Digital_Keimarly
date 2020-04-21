import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ArticleContent from './components/ArticleContent';
import OnlineEntrepreneurship from './components/OnlineEntrepreneurship';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Circle from './components/Circle';

const ArticleHome = React.lazy(() => import('./components/ArticleHome'));

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
            <Suspense fallback={<div className="suspense-div"><h1 className="suspense-h1">Loading Posts...</h1></div>}>
              <ArticleHome />
            </Suspense>
            <Footer />
          </Route>
          
          <Route exact path="/">
            <Home />
            <Circle classi="circle" src={require('./img/keima.jpg')} alt="circle-image" />
            <Suspense fallback={<div className="suspense-div"><h1 className="suspense-h1">Loading Posts...</h1></div>}>
              <ArticleHome />
            </Suspense>
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
