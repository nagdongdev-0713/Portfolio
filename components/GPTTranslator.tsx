import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface props {
    onModal: () => void
}

const Translator = ({ onModal }: props) => {
    return (
        <section className="portfolio modal">
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
                            <p className="portfolio__content-info-name">chatGPT Translator(제작중)</p>
                            <p className="portfolio__content-info-days">2023.04 · 팀 프로젝트</p>
                            <span className="portfolio__content-info-tools">Vanilla Javascript &nbsp;|&nbsp; CSS &nbsp;|&nbsp; Django</span>
                            {/* <span className="portfolio__content-info-tools">AWS</span> */}
                        </div>
                        <div className="portfolio__content-ex">
                            <p className="portfolio__content-ex-text">
                                <span>
                                OpenAI에서 공개된 GPT의 API를 사용해 만든 번역기 프로젝트입니다. chatGPT를 사용해 본 적 없는 사람들도 쉽게 이용할 수 있도록 작업했으며,
                                GPT의 번역 진행 상황을 볼 수 있게 만들어 사용자의 흥미를 유발할 수 있도록 제작했습니다.
                                </span>
                                <br />
                                <br />
                                얼마 전에 GPT4를 사용해 보고 이제는 chatGPT가 프로그래밍에서 빠질 수 없는 모델이 되었다는 생각이 들었습니다.
                                그래서 간단하게 GPT를 사용한 작업을 체험해 보고 싶어서 시작하게 된 GPT 번역기 프로젝트입니다.
                                동시에, Javascript의 기본기를 다시 공부하면서 프레임워크나 라이브러리의 도움 없이 프론트엔드 파트를 한번 만들어 봐야겠다고 느꼈기에
                                Javascript를 더 이해하기 위한 프로젝트이기도 합니다.
                                <br />
                                <br />
                                연습을 위해 Vanilla JS와 순수 CSS로 작업을 하면서 평소에 프레임워크나 라이브러리의 도움을 많이 받고 있었다는 걸 알았습니다.
                                React나 Vue에서 주어지는 포맷이나 컴포넌트 단위의 작성법, Virtual DOM 덕분에 DOM의 변화를 직접 관리할 일이 거의 없는 것 등에서
                                생산성에 많은 도움을 받고 있다는 걸 느꼈습니다.
                                <br />
                                <br />
                                기능적으로는
                                평소 라이브러리로 사용하던 textarea의 크기 조절이나 Select태그의 option커스텀과 관련된 부분들을 직접 만들거나,
                                유저가 다크 모드의 on/off를 선택할 수 있도록 dataset을 사용한 다크 모드를 도입해 봤습니다.
                                <br />
                                그리고 History API를 사용해 뒤로 가기를 눌렀을 때 직전에 했던 번역으로 돌아갈 수 있도록 해주는 기능을 도입했습니다.
                                <br />
                                <br />
                                비록 간단한 프로젝트지만 현업자와 협업을 해볼 수 있었다는 것만으로도 의미 있는 프로젝트였습니다.
                                내가 작성한 코드에 대해 피드백을 받거나, 조심해야 될 부분과 팁을 알려주시면서 작업을 했기에 실력 많이 향상됨을 느꼈던 프로젝트였습니다.
                                <br />
                                <br />
                                * 현재 번역기는 완성이 되었지만, 추가적인 기능을 더 넣기 위해 의논 단계에 있습니다.
                                <br />
                                번역된 단어의 여러 가지 뜻을 추가적으로 검색할 수 있게 만드는 기능을 생각 중이며, 프로젝트 완성 시 배포 후 도메인을 사고 구글 애드를 넣을 예정입니다.
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
                            <a href="https://github.com/k1k2brz/gpt_translator"
                                target="_blank" rel="noreferrer noopener">https://github.com/k1k2brz/gpt_translator</a>
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
        </section>
    )
}

export default Translator;