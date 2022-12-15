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
                                개인 홈페이지다 보니 React를 이용한 다양한 인터랙션(Intersection Observer, GSAP, CSS를 사용)을 시도해 볼 수 있었던 작업이었고,
                                간단한 Typescript도 학습해볼 수 있었습니다.
                            </p>
                            <p className="portfolio__content-ex-text">
                                또한, 서버 사이드 렌더링을 이용한 검색 엔진 최적화(SEO) 작업을 체험해보고 싶어서 Next.js사용했으며
                                Next.js와 호환이 좋은 Vercel을 이용해 정적 웹사이트의 배포를 경험해볼 수 있었습니다.
                            </p>
                        </div>
                    </div>
                    <div className="portfolio__bottom">
                        <div className="portfolio__bottom-links">
                            <b>Github: &nbsp;</b>
                            <a href="https://github.com/k1k2brz/my-portfolio"
                                target="_blank" rel="noreferrer noopener">https://github.com/k1k2brz/my-portfolio</a>
                        </div>
                        <div className="portfolio__bottom-links">
                            <b>Link: &nbsp;</b>
                            <a href="https://my-portfolio-lkp8.vercel.app"
                                target="_blank" rel="noreferrer noopener">https://my-portfolio-lkp8.vercel.app</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPortfolio;