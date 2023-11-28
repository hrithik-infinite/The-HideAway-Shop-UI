import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import Product from './customer/components/Product/Product';
import Footer from './customer/components/footer/footer';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div >
      <div className='z-50'>
        <Navigation />
      </div>
      <div>
        {/* <HomePage /> */}
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default App;
