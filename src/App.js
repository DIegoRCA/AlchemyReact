import {BrowserRouter as Router,Switch, Route} from "react-router-dom";

import Header from './components/layout/Header';
import Footer from './components/layout/Footer'; 
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';


function App() {
  return (
  
     <Router>
      <Header></Header>
        <Switch>
         <Route path="/" exact component={HomePage} />
         <Route path="/portfolio" exact component={PortfolioPage}/>
         <Route path="/aboutus" exact component={AboutUsPage}/>
         <Route path="/contact" exact component={ContactPage}/>
         <Route path="/services" exact component={ServicesPage}/>
        </Switch>
      <Footer/>
    </Router>

  );
}

export default App;
