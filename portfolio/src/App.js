import { Route, Switch } from 'react-router-dom';
import './App.scss';
// components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
// layouts
import Home from './contents/Home';
import Portfolio from './contents/Portfolio';
import PortfolioDetailWeb from './contents/PortfolioDetailWeb';
import PortfolioDetailDesign from './contents/PortfolioDetailDesign';
import Testimonials from './contents/Testimonials';
import About from './contents/About';
// import Contact from './contents/Contact';
// Font-Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faSwatchbook, faVectorSquare, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faCode, faSwatchbook, faVectorSquare, faBars, faTimes)

function App() {
  return (
    <div className='App'>
      <Navigation />
      <div className="main">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/portfolioDetailWeb' component={PortfolioDetailWeb} />
          <Route path='/portfolioDetailDesign' component={PortfolioDetailDesign} />
          <Route path='/about' component={About} />
          <Route path='/testimonials' component={Testimonials} />
          {/* <Route path='/contact' component={Contact} /> */}
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;