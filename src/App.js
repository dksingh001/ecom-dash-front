import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainState from "./context/MainState";
import Header from "./components/Headers/Header";
import Footer from "./components/Headers/footer";
import Home from "./components/Pages/home";
import Shop from "./components/Pages/shop";
import About from "./components/Pages/about";
import Contact from "./components/Pages/contact";
import Login from "./components/Auth/login";
import Signup from "./components/Auth/signup";

function App() {
  return (
    <>
      <MainState>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </MainState>
      {/* <Header />
       <Footer /> */}
    </>
  );
}

export default App;
