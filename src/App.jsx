//Default imports
import {Route, Routes} from "react-router-dom";

//CSS imports
import './App.css'

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
    const isLoggedin = true;
    //some state
    //useEffect
    //(async) functions

  return (
    <>
        {/*navigatiecompontent*/}
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/catalog"} element={<Catalog/>}/>
            <Route path={"/product/:id"} element={<Product/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/account"} element={isLoggedin === true ? <Account/> : <Login/>}/>
            <Route path={"/randomizer"} element={<Randomizer/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"*"} element={<NotFound/>}/>
        </Routes>
        {/*footercomponent*/}
    </>
  )
}

export default App
