import {
  Switch, 
  Route, 
  useLocation 
} from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import './App.scss'


// components
import Navigation from './components/Navigation'
import Footer from './components/Footer'
// layouts
import Home from './contents/Home'
import Portfolio from './contents/Portfolio'
import PortfolioDetail from './contents/PortfolioDetail'
import Testimonials from './contents/Testimonials'
// import About from './contents/About'
import Page404 from './contents/Page404'

const App = () => {
  const location = useLocation();

  return (
    <div style={{position: "relative"}}>
      <div className='App'>
        <Navigation />

        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/portfolioDetail' component={PortfolioDetail} />
            {/* <Route path='/about' component={About} /> */}
            <Route path='/testimonials' component={Testimonials} />
            <Route component={Page404} />
          </Switch>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;