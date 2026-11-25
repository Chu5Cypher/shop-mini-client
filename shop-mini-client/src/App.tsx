import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products } from "./data/products";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Banner imageUrl="/images/Banner/101store.png" />
          <div id="products-section">
            <ProductList title="Sản phẩm nổi bật" items={products} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;