import "./App.css";
import Header from "./components/Header";
import About from "./components/section/About";
import Footer from "./components/section/Footer";
import Order from "./components/section/Order";
import Services from "./components/section/Services";
import Store from "./components/section/Store";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Store />
      <Services />
      <Order />
      <Footer />
    </div>
  );
}

export default App;
