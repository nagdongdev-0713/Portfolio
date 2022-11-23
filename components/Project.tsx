import Image from 'next/image';
import Link from 'next/link';


const Project = () => {
    return (
        <div className="project-container">
            <div className="project-wrapper container__default">
                <div className="project__title">Project</div>
                <div className="menu">
                    <div className="menu__item">
                        <Link href="/" className="project__menu__item-link">My Portfolio</Link>
                        <div className="menu__item-img">
                            <Image
                                src='/video/scene00122.jpg'
                                alt="slide-01"
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
                        <Link href="/" className="project__menu__item-link">Decommi</Link>
                        <div className="menu__item-img">
                            <Image
                                src='/video/scene00122.jpg'
                                alt="slide-01"
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
                        <Link href="/" className="project__menu__item-link">Practice</Link>
                        <div className="menu__item-img">
                            <Image
                                src='/video/scene00122.jpg'
                                alt="slide-01"
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
                {/* <div className="project-slide">
                    <div className="slide-number">
                        <p><span>001</span></p>
                    </div>
                    <div className="slide-text">
                        <h4><span>Project1</span></h4>
                    </div>
                    <div className="slide-img">
                        <Image
                            src='/video/scene00122.jpg'
                            alt="slide-01"
                            width='800'
                            height='500'
                        />
                    </div>
                </div>
                <div className="project-slide">
                    <div className="slide-number">
                        <p><span>002</span></p>
                    </div>
                    <div className="slide-text">
                        <h4><span>Project2</span>
                        </h4>
                    </div>
                    <div className="slide-img">
                        <Image
                            src='/video/scene00142.jpg'
                            alt="slide-01"
                            width='800'
                            height='500'
                        />
                    </div>
                </div>
                <div className="project-slide">
                    <div className="slide-number">
                        <p><span>003</span></p>
                    </div>
                    <div className="slide-text">
                        <h4><span>Project3</span></h4>
                    </div>
                    <div className="slide-img">
                        <Image
                            src='/video/scene00162.jpg'
                            alt="slide-01"
                            width='800'
                            height='500'
                        />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Project;