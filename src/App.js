import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import ArticleHome, { newString } from './components/ArticleHome'
import OnlineEntrepreneurship from './components/OnlineEntrepreneurship'
import Gallery from './components/Gallery'
import Footer from './components/Footer';
import Circle from './components/Circle'
import ArticleContent from './components/ArticleContent';
import * as articleContent from './textArticles'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={`/articles/${newString}`}>
            <ArticleContent title={articleContent.title4} text={articleContent.article4} />
            <Footer />
          </Route>
          <Route exact path={`/articles/por-que-hacemos-marketing`}>
            <ArticleContent title={articleContent.title3} text={articleContent.article3} />
            <Footer />
          </Route>
          <Route exact path="/articles/what-is-branding">
            <ArticleContent title={articleContent.title2} text={articleContent.article2} />
            <Footer />
          </Route>
          <Route exact path="/articles/why-marketing">
            <ArticleContent title={articleContent.title1} text={articleContent.article1} />
            <Footer />
          </Route>
          <Route exact path="/articles/instagramArticle">
            <ArticleContent title={articleContent.title1} text={articleContent.article1} />
            <Footer />
          </Route>
          <Route exact path="/articles/hotmartArticle">
            <ArticleContent title={articleContent.title1} text={articleContent.article1} />
            <Footer />
          </Route>
          <Route exact path="/articles/youtubeArticle">
            <ArticleContent title={articleContent.title1} text={articleContent.article1} />
            <Footer />
          </Route>
          <Route exact path="/articles/googleAdsArticle">
            <ArticleContent title={articleContent.title1} text={articleContent.article1} />
            <Footer />
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
