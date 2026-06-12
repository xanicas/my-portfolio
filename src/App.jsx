import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import useScrollReveal from "./hooks/useScrollReveal";

export default function App() {
    useScrollReveal();

    return (
        <>
            <Navbar />
            <Hero />
            <Projects />
            <Skills />
            <About />
            <Contact />
        </>
    );
}
