import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Products from "./products/products"
import Product from "./products/products"
import EditProduct from "./products/editProduct"
import AddProduct from "./products/addProduct"
import LogOut from "./Logout";

export default function HomePage() {
    const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/shoppingcard")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  });
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" render={() => <Products posts={posts} />} />
      <Route
        path="/shoppingcard/:id"
        render={(props) => <Product {...props} posts={posts} />}
      />
      <Route
        path="/update/:id"
        render={(props) => <EditProduct {...props} posts={posts} />}
      />
      <Route path="/add-product" component={AddProduct} />
      <Route path="/logout" component={LogOut} />
    </div>
  );
}