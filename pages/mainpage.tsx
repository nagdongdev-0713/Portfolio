import { useInView } from 'react-intersection-observer';

import Mouse from '../components/Mouse'
import Navbar from '../components/Navbar'
import Canvas from '../components/Canvas'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Project from '../components/Project'
import React from 'react';

type MyComponentProps = {
    children: React.ReactNode;
}

const Mainpage: React.FC<MyComponentProps> = ({ children }) => {
    const { ref: myRef, inView: ElementVisible } = useInView(); // intersection Observe

    return (
        <>

            <Mouse />

            <div className="nav-sticky">
                <Navbar />
            </div>
            <Canvas />
            <section className="section-01">
                <AboutMe />
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