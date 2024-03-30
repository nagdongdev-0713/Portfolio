import Image from 'next/image';
import { FC } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);


interface props {
    onModal: () => void
}

const MyPortfolio: FC<props> = ({onModal}) => {
    return (
        <div className="portfolio modal">
            <div className="fixed">
                <div className="portfolio__header">
                    <span>Portfolio Page / README.md</span>
                    <button>
                        <i className="bi bi-x portfolio__icon" onClick={onModal}></i>
                    </button>
                </div>
            </div>
            <div className="portfolio__container">
                <div className="portfolio__wrapper">
                    <div className="portfolio__img">
                        <Swiper
                            className="portfolio__img-swiper"
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                        >
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/portfolio.PNG'
                                    alt="portfolio-01"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/portfolio2.PNG'
                                    alt="portfolio-02"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/portfolio3.PNG'
                                    alt="portfolio-03"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/portfolio4.PNG'
                                    alt="portfolio-04"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="portfolio__content">
                        <div className="portfolio__content-info">
                            <p className="portfolio__content-info-name">개인 포트폴리오 사이트</p>
                            <p className="portfolio__content-info-days">2023.11 · 개인 프로젝트</p>
                            <p className="portfolio__content-info-tools">React &nbsp;|&nbsp; Next.js &nbsp;|&nbsp; Typescript &nbsp;|&nbsp; Sass</p>
                            <p className="portfolio__content-info-days small">
                                <span>주요 기능:</span> 백엔드 개발자 포트폴리오
                            </p>
                            <p className="portfolio__content-info-days small">
                                <span>담당 파트: </span>
                                <br />
                                - React(Hooks) 및 Javascript ES6+ 문법을 사용한 정적 웹 페이지 개발
                                <br />
                                - SCSS문법을 사용한 CSS관리
                                <br />
                                - 간단한 인터렉티브 웹 구현
                                <br />
                                - Next.js를 사용한 정적 웹 페이지의 서버사이드렌더링 경험
                                <br />
                                - 반응형 웹 페이지
                       
                            </p>
                        </div>
                        <div className="portfolio__content-ex">
                            <p className="portfolio__content-ex-text">
                                현재 접속 중인 사이트이며 포트폴리오 용도로 제작하였습니다. 처음으로 React로 작업하였습니다. 여러가지 Github 소스들을 참고하였습니다.
                            </p>
                            <p className="portfolio__content-ex-text">
                                반응형 웹페이지를 2번째로 만들어봅니다. 재밌긴 하지만 역시(..) 그래도 React, TS, NextJS등을 통합한 프로젝트를 만들어보며 
                                <br />
                                <br />
                                마지막으로 Next.js와 호환이 좋은 Vercel을 이용해 처음으로 정적 웹사이트의 배포를 경험해 볼 수 있었습니다.
                            </p>
                        </div>
                    </div>
                    <div className="portfolio__bottom">




                        <div className="portfolio__bottom-links">
                            <div style={{ marginTop: 25 }}>
                                <b>Install JavaScript Packages</b>
                            </div>
                            <p>- npm install</p>
                            <div style={{ marginTop: 10 }}>
                                <b>Run Frontend Server</b>
                            </div>
                            <p>- npm run dev</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPortfolio;