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
                    <div>
                        <p>Programming</p>
                        <div>

                            <Image
                                src={HTML5_img}
                                alt="HTML5"
                                width='80'
                                height='80'
                            />
                            <Image
                                src={CSS_img}
                                alt="CSS"
                                width='57'
                                height='57'
                            />
                            <Image
                                src='/JavaScript-logo.png'
                                alt="JS"
                                width='80'
                                height='80'
                            />
                            <Image
                                src='/Vue.png'
                                alt="VUE.js"
                                width='80'
                                height='80'
                            />
                            <Image
                                src='/pyth.png'
                                alt="PYTHON"
                                width='80'
                                height='80'
                            />
                        </div>
                        <div>
                            <Image
                                src='/React.png'
                                alt="REACT"
                                width='80'
                                height='80'
                            />
                            <Image
                                src='/sass.png'
                                alt="REACT"
                                width='80'
                                height='80'
                            />
                            <Image
                                src={Typescript}
                                alt="REACT"
                                width='80'
                                height='80'
                            />
                            <Image
                                src={Next}
                                alt="REACT"
                                width='80'
                                height='80'
                            />
                            <Image
                                src='/bootstrap.png'
                                alt="REACT"
                                width='80'
                                height='80'
                            />
                        </div>
                    </div>
                    <div>
                        <p>Design</p>
                        <div className="skill-design-container">
                            <Image
                                src='/Adobe_Illustrator_CC_icon.svg.png'
                                alt="이미지를 불러올 수 없습니다."
                                width='80'
                                height='80'
                            />
                            <Image
                                src='/Adobe_Photoshop_CC_icon.svg.png'
                                alt="이미지를 불러올 수 없습니다."
                                width='80'
                                height='80'
                            />
                            <Image
                                src='/Adobe_XD_CC_icon.svg.png'
                                alt="이미지를 불러올 수 없습니다."
                                width='80'
                                height='80'
                            />
                            <Image
                                src='/IndESIGN-LOGO.png'
                                alt="이미지를 불러올 수 없습니다."
                                width='80'
                                height='80'
                            />
                        </div>
                        <div>

                            <Image
                                src='/Adobe_Animate_CC_icon_(2020).svg.png'
                                alt="이미지를 불러올 수 없습니다."
                                width='80'
                                height='80'
                            />
                            <Image
                                src='/Adobe_PremierePro_CC_icon.svg.png'
                                alt="이미지를 불러올 수 없습니다."
                                width='80'
                                height='80'
                            />
                            <Image
                                src='/Adobe_After_Effects_CC_icon.svg.png'
                                alt="이미지를 불러올 수 없습니다."
                                width='80'
                                height='80'
                            />
                            <Image
                                src={Figma}
                                alt="이미지를 불러올 수 없습니다."
                                width='80'
                                height='80'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;