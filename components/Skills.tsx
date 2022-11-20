import Image from "next/image";
import Figma from '../public/figma_vector.svg';
import CSS_img from '../public/CSS3_logo_and_wordmark.svg';
import HTML5_img from '../public/HTML5_logo_and_wordmark.svg';
import Next from '../public/Nextjs-logo.svg';
import Typescript from '../public/Typescript_logo_2020.svg';

const Skills = () => {
    return (
        <div className="skill-container">
            <div className="skill-wrapper container__default">
                <div>
                    <p className="title-padding">SKILL</p>
                </div>
                <div className="skill-content">
                    <div className="skill-about">
                        <p className="skill-title">Programming</p>
                        <div className="skill-img-wrapper">
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
                                <Image
                                    src='/JavaScript-logo.png'
                                    alt="JS"
                                    width='80'
                                    height='80'
                                />
                                <p className="skill-skilltext">Javascript</p>
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
                                        src='/pyth.png'
                                        alt="PYTHON"
                                        width='80'
                                        height='80'
                                    />
                                </div>
                                <p className="skill-skilltext">Python</p>
                            </div>
                        </div>
                        <div className="skill-img-wrapper">
                            <div className="skill-img">
                                <div className="skill-img-height">
                                    <Image
                                        src={Typescript}
                                        alt="Ts"
                                    />
                                </div>
                                <p className="skill-skilltext">Typescript</p>
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
                                        src={Next}
                                        alt="Next"
                                    />
                                </div>
                                <p className="skill-skilltext">Next.js</p>
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
                                        src='/styled.png'
                                        alt="StyledComponent"
                                        width='80'
                                        height='80'
                                    />
                                </div>
                                <p className="skill-skilltext">Styled-Component</p>
                            </div>
                        </div>
                    </div>
                    <div className="skill-about">
                        <p className="skill-title">Design</p>
                        <div className="skill-img-wrapper">
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
                                        src='/Adobe_Photoshop_CC_icon.svg.png'
                                        alt="ps"
                                        width='80'
                                        height='80'
                                    />
                                </div>
                                <p className="skill-skilltext">Photoshop</p>
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
                            <div className="skill-img">
                                <div className="skill-img-height">
                                    <Image
                                        src='/IndESIGN-LOGO.png'
                                        alt="id"
                                        width='80'
                                        height='80'
                                    />
                                </div>
                                <p className="skill-skilltext">InDesign</p>
                            </div>
                        </div>
                        <div className="skill-img-wrapper">
                            <div className="skill-img">
                                <div className="skill-img-height">
                                    <Image
                                        src='/Adobe_PremierePro_CC_icon.svg.png'
                                        alt="pr"
                                        width='80'
                                        height='80'
                                    />
                                </div>
                                <p className="skill-skilltext">Premiere Pro</p>
                            </div>
                            <div className="skill-img">
                                <div className="skill-img-height">
                                    <Image
                                        src='/Adobe_Animate_CC_icon_(2020).svg.png'
                                        alt="an"
                                        width='80'
                                        height='80'
                                    />
                                </div>
                                <p className="skill-skilltext">Animate</p>
                            </div>
                            <div className="skill-img">
                                <div className="skill-img-height">
                                    <Image
                                        src='/Adobe_After_Effects_CC_icon.svg.png'
                                        alt="ae"
                                        width='80'
                                        height='80'
                                    />
                                </div>
                                <p className="skill-skilltext">After Effect</p>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;