import React, { useReducer, useState } from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Category from "./pages/category/category";
import AllProductsDisplay from "./pages/get products/AllProductsDisplay";
// import Header from "./HeaderFooter/header";
import Footer from "./HeaderFooter/footer";
import "./HeaderFooter/headerfooter.css";
import HomePage from "./pages/HomePage/Home";
import CategoryDisplay from "./pages/category/categoryDisplay";
import ListingPage from "./pages/listing page/listing";
import BrandDisplay from "./pages/brands/brandsDisplay";
import BrandListingPage from "./pages/brands/brandslisting";
// import DisplayDetails from "./pages/details/detailPageDisplay";
import DetailsPage from "./pages/details/details";
import Cart from "./cart/cart";
import PlaceOrder from "./orders/placeOrder";
import ViewOrders from "./orders/viewOrder";
import Login from "./login/login";
import Register from "./login/register";
import BestSellerPage from "./pages/bestsellers";
import DealsPage from "./pages/dealspage";
import BrandsListingDisplay from "./pages/brands/brandsListingDisplay";
import DetailsPageFunc from "./pages/details/detailFunc";
import Carousel from "./Carousel/flashSale";

const AppRouter = () => {
  const [cart, setCart] = useState([]);
  sessionStorage.setItem("cart", cart.length);
  console.log("this is the main cart", cart);
  const cartIds = cart.map((item) => {
    return item.id;
  });
  console.log(cartIds, "these are the ids of cart item");

  const [ignored, forcedUpdate] = useReducer((x) => x + 1, 0);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    if (cartIds.indexOf(product.id) > -1) {
      let newCart = cart.splice(cartIds.indexOf(product.id), 1);
      setCart(cart);
      console.log("item clicked", cartIds.indexOf(product.id));
      forcedUpdate();
    }
  };

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/Category" component={CategoryDisplay} />
          <Route path="/AllProducts" component={AllProductsDisplay} />
          <Route path="/Brands">
            <BrandDisplay />
          </Route>
          <Route path="/listing/:categoryId" component={ListingPage} />
          <Route path="/brand/:brandId" component={BrandListingPage} />
          <Route
            path="/details"
            render={(porps) => (
              <DetailsPage
                {...porps}
                cart={cart}
                setCart={setCart}
                handleAddToCart={handleAddToCart}
              />
            )}
          />
          <Route
            path="/cart"
            render={() => <Cart cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/placeOrder"
            render={(porps) => <PlaceOrder cart={cart} {...porps} />}
          />
          <Route path="/viewOrders" component={ViewOrders} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/bestsellers" component={BestSellerPage} />
          <Route path="/deals" component={DealsPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
