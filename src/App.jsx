import React ,{useState}from "react";

import Delivery from "./components/Other Components/Delivery";
import LegalNotice from "./components/Other Components/LegalNotice";
import Home from "./components/Home Components/Home";
import Searchbar from "./components/NavBar Components/Searchbar";
import Navbar from "./components/NavBar Components/Navbar";
import About from "./components/Other Components/About";
import Footer from "./components/Other Components/Footer";
import ErrorPage from "./components/Other Components/ErrorPage";
import BlogPostDetails from "./components/Home Components/BlogPostDetails";
import SingleProduct from "./components/Product Components/SingleProduct";
import ProductComponent from "./components/Product Components/ProductComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/productContext";
import { FilterContextProvider } from "./context/filterContext";
import { CartProvider } from "./context/cartContext";
import Cart from "./components/Cart Components/Cart";

import { CategoriesContextProvider } from "./context/categoriesContext";
import Toolbar1 from "./components/NavBar Components/Toolbar1";
import Checkout from "./components/Checkout Component/Checkout";
import Alert from "./components/Checkout Component/Alert";



function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 3000);
  }
  return (
    <>
   
    <CategoriesContextProvider>
     <ProductProvider>
     <FilterContextProvider>
      <CartProvider>
       <Router>
        <Searchbar />
        <div className="navbar1">
        <Navbar />
        </div>
       <div className="toolbar">
       <Toolbar1/>
       </div>
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/delivery" element={<Delivery />} />
          <Route exact path="/legalnotice" element={<LegalNotice />} />
          <Route exact path="/singleblog" element={<BlogPostDetails />} />
          <Route exact path="/product/:id" element={<ProductComponent />} />
          <Route exact path="/categories/:cat_id" element={<ProductComponent />}/>
          <Route exact path="/sub_categories/:cat_id/:subcat_id" element={<ProductComponent />}/>
          <Route exact path="/sub_sub_categories/:cat_id/:subcat_id/:sub_subcat_id" element={<ProductComponent />}/>
          <Route exact path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout showAlert={showAlert}/>}/>
          {/* <Route path="/additem" element={<AddItemToCartDialog/>}/> */}
        </Routes>
        <Alert alert={alert}/>
        <Footer />
      </Router>
      </CartProvider>
      </FilterContextProvider>
      </ProductProvider>
      </CategoriesContextProvider>
    </>
  );
}

export default App;
