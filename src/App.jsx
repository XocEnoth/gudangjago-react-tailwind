import React from "react";
import Home from "./frame/home";
import Navbar from "./frame/navbar";
import About from "./frame/about";
import Services from "./frame/services";
import Product from "./frame/product";
import Client from "./frame/client";
import Team from "./frame/team";
import Contact from "./frame/contact";
import Footer from "./frame/footer";
import Up from "./component/up";

function App() {
    return (
        <>
            <Home />
            <Navbar />
            <About />
            <Services />
            <Product />
            <Client />
            <Team />
            <Contact />
            <Footer />
            <Up />
        </>
    );
}

export default App;
