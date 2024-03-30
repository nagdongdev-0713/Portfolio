import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


interface props {
    trslModal: boolean;
    onModal: () => void
}

const Translator = ({ onModal, trslModal }: props) => {

    return (
        <article className="portfolio modal">
            <div className="fixed">
                <div className="portfolio__header">
                    <span>Others / README.md</span>
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

                            </SwiperSlide>
                            <SwiperSlide>

                            </SwiperSlide>
                            <SwiperSlide>

                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="portfolio__content">
                        <div className="portfolio__content-info">
                            <p className="portfolio__content-info-name">DotClient</p>
                            <p className="portfolio__content-info-days">2023.04 · unknown(Discord Botclient Revival)</p>
                            <span className="portfolio__content-info-tools">언어 사용 확실치 않음</span>
                            <p className="portfolio__content-info-days small">
                                <span>주요 기능:</span>
                                <br />
                                - 봇 토큰으로 일반 디스코드를 하는 것처럼 로그인 할 수 있습니다.
                            </p>
                        </div>
                        <div className="portfolio__content-ex">
                            <p className="portfolio__content-ex-text">
                                <span>
                                [경고!] 현재 이 프로젝트(botclient)가 공식 입장 없이 중단된 이유를 파악 중에 있으며, 소스 코드 분석 단계에 있습니다. 그러므로 정보가 충분치 않을 수 있으니 양해 부탁드립니다.
                                </span>
                                <br />
                                <br />
                                <span>(🔴:접속 불가ㅣ🟡:불안정ㅣ🟢:접속 가능ㅣ🛞:확인되지 않음)</span>
                                <br />
                                <br />
                                    현재 BOTCLIENT 서버 [🔴]
<br />
                                    현재 DISCORD 서버 [🟢]
<br />
                                    현재 DISCORD.DEV 서버 [🟢]
<br />
                                    접속 중인 사이트의 서버 [🟢]
                                <br />
                            </p>
                        </div>
                    </div>
                    <div className="portfolio__bottom">
                        {/* <div className="portfolio__bottom-links">
                            <div className='portfolio__bottom-solve'>
                                <b>문제해결 및 메모</b>
                            </div>
                            <a href="https://wonderfulwonder.tistory.com/81"
                                target="_blank" rel="noreferrer noopener">준비중</a>
                            <br />
                        </div> */}
                        <div className="portfolio__bottom-links">
                            <div style={{ marginTop: 10 }}>
                                <b>프로젝트 Github</b>
                            </div>
                            <span>없음</span>
                            <br />
                            <div className="portfolio__bottom-links">
                                <div style={{ marginTop: 25 }}>
                                    <b>추가 문의/제보/건의</b>
                                </div>
                                <p>- youbot.maguni@gmail.com 또는 lyw8459@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </article>
    )
}

export default Translator;