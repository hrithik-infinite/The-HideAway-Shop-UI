import "./App.css";
import Cart from "./customer/components/Cart/Cart";
import Navigation from "./customer/components/Navigation/Navigation";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Footer from "./customer/components/footer/footer";
import HomePage from "./customer/pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <div className="z-50">
        <Navigation />
      </div>
      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        <Cart />
      </div>
      <Footer />
    </div>
  );
}

export default App;
