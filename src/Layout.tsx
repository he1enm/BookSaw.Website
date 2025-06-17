import { Outlet } from "react-router-dom";
import TopNavbar from "./components/TopNavbar";
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <>
      <TopNavbar />
      <MainNavbar />
      <Outlet />
      <Footer />
    </>
  );
}
