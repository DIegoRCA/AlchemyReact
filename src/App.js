import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';


function App() {
  return (
   <div className="App">
     <Header></Header>
     
    <HomePage></HomePage>
    <PortfolioPage></PortfolioPage>
    <AboutUsPage></AboutUsPage>
    <ServicesPage></ServicesPage>
    <ContactPage></ContactPage>
    <Footer></Footer>
   </div>
  );
}

export default App;
