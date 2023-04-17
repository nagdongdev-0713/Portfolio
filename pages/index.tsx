import { useCallback, useEffect, useRef, useState } from 'react';
import AboutMe from '../components/AboutMe';
import Canvas from '../components/Canvas';
import Footer from '../components/Footer'
import Translator from '../components/GPTTranslator'
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import Skills from '../components/Skills';
import Decommi from '../components/decommi';
import ProjectAco from '../components/ProjectAco';
import MyPortfolio from '../components/MyPortfolio';

export default function Home() {
    const [canvas, setCanvas] = useState<number>();
    const [trslModal, setTrslModal] = useState(false);
    const [acoModal, setAcoModal] = useState(false);
    const [portfolioModal, setPortfolioModal] = useState(false);
    const [decommiModal, setDecommiModal] = useState(false);

    const canvasRef = useRef<HTMLDivElement | null>(null);

    let currentScroll = 0;
    const lockScroll = useCallback(() => {
        currentScroll = window.scrollY;
        document.body.style.overflowY = 'scroll';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `${currentScroll}px`;
    }, [currentScroll]);
    
    const openScroll = useCallback(() => {
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('position');
        document.body.style.removeProperty('width');
        document.body.style.removeProperty('top');
        window.scrollTo(0, currentScroll)
    }, [currentScroll]);
    

    const onTrslModalToggle = useCallback(() => {
        setTrslModal((prev) => !prev)
        if (!trslModal) {
          lockScroll()
        } else {
          openScroll()
        }
    }, [trslModal, lockScroll, openScroll])

    const onAcoModalToggle = useCallback(() => {
        setAcoModal((prev) => !prev)
        if (!acoModal) {
          lockScroll()
        } else {
          openScroll()
        }
    }, [acoModal, lockScroll, openScroll])

    const onPortfolioModalToggle = useCallback(() => {
        setPortfolioModal((prev) => !prev)
        if (!portfolioModal) {
          lockScroll()
        } else {
          openScroll()
        }
    }, [portfolioModal, lockScroll, openScroll])

    const onDecommiModalToggle = useCallback(() => {
        setDecommiModal((prev) => !prev)
        if (!decommiModal) {
          lockScroll()
        } else {
          openScroll()
        }
    }, [decommiModal, lockScroll, openScroll])

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          setCanvas(entry.boundingClientRect.height)
      });
      observer.observe(canvasRef.current as HTMLDivElement);
  }, [])

  return (
    <>
      <div className={`${trslModal? 'modal-backdrop show' : 'none'}`}>
        <Translator onModal={onTrslModalToggle} />
      </div>
      <div className={`${acoModal? 'modal-backdrop show' : 'none'}`}>
        <ProjectAco onModal={onAcoModalToggle} />
      </div>
      <div className={`${portfolioModal? 'modal-backdrop show' : 'none'}`}>
        <MyPortfolio onModal={onPortfolioModalToggle} />
      </div>
      <div className={`${decommiModal? 'modal-backdrop show' : 'none'}`}>
        <Decommi onModal={onDecommiModalToggle} />
      </div>
      <main className='main'>
          <nav className="nav-sticky">
              <Navbar />
          </nav>
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
              <Project 
                onModal={onTrslModalToggle} 
                onAcoModal={onAcoModalToggle} 
                onPortfolioModal={onPortfolioModalToggle}  
                onDecommiModal={onDecommiModalToggle} 
              />
          </section>
          <Footer />
      </main>
    </>
  )
}