import { Route, Switch } from 'react-router-dom';
import './App.scss';
// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// layouts
import Home from './contents/Home';
import Portfolio from './contents/Portfolio';
// Font-Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faSwatchbook, faVectorSquare } from '@fortawesome/free-solid-svg-icons';

library.add(faCode, faSwatchbook, faVectorSquare)


function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className="main">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/portfolio' component={Portfolio} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;