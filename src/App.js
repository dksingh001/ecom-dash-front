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
import Profile from "./components/Pages/Profile";
import Order from "./components/Pages/Order";
import Wishlist from "./components/Pages/Wishlist";
import Giftcard from "./components/Pages/Giftcard";
import Cart from "./components/Pages/Cart";
import Shopdetails from "./components/Pages/shopdetails";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Emptycart from "./components/Pages/emptycart";
import Emptycart1 from "./components/Pages/emptycart1";
import Wishlist1 from "./components/Pages/wishlist1";
import Wishlist2 from "./components/Pages/wishlist2";
import { NotificationContainer, NotificationManager } from "react-notifications";



function App() {

  const notify = (status, message) =>{
    if (status) {
      NotificationManager.success(message, "success!")
    } else {
      NotificationManager.error(message, "Failed! ")
    }
  }

  return (
    <>
      <MainState>
        <BrowserRouter>
          <Header />
          <NotificationContainer />
          <Routes>
            <Route to={PrivateRoute}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
            <Route path="/giftcard" element={<Giftcard />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/Shopdetails/:id" element={<Shopdetails />}></Route>
            </Route>
            
            <Route path="/" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login notify={notify} />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
            <Route path="/giftcard" element={<Giftcard />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/Shopdetails/:id" element={<Shopdetails />}></Route>
            <Route path="/cart1" element={ <Emptycart /> } />
            <Route path="/cart2" element={ <Emptycart1 /> } />
            <Route path="/wishlist1" element={ <Wishlist1 /> } />
            <Route path="/wishlist2" element={ <Wishlist2 /> } />

          </Routes>
          <Footer />
        </BrowserRouter>
      </MainState>
      {/* <Header /
       <Footer /> */}
    </>
  );
}

export default App;
