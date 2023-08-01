import React from "react";
import { Header } from "./components/Header";
import { Hero } from './components/Hero'
import { About } from "./components/About";

import './styles/app.css'

const App = () => {
    return (
        <>
            <Header />
            <Hero /> 
            <About />
        </>
    )
}

export { App }