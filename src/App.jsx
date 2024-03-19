import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import SignUp from "./components/SignUp"
import TopStrip from "./components/TopStrip"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import WishList from "./components/WishList"
import Cart from "./components/Cart"
import CheckOut from "./components/CheckOut"
import Account from "./components/Account"
import NotFound from "./components/NotFound"
import ProductDetails from "./components/ProductDetails"
function App() {

  return (
    <Router>
      <TopStrip/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/wishlist" element={<WishList/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<CheckOut/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/productDetails" element={<ProductDetails/>}/>
        <Route path="*" element={<NotFound/>}/>


      </Routes>
    </Router>
  )
}

export default App
