import Image from 'next/image';
import { FC } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PortfolioNav from '../../../components/PortfolioNav';

SwiperCore.use([Navigation, Pagination]);

const Decommi = () => {
    return (
        <div className="portfolio container__default">
            <div className="fixed">
                <PortfolioNav />
            </div>
            <div className="portfolio__container">
                <div className="portfolio__wrapper">
                    <div className="portfolio__img">
                        <Swiper
                            className="portfolio__img-swiper"
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            // navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/portfolio.PNG'
                                    alt="slide-01"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/portfolio2.PNG'
                                    alt="slide-01"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/portfolio3.PNG'
                                    alt="slide-01"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/portfolio4.PNG'
                                    alt="slide-01"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="portfolio__content">
                        <div className="portfolio__content-info">
                            <p className="portfolio__content-info-name">Decommi - SNS 프라이버시 다이어리</p>
                            <p className="portfolio__content-info-days">2022.08~2022.10 · 4인 팀 프로젝트</p>
                            <div>
                                <span className="portfolio__content-info-tools">Vue &nbsp;|&nbsp; Vuex &nbsp;|&nbsp; Bootstrap5 &nbsp;|&nbsp; Sass</span>
                                <span className="portfolio__content-info-tools">&nbsp;|&nbsp; Java &nbsp;|&nbsp; SpringBoot &nbsp;|&nbsp; MariaDB &nbsp;|&nbsp; AWS lightsail</span>
                            </div>
                        </div>
                        <div className="portfolio__content-ex">
                            <p className="portfolio__content-ex-text">
                                <b>
                                    인터넷의 발달로 SNS에 올리는 개인의 사생활이 모두의 사생활처럼 공개되는 것에 피로감을 느끼는 사람들을 위한
                                    다이어리를 익명으로 작성하여 일상적인 소통을 할 수 있는 SNS입니다.
                                </b>
                                <br />
                                팀원들과의 의논 끝에 Vue로 작업 하였으며 상태와 변이를 중앙집중화하여 관리하여
                                보다 효율적으로 작업하기 위해 Vuex를 사용하였고, CSS문법의 가독성을 올리고 유지보수를 빠르게 하기 위해 SASS를 선택했습니다.
                            </p>
                            <p className="portfolio__content-ex-text">
                                처음으로 웹을 만들어보면서 HTML, CSS, Javascript, Vue 등 웹 개발의 기본 지식을 쌓을 수 있었고,
                                왜 Vue나 React같은 프레임워크를 사용하는지, 왜 Javascript가 중요한지 알 수 있었던 작업이었습니다.
                                또, 백엔드와 협업하는 과정에서 어떻게 교류를 해야하고 소통해야 하는지 시행착오를 겪으며 성장 할 수 있었습니다.
                            </p>
                            <p className="portfolio__content-ex-text">

                            </p>
                            <div>깃헙 주소 / 배포주소</div>
                            <div>팀원 파트랑 팀원 깃헙 주소</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Decommi;