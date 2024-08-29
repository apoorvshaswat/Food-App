import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import Thanks from "./components/Thanks";
import ReadMore from "./components/ReadMore";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const products = [
    { name: "Pizza", price: 150, quantity: 0, imgSrc: "/img/pizza.png" },
    { name: "Burger", price: 100, quantity: 0, imgSrc: "/img/burger.png" },
  ];

  const [productList, setProductList] = useState(products);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    let newTotalQuantity = totalQuantity;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    newTotalQuantity++;
    setTotalQuantity(newTotalQuantity);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    let newTotalQuantity = totalQuantity;
    if (newTotalQuantity > 0) {
      newTotalQuantity--;
    }
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
    setTotalQuantity(newTotalQuantity);
  };

  const reset = () => {
    let newProductList = [...productList];
    newProductList.map((products) => (products.quantity = 0));
    setProductList(newProductList);
    setTotalAmount(0);
    setTotalQuantity(0);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <ProductList
                productList={productList}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
              />
              <Cart
                totalAmount={totalAmount}
                reset={reset}
                totalQuantity={totalQuantity}
              />
              <About />
            </>
          }
        ></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/thanks" element={<Thanks />}></Route>
        <Route path="/readmore" element={<ReadMore />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
