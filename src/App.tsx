import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

import MainLayout from "./components/container/layout/MainLayout";

/* Lazy pages */
const Home = lazy(() => import("./pages/Home/Home"));
const CategoryPage = lazy(() => import("./pages/Category/Category"));
const ProductDetails = lazy(
  () => import("./pages/ProductDetails/ProductDetails")
);
const Cart = lazy(() => import("./pages/Cart/Cart"));
const WishList = lazy(() => import("./pages/WishList/WishList"));

// const Checkout = lazy(() => import("./pages/checkout/Checkout"));
// const SearchResults = lazy(() => import("./pages/search/SearchResults"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));

const Login = lazy(() => import("./pages/auth/Login/Login"));
const Signup = lazy(() => import("./pages/auth/SignUp/SignUp"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <Routes>
          {/* Auth pages */}
          <Route element={<MainLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          {/* Shop pages */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />

            {/* Category pages */}
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route
              path="/category/:category/:subCategory"
              element={<CategoryPage />}
            />

            {/* Product */}
            <Route path="/product/:id" element={<ProductDetails />} />

            {/* Cart & checkout */}
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/checkout" element={<Checkout />} /> */}

            <Route path="/wishlist" element={<WishList />} />

            {/* Search */}
            {/* <Route path="/search" element={<SearchResults />} /> */}

            {/* Info */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
