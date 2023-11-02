import React from "react";
// import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./index.css";
import Shopping from "./components/Shopping";
import SignIn from "./components/SignIn";
import ProductPage from "./components/ProductPage";
import { FetchProductContextProvider } from "./context/ProductContext";
const App = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <Router>
      <FetchProductContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/products/:slug" element={<ProductPage />} />
        </Routes>
      </FetchProductContextProvider>
    </Router>
  );
};

export default App;
