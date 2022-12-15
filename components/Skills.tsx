import Image from "next/image";
import Figma from '../public/figma_vector.svg';
import CSS_img from '../public/CSS3_logo_and_wordmark.svg';
import HTML5_img from '../public/HTML5_logo_and_wordmark.svg';
import Next from '../public/Nextjs-logo.svg';
import Typescript from '../public/Typescript_logo_2020.svg';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Skills = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".skill-title1", {
            backgroundPositionX: "0%",
            stagger: 1,
            scrollTrigger: {
                trigger: ".skill-title1",
                scrub: 1,
                start: "top 60%",
                end: 'bottom 50%',
            }
        })
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".skill-title2", {
            backgroundPositionX: "0%",
            stagger: 1,
            scrollTrigger: {
                trigger: ".skill-title2",
                scrub: 1,
                start: "top 60%",
                end: 'bottom 50%',
            }
        })
    })

    return (
        <div className="skill-container">
            <div className="skill-wrapper container__default">
                <div className="skill-content">
                    <div>
                        <div className="skill-animation">
                            <p className="skill-title1 skill-title">Programming Skills</p>
                        </div>
                        <div className="skill-about">
                            <div className="skill-img-wrapper">
                                <div className="skill-partition">
                                    <div className="skill-mobile-partition">
                                        <div className="skill-img">
                                            <div className="skill-img-height">
                                                <Image
                                                    src={HTML5_img}
                                                    alt="HTML5"
                                                />
                                            </div>
                                            <p className="skill-skilltext">HTML</p>
                                        </div>
                                        <div className="skill-img">
                                            <div className="skill-img-height">
                                                <Image
                                                    src={CSS_img}
                                                    alt="CSS"
                                                    width='57'
                                                    height='57'
                                                />
                                            </div>
                                            <p className="skill-skilltext">CSS</p>
                                        </div>
                                        <div className="skill-img">
                                            <div className="skill-img-height">
                                                <Image
                                                    src='/JavaScript-logo.png'
                                                    alt="JS"
                                                    width='80'
                                                    height='80'
                                                />
                                            </div>
                                            <p className="skill-skilltext">Javascript</p>
                                        </div>
                                        <div className="skill-img">
                                            <div className="skill-img-height">
                                                <Image
                                                    src={Typescript}
                                                    alt="Ts"
                                                />
                                            </div>
                                            <p className="skill-skilltext">Typescript</p>
                                        </div>
                                    </div>
                                    <div className="skill-mobile-partition">
                                        <div className="skill-img">
                                            <div className="skill-img-height">
                                                <Image
                                                    src='/React.png'
                                                    alt="REACT"
                                                    width='80'
                                                    height='80'
                                                />
                                            </div>
                                            <p className="skill-skilltext">React</p>
                                        </div>
                                        <div className="skill-img">
                                            <div className="skill-img-height">
                                                <Image
                                                    src='/redux.png'
                                                    alt="redux"
                                                    width='80'
                                                    height='80'
                                                />
                                            </div>
                                            <p className="skill-skilltext">Redux</p>
                                        </div>
                                        <div className="skill-img">
                                            <div className="skill-img-height">
                                                <Image
                                                    src='/Vue.png'
                                                    alt="VUE.js"
                                                    width='80'
                                                    height='80'
                                                />
                                            </div>
                                            <p className="skill-skilltext">Vue</p>
                                        </div>
                                        <div className="skill-img">
                                            <div className="skill-img-height">
                                                <Image
                                                    src='/vuex.png'
                                                    alt="VUEX"
                                                    width='80'
                                                    height='80'
                                                />
                                            </div>
                                            <p className="skill-skilltext">Vuex</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-partition">
                                    <div className="skill-mobile-partition">
                                        <div className="skill-img">
                                            <div className="skill-img-height">
                                                <Image
                                                    src={Next}
                                                    alt="Next"
                                                />
                                            </div>
                                            <p className="skill-skilltext">Next.js</p>
                                        </div>
                                        <div className="skill-img">
                                            <div className="skill-img-height">
                                                <Image
                                                    src='/sass.png'
                                                    alt="SASS"
                                                    width='80'
                                                    height='80'
                                                />
                                            </div>
                                            <p className="skill-skilltext">SASS</p>
                                        </div>
                                        <div className="skill-img">
                                            <div className="skill-img-height">
                                                <Image
                                                    src='/bootstrap.png'
                                                    alt="Bootstrap"
                                                    width='80'
                                                    height='80'
                                                />
                                            </div>
                                            <p className="skill-skilltext">Bootstrap</p>
                                        </div>
                                        <div className="skill-img">
                                            <div className="skill-img-height">
                                                <Image
                                                    src='/tailwind.png'
                                                    alt="tailwindcss"
                                                    width='80'
                                                    height='80'
                                                />
                                            </div>
                                            <p className="skill-skilltext">TailwindCSS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="skill-animation">
                            <p className="skill-title2 skill-title">Communication Skills</p>
                        </div>
                        <div className="skill-about">
                            <div className="skill-img-wrapper">
                                <div className="skill-mobile-partition">
                                    <div className="skill-img">
                                        <div className="skill-img-height">
                                            <Image
                                                src='/Adobe_Illustrator_CC_icon.svg.png'
                                                alt="ai"
                                                width='80'
                                                height='80'
                                            />
                                        </div>
                                        <p className="skill-skilltext">Illustrator</p>
                                    </div>
                                    <div className="skill-img">
                                        <div className="skill-img-height">
                                            <Image
                                                src={Figma}
                                                alt="Figma"
                                                width='80'
                                                height='80'
                                            />
                                        </div>
                                        <p className="skill-skilltext">Figma</p>
                                    </div>
                                    <div className="skill-img">
                                        <div className="skill-img-height">
                                            <Image
                                                src='/Adobe_XD_CC_icon.svg.png'
                                                alt="xd"
                                                width='80'
                                                height='80'
                                            />
                                        </div>
                                        <p className="skill-skilltext">XD</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;