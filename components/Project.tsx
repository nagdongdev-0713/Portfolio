import Image from 'next/image';

interface props {
    onBlogModal: () => void;
    onModal: () => void;
    onAcoModal: () => void;
    onPortfolioModal: () => void;
    onDecommiModal: () => void;
}

const Project = ({ onModal, onDecommiModal, onAcoModal, onPortfolioModal, onBlogModal }: props) => {
    return (
        <div className="project-container">
            <div className="project-wrapper container__default">
                <div className="project__title">
                    <div className="project__title-name">Project</div>
                </div>
                <div className="menu">
                    <div className="menu__item">

                        <div className="menu__item-img">
                            <Image
                                className="menu__item-img-border"
                                src='/porfolio_img/aco05.PNG'
                                alt="aco-05"
                                width='800'
                                height='500'
                            />
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
                                alt="portfolio-01"
                                width='800'
                                height='500'
                            />
                        </div>
                        <div className="marquee">
                            <div className="marquee__inner">
                                <span>Portfolio Page</span>
                            </div>
                        </div>
                    </div>
                    <div className="menu__item">
                        
                        <div className="menu__item-img">
                            <Image
                                className="menu__item-img-border"
                                src='/porfolio_img/decommi1.PNG'
                                alt="decommi-01"
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
                    {/* Spring 하던거로 변경할것 */}
                    <div className="menu__item">
                        <button
                            className="project__menu__item-link"
                            onClick={onModal}
                        >DotClient</button>
                        <div className="menu__item-img">
 
                        </div>
                        <div className="marquee">
                            <div className="marquee__inner">
                                <span>DotClient</span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="menu__item">
                        <button
                            className="project__menu__item-link"
                            onClick={onBlogModal}
                        >My Blog (제작중)</button>
                        <div className="menu__item-img">
                            <Image
                                className="menu__item-img-border"
                                src='/porfolio_img/wait.PNG'
                                alt="wait"
                                width='800'
                                height='500'
                            />
                        </div>
                        <div className="marquee">
                            <div className="marquee__inner">
                                <span>My Blog - 004 - My Blog - 004 - My Blog - 004 - My Blog - 004</span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Project;