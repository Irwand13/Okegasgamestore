import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { TopUp } from "./pages/TopUp";
import { Marketplace } from "./pages/Marketplace";
import { ProductDetail } from "./pages/ProductDetail";
import { Escrow } from "./pages/Escrow";
import { Dashboard } from "./pages/Dashboard";
import { SellerProfile } from "./pages/SellerProfile";
import { Login } from "./pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "topup", Component: TopUp },
      { path: "marketplace", Component: Marketplace },
      { path: "marketplace/:id", Component: ProductDetail },
      { path: "escrow/:id", Component: Escrow },
      { path: "dashboard", Component: Dashboard },
      { path: "seller/:id", Component: SellerProfile },
      { path: "login", Component: Login },
    ],
  },
]);
