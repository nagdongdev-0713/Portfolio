import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from 'next/image';

const Project = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <div className="project-container">
            <div className="project-wrapper container__default">
                <div className="project-slide">
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
                </div>
                <div className="project-slide">
                    <div className="slide-number">
                        <p><span>004</span></p>
                    </div>
                    <div className="slide-text">
                        <h4><span>Project4</span></h4>
                    </div>
                    <div className="slide-img">
                        <Image
                            src='/video/scene00178.jpg'
                            alt="slide-01"
                            width='800'
                            height='500'
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Project;