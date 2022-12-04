import Image from 'next/image';
import { FC } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PortfolioNav from '../../../components/PortfolioNav';

SwiperCore.use([Navigation, Pagination]);


interface Props { }

const aco: FC<Props> = ({ }) => {
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
                                    src='/porfolio_img/wait.PNG'
                                    alt="slide-01"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/wait.PNG'
                                    alt="slide-02"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="portfolio__content">
                        <div className="portfolio__content-info">
                            <p className="portfolio__content-info-name">ACO - Advance the Ecology</p>
                            <p className="portfolio__content-info-days">2022.11 · 팀 프로젝트</p>
                            <span className="portfolio__content-info-tools">React &nbsp;|&nbsp; Next.js &nbsp;|&nbsp; Typescript
                                &nbsp;|&nbsp; Redux &nbsp;|&nbsp; Redux-Saga &nbsp;|&nbsp; Tailwindcss &nbsp;|&nbsp; PostCSS</span>
                            <span className="portfolio__content-info-tools">Java &nbsp;|&nbsp; SpringBoot &nbsp;|&nbsp; MySQL &nbsp;|&nbsp; Docker </span>
                        </div>
                        <div className="portfolio__content-ex">
                            <p className="portfolio__content-ex-text">
                                환경보호를 위한 기록 커뮤니티라는 주제로 간단한 분리수거 방법부터 친환경Tip이나 제로웨이스트, 미니멀 라이프 등
                                나의 발자취를 기록하고 공유하는 공간입니다.
                                <br />
                                React를나 Typescript를 좀 더 깊게 학습 하는것과 Redux의 학습을 위한 프로젝트이며,
                                프론트엔드를 더 깊게 이해하기 위해 백엔드의 기본적인 부분 일부를 작성할 예정입니다.
                            </p>
                        </div>
                    </div>
                    <div className="portfolio__bottom">
                        <div className="portfolio__bottom-links">
                            <b>Github (Frontend): &nbsp;</b>
                            <a href="https://github.com/k1k2brz/aco-front"
                                target="_blank" rel="noreferrer noopener">https://github.com/k1k2brz/aco-front</a>
                            <br />
                            <b>Github (Backend): &nbsp;</b>
                            <a href="https://github.com/k1k2brz/aco-back"
                                target="_blank" rel="noreferrer noopener">https://github.com/k1k2brz/aco-back</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aco;