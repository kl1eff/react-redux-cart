import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import data from "./products.json";

function App() {
  return (
    <>
      <div id="overlay"></div>
      <Header />
      <Products products={data.products} />
      <Cart />
      <Footer />
    </>
  );
}

export default App;
