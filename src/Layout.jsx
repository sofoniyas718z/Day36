import {
  Link,
  Outlet
} from "react-router-dom";

import CartBadge from "./CartBadge";
import { useAuth } from "./auth/useAuth";

function Layout() {
  const {
    user,
    login,
    logout
  } = useAuth();

  return (
    <div className="app">
      <header className="header">
        <Link
          to="/"
          className="logo"
        >
          Addis Eats
        </Link>

        <nav>
          <Link to="/">
            Home
          </Link>

          <Link to="/menu">
            Menu
          </Link>

          <Link to="/cart">
            Cart
          </Link>

          <Link to="/checkout">
            Checkout
          </Link>
        </nav>

        <div className="header-actions">
          <CartBadge />

          {user ? (
            <>
              <span>
                Hi, {user.name}
              </span>

              <button onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() =>
                login("Sofoniyas")
              }
            >
              Sign in
            </button>
          )}
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer>
        <p>
          © 2026 Addis Eats
        </p>
      </footer>
    </div>
  );
}

export default Layout;