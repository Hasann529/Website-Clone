import './App.scss';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import OurMenu from './components/OurMenu/OurMenu';
import SubscriptionPlan from './components/SubscriptionPlan/SubscriptionPlan';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Contact />
      <OurMenu />
      <Hero />
      <SubscriptionPlan />
      <Footer />
    </div>
  );
}

export default App;
