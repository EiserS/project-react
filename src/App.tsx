import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProductPage from "./pages/ProductPage";
import ProductCatalog from "./pages/ProductCatalog";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="productCatalog" element={<ProductCatalog />} />
            <Route path="*" element={<NoPage />} />
            <Route path="productPage/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
