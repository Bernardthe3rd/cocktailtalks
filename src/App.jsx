//Default imports
import {Route, Routes} from "react-router-dom";
import {useContext, useState} from "react";
import {AuthContext} from "./context/AuthContext.jsx";

//Styling imports
import "./App.css"

//Components imports
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";

//Pages imports
import Home from "./pages/home/Home.jsx";
import Catalog from "./pages/catalog/Catalog.jsx";
import Product from "./pages/product/Product.jsx";
import Login from "./pages/login/Login.jsx";
import Account from "./pages/account/Account.jsx";
import Randomizer from "./pages/randomizer/Randomizer.jsx";
import About from "./pages/about/About.jsx";
import NotFound from "./pages/notfound/NotFound.jsx";

function App() {
    const { isAuth } = useContext(AuthContext);
    const [registration, setRegistration] = useState(false);

  return (
      <>
          <Navbar validateLogin={isAuth}/>
          <Routes>
              <Route path={"/"} element={<Home reg={registration}/>}/>
              <Route path={"/catalog"} element={<Catalog/>}/>
              <Route path={"/product/:id"} element={<Product/>}/>
              <Route path={"/login"} element={<Login setReg={setRegistration}/>}/>
              <Route
                  path={"/account"}
                  element={isAuth === true ? <Account/> : <Login/>}
              />
              <Route path={"/randomizer"} element={<Randomizer/>}/>
              <Route path={"/about"} element={<About/>}/>
              <Route path={"*"} element={<NotFound/>}/>
          </Routes>
          <Footer/>
      </>
  )
}

export default App
