import Image from 'next/image';
import { FC } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PortfolioNav from '../../../components/PortfolioNav';

SwiperCore.use([Navigation, Pagination]);


interface mpProps { }

const MyPortfolio: FC<mpProps> = ({ }) => {
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
                            <p className="portfolio__content-info-name">개인 포트폴리오 사이트</p>
                            <p className="portfolio__content-info-days">2022.11 · 개인 프로젝트</p>
                            <p className="portfolio__content-info-tools">React &nbsp;|&nbsp; Next.js &nbsp;|&nbsp; Typescript &nbsp;|&nbsp; Sass</p>
                        </div>
                        <div className="portfolio__content-ex">
                            <p className="portfolio__content-ex-text">
                                현재 보고 있는 사이트이며 포트폴리오 용도로 제작하였습니다.
                                <br />
                                개인 홈페이지다 보니 React를 이용한 다양한 인터랙션(Intersection Observer, gsap등을 사용)을 시도해 볼 수 있었던 작업이었고, Typescript도 학습해볼 수 있었습니다.
                            </p>
                            <p className="portfolio__content-ex-text">
                                불특정다수에게 많이 노출되어야 하는 포트폴리오 사이트의 특성상 서버 사이드 렌더링을 이용한 검색 엔진 최적화(SEO) 작업이 필요했는데,
                                Next.js를 사용하여 순수 React로는 작업하기 까다로운 서버 사이드 렌더링을 간단하게 도입해 볼 수 있었습니다.
                                또한, Nexs.js에 최적화된 플랫폼인 Vercel을 이용한 배포를 경험해볼 수 있었습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPortfolio;