import React from 'react';
import { Router, Location, Redirect } from '@reach/router';
import ScrollToTopBtn from './menu/ScrollToTop';
import Header from './menu/header';
import Home from './pages/home';

import Explore from './pages/explore';

import Helpcenter from './pages/helpcenter';
import Ranking from './pages/ranking';
import Colection from './pages/colection';
import ItemDetail from './pages/ItemDetail';
import Author from './pages/Author';
import Wallet from './pages/wallet';
import Login from './pages/login';
import Price from './pages/price';
import News from './pages/news';
import Create from './pages/create';
import Auction from './pages/Auction';
import Activity from './pages/activity';
import Contact from './pages/contact';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0,0), [location])
  return children
}

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id='routerhang'>
        <div key={location.key}>
          <Router location={location}>
            {children}
          </Router>
        </div>
      </div>
    )}
  </Location>
);

const app= () => (
  <div className="wraper">
  <GlobalStyles />
    <Header/>
      <PosedRouter>
      <ScrollTop path="/">
        <Home exact path="/">
          <Redirect to="/home" />
        </Home>
        <Explore path="/explore" />
        <Helpcenter path="/helpcenter" />
        <Ranking path="/ranking" />
        <Colection path="/colection" />
        <ItemDetail path="/ItemDetail" />
        <Author path="/Author" />
        <Wallet path="/wallet" />
        <Login path="/login" />
        <Price path="/price" />
        <News path="/news" />
        <Create path="/create" />
        <Auction path="/Auction" />
        <Activity path="/activity" />
        <Contact path="/contact" />
        </ScrollTop>
      </PosedRouter>
    <ScrollToTopBtn />
    
  </div>
);
export default app;