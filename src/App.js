import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import Footer from './customer/components/footer/footer';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div >
      <div>
        <Navigation />
      </div>
      <div>
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
