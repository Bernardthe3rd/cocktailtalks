//Default imports
import {Link, NavLink, Route, Routes} from "react-router-dom";

//Styling imports
import './App.css'
import logo from "/src/assets/Logo.png";

//Components imports

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
    const isLoggedIn = true; //later ombouwen
    //some state
    //useEffect
    //(async) functions

  return (
      <>
          <header>
              <nav className="container">
                  <ul className="navbar-container">
                      <li><NavLink to="/catalog" className="button-link-nav">catalog</NavLink></li>
                      <li><NavLink to="/about" className="button-link-nav">about</NavLink></li>
                      <li>
                            <span className="img-wrapper-logo">
                                <img src={logo} alt="logo cocktailtalks"/>
                            </span>
                      </li>
                      <li><NavLink to="/randomizer" className="button-link-nav">randomizer</NavLink></li>
                      <li><NavLink to="/login" className="button-link-nav">account</NavLink></li>
                  </ul>
              </nav>
          </header>
          <Routes>
              <Route path={"/"} element={<Home/>}/>
              <Route path={"/catalog"} element={<Catalog/>}/>
              <Route path={"/product"} element={<Product/>}/>
              {/*later hierboven /:id achter toevoegen na implementatie API*/}
              <Route path={"/login"} element={<Login/>}/>
              <Route path={"/account"} element={isLoggedIn === true ? <Account/> : <Login/>}/>
              <Route path={"/randomizer"} element={<Randomizer/>}/>
              <Route path={"/about"} element={<About/>}/>
              <Route path={"*"} element={<NotFound/>}/>
          </Routes>
          <footer className="container">
              <div className="footer-container">
                <p> Made by Berny</p>
                <Link to="/about" className="link-main">contact us</Link>
              </div>
          </footer>
      </>
  )
}

export default App
