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
                                현재 접속중인 사이트이며 포트폴리오 용도로 제작하였습니다. React로 작업한 첫 결과물이며, Next.js와
                                Typescript를 배워보기 위해 도입해봤습니다.
                            </p>
                            <p className="portfolio__content-ex-text">
                                React는 처음이지만 Vue를 해봤기에 기본 문법을 빠르게 배울 수 있었고, 어떤 부분이 다르고 어떤 부분이 비슷한지 비교하면서
                                Javascript기반 프레임워크를 사용하는 것에 대한 흥미와 자신감이 붙었습니다.
                                그리고 여러가지 인터랙션들을 시도해보면서 디자인으로만 보았던 애니메이션들을 각각 어떤 방법으로
                                만들 수 있는지 배워볼 수 있었고, 반응형 웹 페이지와 Typescript도 학습해볼 수 있었습니다.
                                <br />
                                <br />
                                또한, Next.js와 호환이 좋은 Vercel을 이용해 정적 웹사이트의 배포를 경험해볼 수 있었습니다.
                                전에 AWS(EC2 사용)를 사용한 배포를 배웠을 때 따라하기만 했는데도 상당히 복잡했던 기억이 있는데, Vercel이 Next.js에 특화된 플랫폼이라
                                세팅을 자동으로 해줘서 Next의 대단함을 느낄 수 있었습니다.
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
                            <a href="https://my-portfolio-k1k2brz.vercel.app"
                                target="_blank" rel="noreferrer noopener">https://my-portfolio-k1k2brz.vercel.app</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPortfolio;