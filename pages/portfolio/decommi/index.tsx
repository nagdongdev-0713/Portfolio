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
                                    src='/porfolio_img/decommi.PNG'
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
                                팀원들과의 의논 끝에 문법이 통일되어있는 Vue로 작업 하였으며 상태와 변이를 중앙집중화하여 관리해서
                                보다 효율적으로 작업하기 위해 Vuex를 사용하였습니다. 또, 몇몇 modal이나 input등을 Bootstrap으로 만든걸 제외하면
                                Figma로 작성된 디자인을 코드로 옮기는 작업이었기 때문에 CSS문법의 가독성을 올리고 유지보수를 빠르게 해줄 라이브러리가
                                필요해 SASS를 선택했습니다.
                            </p>
                            <p className="portfolio__content-ex-text">
                                처음으로 웹을 만들어보면서 HTML, CSS, Javascript, Vue 등 웹 개발의 기본 지식을 쌓을 수 있었고,
                                왜 Vue나 React같은 프레임워크를 사용하는지, 왜 Javascript가 중요한지 알 수 있었던 작업이었습니다.
                                또, CkEditor(라이브러리)파트를 제외한 모든 부분을 전부 Composition Api로 작성했는데 그 이유는 앞으로 나올 Vue의 레퍼런스나 라이브러리가
                                Composition Api의 문법으로 작성될거라 생각해서 Vue3문법으로 작성 하였습니다.
                                그리고 백엔드와 협업하는 과정에서 어떻게 교류를 해야하고 소통해야 하는지 시행착오를 겪으며 알 수 있었고,
                                DB구조나 SQL쿼리문 SpringBoot코드를 같이 읽어나가며 웹이 전체적으로 어떻게 동작하는지 알 수 있었던 프로젝트였습니다.
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