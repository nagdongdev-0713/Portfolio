import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PortfolioNav from '../../../components/PortfolioNav';

const Practice = () => {
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
                                    src='/porfolio_img/practice01.PNG'
                                    alt="slide-01"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/practice02.PNG'
                                    alt="slide-02"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/interior.PNG'
                                    alt="slide-03"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="portfolio__content">
                        <div className="portfolio__content-info">
                            <p className="portfolio__content-info-name">연습용 프로젝트 모음</p>
                            <p className="portfolio__content-info-days">2022.08 ~ 2022.11 · 개인 프로젝트</p>
                            <p className="portfolio__content-info-tools">프로젝트에 들어가기 전, 공부를 위해 만들었던 작업물 모음입니다.</p>
                        </div>
                        <div className="portfolio__content-ex">
                            <p className="portfolio__content-ex-text">
                                <div className="portfolio__bottom-links">
                                    React-Nodebird :
                                    <a href="https://github.com/k1k2brz/React-Nodebird"
                                        target="_blank" rel="noreferrer noopener">&nbsp;바로가기</a>
                                    <p className='portfolio__content-skill'>
                                        React &nbsp;|&nbsp; Typescript &nbsp;|&nbsp; Redux &nbsp;|&nbsp; Redux-Saga &nbsp;|&nbsp; Styled-Component
                                        &nbsp;|&nbsp; Next.js &nbsp;|&nbsp; Node.js &nbsp;|&nbsp; Sequelize
                                    </p>
                                </div>
                                <p className="portfolio__content-ex-write">
                                    React로 프로젝트를 만들기 전에 Redux와 백엔드에 대한 이해가 필요해서 시작한 클론코딩입니다. Redux와 Redux-Saga를 사용해
                                    상태관리를 해보고, Sequelize라는 ORM을 사용해 객체와 관계형 데이터베이스의 데이터를 자동으로 연결해주는 방법을 배웠습니다.
                                    또, Node.js가 SpringBoot와 문법이 많이 달라서 어려웠지만 공통적인 부분들을 찾아가며 백엔드-프론트간에 데이터를 주고받는 방법을
                                    좀 더 깊게 이해할 수 있었고, Next.js로 동적 사이트의 서버사이드렌더링까지 해볼 수 있었습니다. 마지막으로 Typescript공부를 위해
                                    순수 React로 된 클론코딩 사이트를 타입스크립트로 작성하였습니다.
                                </p>
                                <br />
                            </p>
                            <p className="portfolio__content-ex-text">
                                <div className="portfolio__bottom-links">
                                    React Slack 클론코딩 :
                                    <a href="https://github.com/k1k2brz/Slack-Clone"
                                        target="_blank" rel="noreferrer noopener">&nbsp;바로가기</a>
                                    <p className='portfolio__content-skill'>
                                        React &nbsp;|&nbsp; Typescript &nbsp;|&nbsp; SWR &nbsp;|&nbsp; Emotion
                                    </p>
                                </div>
                                <p className="portfolio__content-ex-write">
                                    React와 Typescript를 공부하기위해 Slack의 프론트엔드 파트를 클론코딩 했습니다. 작업을 하면서 React가
                                    근본적으로는 Vue와 비슷한 부분이 많다는걸 느껴 React에 대한 자신감을 얻을 수 있었습니다.
                                    또한, Websocket을 이용한 채팅을 구현해본 경험과 Emotion을 사용해본 경험은 앞으로 많은 도움이 될 것 같습니다.
                                </p>
                                <br />
                            </p>
                            <p className="portfolio__content-ex-text">
                                <div className="portfolio__bottom-links">
                                    인테리어 웹 사이트 :
                                    <a href="https://github.com/k1k2brz/interior"
                                        target="_blank" rel="noreferrer noopener">&nbsp;바로가기</a>
                                    <p className='portfolio__content-skill'>
                                        CSS
                                    </p>
                                </div>
                                <p className="portfolio__content-ex-write">
                                    CSS학습을 위해 오직 CSS만 사용해서 인테리어 관련 웹 사이트라는 컨셉으로 퍼블리싱을 해봤습니다.
                                    CSS를 배우고나서 레이아웃을 제대로 맞추지도 못하는 상태로 다른 공부를 하다가 다시 한 번 기초부터 바로잡기 위해
                                    Figma로 해놓은 디자인과 같은 위치에 맞출 수 있도록 노력했습니다.
                                </p>
                                <br />
                            </p>
                        </div>
                    </div>
                    <div className="portfolio__bottom">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Practice;