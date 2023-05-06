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
                    <span>GPT Translator / README.md</span>
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
                                    src='/porfolio_img/gpttranslator.PNG'
                                    alt="slide-01"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/gpttranslator02.PNG'
                                    alt="slide-02"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="portfolio__content">
                        <div className="portfolio__content-info">
                            <p className="portfolio__content-info-name">chatGPT Translator(제작완료, 배포예정)</p>
                            <p className="portfolio__content-info-days">2023.04 · 팀 프로젝트</p>
                            <span className="portfolio__content-info-tools">Vanilla Javascript &nbsp;|&nbsp; CSS &nbsp;|&nbsp; Django</span>
                            {/* <span className="portfolio__content-info-tools">AWS</span> */}
                            <p className="portfolio__content-info-days small">
                                <span>주요 기능:</span>
                                <br />
                                - chatGPT API를 사용한 번역 (10개 언어)
                                <br />
                                - History API를 사용한 이전 번역 저장
                                <br />
                                - 사용자가 on/off를 설정할 수 있는 다크 모드
                            </p>
                            <p className="portfolio__content-info-days small">
                                <span>담당 파트: </span>
                                프론트엔드 담당
                                <br />
                                - Javascript ES6+를 사용한 개발
                                <br />
                                - chatGPT API 번역 기능 관련 프론트 작업
                                <br />
                                - 다크 모드 개발
                                <br />
                                - Baffle을 사용한 애니메이션
                                <br />
                            </p>
                        </div>
                        <div className="portfolio__content-ex">
                            <p className="portfolio__content-ex-text">
                                <span>
                                OpenAI에서 공개된 GPT의 API를 사용해 만든 번역기 프로젝트입니다. chatGPT를 사용해 본 적 없는 사람들도 쉽게 이용할 수 있도록 작업했으며,
                                GPT의 번역 진행 상황을 볼 수 있게 만들어 사용자의 흥미를 유발할 수 있도록 제작했습니다.
                                </span>
                                <br />
                                <br />
                                <span>기본기를 다시 복습할 수 있었습니다.</span>
                                <br />
                                Javascript의 기본기를 다시 공부하면서 시작한 프로젝트이기에 놓치고 있던 부분들을 다시 한 번 되새길 수 있었습니다.
                                <br />
                                평소에 라이브러리로 사용했던 기능들을 Vanilla Javascript로 구현하면 어떤 원리로 작동하는지 체험해볼 수 있었습니다.
                                <br />
                                React나 Vue에서 주어지는 포맷, 컴포넌트 단위의 작성법, DOM의 변화를 직접 관리할 일이 거의 없는 것 등
                                생산성에 많은 도움을 받고 있다는 걸 느꼈고 원리를 아는게 중요하다는 사실을 배웠습니다.
                                <br />
                                <br />
                                <span>현업자와의 협업을 경험 할 수 있었습니다.</span>
                                <br />
                                비록 간단한 프로젝트지만 현업자와 협업을 해볼 수 있었다는 것만으로도 의미 있는 프로젝트였습니다.
                                내가 작성한 코드에 대해 피드백을 받거나, 조심해야 될 부분과 팁을 배우면서 작업을 했기에 실력 많이 향상됨을 느꼈습니다.
                                <br />
                            </p>
                        </div>
                    </div>
                    <div className="portfolio__bottom">
                        <div className="portfolio__bottom-links">
                            <div className='portfolio__bottom-solve'>
                                <b>문제해결 및 메모</b>
                            </div>
                            <a href="https://wonderfulwonder.tistory.com/81"
                                target="_blank" rel="noreferrer noopener">번역 언어선택 만들기 (커스텀 셀렉트)</a>
                            <br />
                        </div>
                        <div className="portfolio__bottom-links">
                            <div style={{ marginTop: 10 }}>
                                <b>프로젝트 Github</b>
                            </div>
                            <a href="https://github.com/k1k2brz/gpt_translator-1"
                                target="_blank" rel="noreferrer noopener">https://github.com/k1k2brz/gpt_translator-1</a>
                            <br />
                        </div>
                        <div className="portfolio__bottom-links" style={{marginTop: 10}}>
                            <b>팀원 Github</b>
                        </div>
                        <div className="portfolio__bottom-links">
                            <span>이태일 (Frontend): &nbsp;</span>
                            <a href="https://github.com/k1k2brz"
                                target="_blank" rel="noreferrer noopener">https://github.com/k1k2brz</a>
                        </div>
                        <div className="portfolio__bottom-links">
                            <span>홍승식 (Backend): &nbsp;</span>
                            <a href="https://github.com/hkp1030"
                                target="_blank" rel="noreferrer noopener">https://github.com/hkp1030</a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Translator;