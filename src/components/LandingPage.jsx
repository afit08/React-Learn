import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LandingPage() {
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}