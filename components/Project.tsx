import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'

const Project = () => {
    return (
        <div className="project-container">
            <div className="project-wrapper container__default">
                <div className="project__title">
                    <div className="project__title-name">Project</div>
                </div>
                <div className="menu">
                    <div className="menu__item">
                        <Link href="/portfolio/myportfolio" className="project__menu__item-link">Portfolio page</Link>
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
                                <span>Portfolio - 001 - Portfolio - 001 - Portfolio - 001 - Portfolio - 001</span>
                            </div>
                        </div>
                    </div>
                    <div className="menu__item">
                        <Link href="/portfolio/decommi" className="project__menu__item-link">Decommi</Link>
                        <div className="menu__item-img">
                            <Image
                                className="menu__item-img-border"
                                src='/porfolio_img/decommi.PNG'
                                alt="02"
                                width='800'
                                height='500'
                            />
                        </div>
                        <div className="marquee">
                            <div className="marquee__inner">
                                <span>Decommi - 002 - Decommi - 002 - Decommi - 002 - Decommi - 002</span>
                            </div>
                        </div>
                    </div>
                    <div className="menu__item">
                        <Link href='/portfolio/practice' className="project__menu__item-link">Practice</Link>
                        <div className="menu__item-img">
                            <Image
                                className="menu__item-img-border"
                                src='/porfolio_img/interior.PNG'
                                alt="01"
                                width='800'
                                height='500'
                            />
                        </div>
                        <div className="marquee">
                            <div className="marquee__inner">
                                <span>Practice - 003 - Practice - 003 - Practice - 003 - Practice - 003</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;