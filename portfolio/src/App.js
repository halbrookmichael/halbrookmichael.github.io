import { Route, Switch } from 'react-router-dom';
import './App.scss';
// components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
// layouts
import Home from './contents/Home';
import Portfolio from './contents/Portfolio';
import Contact from './contents/Contact';
// Font-Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faSwatchbook, faVectorSquare, faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faCode, faSwatchbook, faVectorSquare, faBars)


function App() {
  return (
    <div className='App'>
      <Navigation />
      <div className="main">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;