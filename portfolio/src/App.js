import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';
// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// layouts
import Home from './layouts/Home';
import Portfolio from './layouts/Portfolio';


function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className="main">
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;