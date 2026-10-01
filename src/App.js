import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import HowITWorksPage from "./HowITWorksPage/HowITWorksPage";
import UseCasePage from "./UseCase/UseCasePage";
import FAQ from "./FAQ/FAQ";
import Product from "./Product/Product";
import BikeProduct from "./Product/BikeProduct";
import Login from "./Login/Login";

const App = () => {
  return (
    <div className="Main_conatiner">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<About />} />
        <Route path="/how-it-works" element={<HowITWorksPage />} />
        <Route path="/use-case" element={<UseCasePage />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Car_Product" element={<Product />} />
        <Route path="/Bike_Product" element={<BikeProduct />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
