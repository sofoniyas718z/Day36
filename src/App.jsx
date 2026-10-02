import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import Menu from "./menu/Menu";
import DishDetail from "./menu/DishDetail";
import Cart from "./Cart";
import NotFound from "./NotFound";
import ErrorBoundary from "./ErrorBoundary";
import { useAuth } from "./auth/useAuth";

const Checkout = lazy(() => import("./Checkout"));

function ProtectedCheckout() {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to="/"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return (
    <Suspense
      fallback={
        <div className="state-box">
          <h2>Loading checkout...</h2>
        </div>
      }
    >
      <Checkout />
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/menu" element={<Menu />} />

          <Route
            path="/menu/:id"
            element={<DishDetail />}
          />

          <Route path="/cart" element={<Cart />} />

          <Route
            path="/checkout"
            element={<ProtectedCheckout />}
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;