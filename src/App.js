import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Headers/Header"
import Footer from './components/Headers/footer';
import Home from './components/Pages/home';
import Shop from './components/Pages/shop';
import About from './components/Pages/about';
import Contact from './components/Pages/contact';


function App() {
  return (
    <>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/shop" element={<Shop />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
       {/* <Header />

       <Footer /> */}
    </>
  );
}

export default App;
