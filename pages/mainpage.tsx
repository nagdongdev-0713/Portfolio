import { useInView } from 'react-intersection-observer';

import Canvas from '../components/Canvas'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Project from '../components/Project'
import React, { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// type MyComponentProps = {
//     children: React.ReactNode;
//     // prop: number;
// }

// const Mainpage: React.FC<MyComponentProps> = ({ children }) => {
const Mainpage = () => {
    // const { ref: myRef, inView: ElementVisible } = useInView(); // intersection Observe
    const [canvas, setCanvas] = useState<number>();
    const canvasRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // console.log(entry)
            setCanvas(entry.boundingClientRect.height)
        });
        observer.observe(canvasRef.current as HTMLDivElement);
    }, [])

    return (
        <>
            <div className="nav-sticky">
                <Navbar />
            </div>
            <section ref={canvasRef} className="section-00">
                <Canvas />
            </section>
            <section id="about">
                <AboutMe canvas={canvas} />
            </section>
            <section id="skill">
                <Skills />
            </section>
            <section id="project">
                <Project />
            </section>
            <Footer />

            {/* <div>
                {children}
            </div> */}
        </>
    )
}

export default Mainpage;