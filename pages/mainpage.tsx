import { useInView } from 'react-intersection-observer';

import Mouse from '../components/Mouse'
import Navbar from '../components/Navbar'
import Canvas from '../components/Canvas'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Project from '../components/Project'
import React, { useEffect, useRef, useState } from 'react';

type MyComponentProps = {
    children: React.ReactNode;
    prop: number;
}

const Mainpage: React.FC<MyComponentProps> = ({ children }) => {
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
            {/* <Mouse /> */}
            <div className="nav-sticky">
                <Navbar />
            </div>
            <section ref={canvasRef} className="section-00">
                <Canvas />
            </section>
            <section className="section-01">
                <AboutMe canvas={canvas} />
            </section>
            <section className="section-02">
                <Skills />
            </section>
            <section className="section-03">
                <Project />
            </section>
            <div>
                {children}
            </div>
        </>
    )
}

export default Mainpage;