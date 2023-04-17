import Image from 'next/image';
import Link from 'next/link';

interface props {
    onModal: () => void;
    onAcoModal: () => void;
    onPortfolioModal: () => void;
    onDecommiModal: () => void;
}

const Project = ({ onModal, onDecommiModal, onAcoModal, onPortfolioModal }: props) => {
    return (
        <div className="project-container">
            <div className="project-wrapper container__default">
                <div className="project__title">
                    <div className="project__title-name">Project</div>
                </div>
                <div className="menu">
                    <div className="menu__item">
                        <button
                            className="project__menu__item-link"
                            onClick={onModal}
                        >GPT Translator</button>
                        <div className="menu__item-img">
                            <Image
                                className="menu__item-img-border"
                                src='/porfolio_img/gpttranslator.PNG'
                                alt="01"
                                width='800'
                                height='500'
                            />
                        </div>
                        <div className="marquee">
                            <div className="marquee__inner">
                                <span>GPT Translator - 004 - GPT Translator - 004 - GPT Translator - 004 - GPT Translator - 004</span>
                            </div>
                        </div>
                    </div>
                    <div className="menu__item">
                        <button
                            className="project__menu__item-link"
                            onClick={onAcoModal}
                        >A.C.O.</button>
                        <div className="menu__item-img">
                            <Image
                                className="menu__item-img-border"
                                src='/porfolio_img/aco05.PNG'
                                alt="00"
                                width='800'
                                height='500'
                            />
                        </div>
                        <div className="marquee">
                            <div className="marquee__inner">
                                <span>ACO - 003 - ACO - 003 - ACO - 003 - ACO - 003</span>
                            </div>
                        </div>
                    </div>
                    <div className="menu__item">
                        <button
                            className="project__menu__item-link"
                            onClick={onPortfolioModal}
                        >Portfolio Page</button>
                        <div className="menu__item-img">
                            <Image
                                className="menu__item-img-border"
                                src='/porfolio_img/portfolio.PNG'
                                alt="01"
                                width='800'
                                height='500'
                            />
                        </div>
                        <div className="marquee">
                            <div className="marquee__inner">
                                <span>Portfolio - 002 - Portfolio - 002 - Portfolio - 002 - Portfolio - 002</span>
                            </div>
                        </div>
                    </div>
                    <div className="menu__item">
                        <button
                            className="project__menu__item-link"
                            onClick={onDecommiModal}
                        >Decommi</button>
                        <div className="menu__item-img">
                            <Image
                                className="menu__item-img-border"
                                src='/porfolio_img/decommi1.PNG'
                                alt="01"
                                width='800'
                                height='500'
                            />
                        </div>
                        <div className="marquee">
                            <div className="marquee__inner">
                                <span>Decommi - 001 - Decommi - 001 - Decommi - 001 - Decommi - 001</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;