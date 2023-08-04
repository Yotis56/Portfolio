import React from "react";
import { Header } from "./components/Header";
import { Hero } from './components/Hero'
import { About } from "./components/About";

import './styles/app.scss'
import { TechStack } from "./components/TechStack";

const App = () => {
    return (
        <>
            <Header />
            <Hero /> 
            <About />
            <TechStack />
        </>
    )
}

export { App }