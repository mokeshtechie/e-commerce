
import './App.css';
import Navbar from './components/navbar/navbar';
import {Routes,Route, BrowserRouter} from'react-router-dom'
import ShopCategory from './pages/shopCategory';
import Shop from './pages/shop'
import LoginSingup from './pages/loginSingup';
import Product from "./pages/product";
import Cart from "./pages/card";
import Footer from './components/footer/footer';
import men_banner from "./components/assets/Assets/banner_mens.png"
import women_banner from "./components/assets/Assets/banner_women.png"
import kids_banner from "./components/assets/Assets/banner_kids.png"
function App() {
  return (
    <div >
      <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
           <Route path=":productId" element={<Product/>}/>
           </Route>
           <Route path='/cart' element={<Cart/>}/>
           <Route path="/login" element={<LoginSingup/>}/>
           
       </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
