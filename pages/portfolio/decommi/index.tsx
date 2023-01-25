import Image from 'next/image';
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
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                        >
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/decommi1.PNG'
                                    alt="slide-01"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/decommi2.PNG'
                                    alt="slide-02"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/decommi3.PNG'
                                    alt="slide-03"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/decommi3-2.PNG'
                                    alt="slide-03-2"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/decommi4.PNG'
                                    alt="slide-04"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/decommi5.PNG'
                                    alt="slide-05"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/decommi6.PNG'
                                    alt="slide-06"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/decommi7.PNG'
                                    alt="slide-07"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/decommi8.PNG'
                                    alt="slide-08"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/decommi9.PNG'
                                    alt="slide-09"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/decommi10.PNG'
                                    alt="slide-10"
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
                                <span className="portfolio__content-info-tools">&nbsp;|&nbsp; Java &nbsp;|&nbsp; SpringBoot &nbsp;|&nbsp; MariaDB </span>
                            </div>
                        </div>
                        <div className="portfolio__content-ex">
                            <p className="portfolio__content-ex-text">
                                <span>
                                    인터넷의 발달로 SNS에 올리는 개인의 사생활이 모두의 사생활처럼 공개되는 것에 피로감을 느끼는 사람들을 위한
                                    다이어리를 익명으로 작성하여 일상적인 소통을 할 수 있는 SNS입니다.
                                </span>
                                <br />
                                <br />
                                팀원들과의 의논 끝에 문법이 통일되어 있는 Vue가 작업에 수월할 것 같아 Vue를 선택하였으며 상태와 변이를 중앙 집중화하여 관리해서
                                보다 효율적으로 작업하기 위해 Vuex를 사용하였습니다. 또, 처음에 Figma로 작성된 디자인 코드를 옮기는 작업이 많았기 때문에
                                CSS문법의 가독성을 올리고 유지보수를 빠르게 해줄 라이브러리가 필요해 SASS를 사용했지만,
                                몇몇 modal이나 일부 input은 Bootstrap으로 만들면서 진행했었습니다.
                                그러다 중간에 이왕 이렇게 된 거 Bootstrap의 사용법도 익혀보자는 마인드로 일부 컴포넌트를 Bootstrap의 인라인 스타일 방식으로 만들었습니다.
                            </p>
                            <p className="portfolio__content-ex-text">
                                처음으로 웹을 만들어보면서 HTML, CSS, Javascript 등 프론트엔드의 기본이 되는 언어와 웹 개발의 기본 지식을 쌓을 수 있었습니다.
                                특히, Vue를 사용하는 과정에서 Javascript 지식의 부재로 많은 어려움을 겪었으며 쉽게 갈 수 있는 길을 어렵게 가기도 했는데,
                                이때 Javascript의 중요성을 많이 느꼈습니다.
                                Vue를 하면서 CkEditor(라이브러리) 파트를 제외한 모든 부분을 전부 Composition API로 작성했는데 그 이유는 앞으로 나올 Vue의 레퍼런스나 라이브러리가
                                Composition API의 문법으로 작성 될거라 생각해서입니다. 하지만 백엔드와 협의하에 사용한 CKEditor를 Composition API로
                                변환하는데 실패해 Options API와 섞여버린 부분이 아쉽습니다.
                                <br />
                                <br />
                                그리고 백엔드와 협업하는 과정에서 어떻게 교류를 해야 하고 소통해야 하는지 시행착오를 겪으며 알 수 있었고,
                                처음에 API를 어떻게 주고받는지 모르는 채로 UI를 구현했던 제가 프론트파트를 끝까지 만들어냈다는 점에서 많은 성장을 이룰 수 있었던
                                프로젝트입니다.
                                <br />
                                <br />
                                또한, 프론트엔드와 백엔드가 서로의 작업을 잘 몰라서 생기는 해프닝이 많아 작업 후반에는 디스코드로 서로의 코드를 리뷰해 주고 서로 편하게 작업할 수 있도록
                                요구사항을 말하며 협업했던 경험은 앞으로 프론트개발자도 웹에서 요구하는 전체적인 개발 지식이 필요한 이유를 알 수 있었습니다.
                            </p>
                            <p className="portfolio__content-ex-text">

                            </p>
                        </div>
                    </div>
                    <div className="portfolio__bottom">
                        <div className="portfolio__bottom-links">
                            <b>팀원 Github</b>
                        </div>
                        <div className="portfolio__bottom-links">
                            <span>이태일 (Frontend): &nbsp;</span>
                            <a href="https://github.com/k1k2brz"
                                target="_blank" rel="noreferrer noopener">https://github.com/k1k2brz</a>
                        </div>
                        <div className="portfolio__bottom-links">
                            <span>김형준 (Backend): &nbsp;</span>
                            <a href="https://github.com/PorkbellyBigfan"
                                target="_blank" rel="noreferrer noopener">https://github.com/PorkbellyBigfan</a>
                        </div>
                        <div className="portfolio__bottom-links">
                            <span>박상민 (Backend): &nbsp;</span>
                            <a href="https://github.com/psm418"
                                target="_blank" rel="noreferrer noopener">https://github.com/psm418</a>
                        </div>
                        <div className="portfolio__bottom-links">
                            <span>이준호 (Backend): &nbsp;</span>
                            <a href="https://github.com/ZOONo-lee"
                                target="_blank" rel="noreferrer noopener">https://github.com/ZOONo-lee</a>
                        </div>
                        <br />
                        <div className="portfolio__bottom-links">
                            <span>프로젝트 Github: &nbsp;</span>
                            <a href="https://github.com/k1k2brz/Decommi-pre"
                                target="_blank" rel="noreferrer noopener">&nbsp;&nbsp;https://github.com/k1k2brz/Decommi-pre</a>
                        </div>
                        <div className="portfolio__bottom-links">
                            <span>프로젝트 Notion: &nbsp;</span>
                            <a href="https://decommi.notion.site/Decommi-54b1b7830f8545199a9f7c912e01f4bb"
                                target="_blank" rel="noreferrer noopener">&nbsp;&nbsp;https://decommi.notion.site/Decommi-54b1b7830f8545199a9f7c912e01f4bb</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Decommi;