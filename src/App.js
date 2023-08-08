import React from "react";
import { Header } from "./components/Header";
import { Hero } from './components/Hero'
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";

import './styles/app.scss'

const App = () => {
    return (
        <>
            <Header />
            <Hero /> 
            <About />
            <TechStack />
            <Projects />
        </>
    )
}

export { App }