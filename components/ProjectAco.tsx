import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

interface props {
    onModal: () => void;
}

function ProjectAco({ onModal }: props) {
    return (
        <div className="portfolio modal">
            <div className="fixed">
                <div className="portfolio__header">
                    <span>A.C.O. / README.md</span>
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
                                    src='/porfolio_img/aco01.PNG'
                                    alt="slide-01"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/aco02.PNG'
                                    alt="slide-02"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/aco03.PNG'
                                    alt="slide-03"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/aco05.PNG'
                                    alt="slide-05"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/aco06.PNG'
                                    alt="slide-06"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/aco04.PNG'
                                    alt="slide-04"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/aco07.PNG'
                                    alt="slide-07"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="portfolio__img-01"
                                    src='/porfolio_img/aco08.PNG'
                                    alt="slide-08"
                                    width='800'
                                    height='500'
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="portfolio__content">
                        <div className="portfolio__content-info">
                            <p className="portfolio__content-info-name">ACO - Advance the Ecology</p>
                            <p className="portfolio__content-info-days">2022.12 ~ 2023.01 · 팀 프로젝트</p>
                            <span className="portfolio__content-info-tools">React &nbsp;|&nbsp; Typescript
                                &nbsp;|&nbsp; Redux-Toolkit &nbsp;|&nbsp; Next.js &nbsp;|&nbsp; Tailwindcss &nbsp;</span>
                            <span className="portfolio__content-info-tools">Java &nbsp;|&nbsp; SpringBoot &nbsp;|&nbsp; Redis &nbsp;|&nbsp; MySQL &nbsp;|&nbsp; Docker </span>
                            <span className="portfolio__content-info-tools">AWS Lightsail</span>
                            <p className="portfolio__content-info-days small">
                                <span>주요 기능:</span> 사용자 및 게시판, 댓글 CRUD, 태그, 좋아요, 신고, 검색, 관리자페이지, 이미지 첨부
                            </p>
                            <p className="portfolio__content-info-days small">
                                <span>담당 파트: </span>
                                회원가입과 신고를 제외한 프론트엔드 전체 담당 및 백엔드 비밀번호 수정 및 좋아요 기능 담당
                                <br />
                                React(Hooks)와 Javascript ES6+ 문법을 사용한 UI개발
                                <br />
                                Redux-toolkit을 사용한 상태관리
                                <br />
                                Next.js를 사용한 동적 웹 페이지의 SSR
                                <br />
                                TailwindCSS을 사용한 디자인과 퍼블리싱
                                <br />
                                반응형 웹
                                <br />
                                StompJS와 SockJS를 사용한 채팅 구현
                                <br />
                                Java, Spring Framework를 사용한 REST API활용 Web개발 및 서버 연동
                                <br />
                                AWS Lightsail을 사용한 프론트엔드 파트 배포
                            </p>
                        </div>
                        <div className="portfolio__content-ex">
                            <p className="portfolio__content-ex-text">
                                <span>
                                ACO는 환경보호를 위한 기록 커뮤니티라는 주제로 간단한 분리수거 방법부터 친환경 Tip이나 제로 웨이스트, 미니멀 라이프 등
                                나의 발자취를 기록하고 공유하는 공간입니다.
                                </span>
                                <br />
                                <br />
                                지난 프로젝트로 개인 포트폴리오 사이트를 만들긴 했지만 아무래도 React에 관련된 지식이나 경험이 부족하다는 생각이 들었습니다.
                                그래서 React의 기본기를 다지고자 상태 관리 라이브러리를 도입하기로 했습니다. 리서치 결과 여러 가지 상태 관리 라이브러리가 있다는 걸 알았지만,
                                제가 공부한 적 있는 것부터 정확히 이해하고 넘어가야 한다는 생각에 클론 코딩으로 해봤던 Redux를 선택했습니다.
                                하지만 세팅 도중 Redux-toolkit의 존재를 알게 되었고 보일러 플레이트를 줄이기 위해 Saga보다는 Redux-toolkit을 사용하는 것이 좋다고 판단했습니다.
                                실제로 toolkit을 사용해 보니까 전에 공부할 때 Reducer와 Saga를 치면서 느꼈던 불편함이 많이 사라지고 코드가 깔끔해져 너무 만족스러웠습니다.
                                여기에 점점 React에 필수가 되어가고 있는 Typescript도 함께 학습하면서 타입 지정의 중요성을 배워나갔으며, SockJs와 StompJS를 이용해 채팅 기능을 만들어봤습니다.
                                한 가지 아쉬운 점은 서버에서 게시글 데이터를 받을 때 더 좋은 코드를 찾지 못해 약간의 딜레이가 생기는걸 해결하지 못한 부분입니다.
                                이 경험을 통해 성능 최적화까지 생각해 코드를 작성해야 하는구나라는걸 배웠습니다.
                                <br />
                                <br />
                                그리고 Next.js의 기능 공부 겸 동적 웹사이트의 SSR(서버사이드 렌더링)을 학습하면서 정적 웹사이트에서 사용할 땐 몰랐던 Next.js의 여러 기능을 알 수 있었습니다.
                                배포 후에 tailwindCSS의 SSR과 Next.js의 SSR이 꼬여서 작동이 안 되는 현상이 나타나 많이 애먹었지만, 
                                Next.js에 대해 많이 배울 수 있는 작업이었습니다.
                                한가지 아쉬운 점은 검색 엔진 최적화(SEO)의 과정 중에서 도메인 최적화 작업을 경험하지 못했던 점입니다.
                                <br />
                                <br />
                                이번 프로젝트는 빠르게 기능 위주의 공부를 해보자는 취지의 팀 프로젝트였기 때문에 디자인에 대한 부담을 최대한 덜어내려고
                                최근에 급부상하고 있는 CSS라이브러리 Tailwindcss를 사용했습니다.
                                Bootstrap과 결이 비슷하지만, Bootstrap에 비해 Tailwindcss는 커스텀도 편하고 사용성이 더 좋았습니다.
                                또 Bootstrap을 사용한 디자인이 너무 식상하다면 Tailwindcss를 사용해 보는 것도 좋겠다는 생각을 했습니다.
                                반응형 제작을 수월하게 하기 위해 디자인 레이아웃 일부는 flowbite라는 라이브러리를 함께 사용했습니다.
                                <br />
                                <br />
                                그리고 첫 팀 프로젝트를 할 때 백엔드에 대한 이해도가 낮아 프론트단의 구조를 짜거나 팀원들과의 소통에 어려웠던 기억이 있어서
                                조금이지만 백엔드 작업을 맡아서 해봤습니다. 덕분에 SpringBoot에 대한 두려움을 조금이나마 극복할 수 있었고,
                                배울 때 전체적으로 이해가 잘 안 갔던 부분들이 어느 정도 정리가 되었습니다.
                                덕분에 SpringBoot를 조금씩 공부하면서 개인 프로젝트를 진행해 볼 수 있을 것 같다는 자신감이 생겼습니다.<br />
                                또, AWS lightsail을 사용해 프론트단의 배포를 해봤습니다. 지난 프로젝트에서는 배포와 관련된 작업에
                                거의 참여를 하지 못했었는데, 이번에 동적 웹사이트의 배포를 경험해 봄으로써 기획부터 배포까지 모든 사이클을 경험해 볼 수 있었습니다.
                                <br />
                                <br />
                                마지막으로, 조금이지만 Git을 사용하여 다른 사람과 처음 협업을 경험해 봤습니다. 이전 프로젝트에서는 프론트 파트를 혼자 관리했기 때문에
                                Git의 사용법을 올바르게 숙지하지 못했었지만 이번 프로젝트로 Git으로 관리하는 방법을 배우게 되었습니다.<br />
                            </p>
                        </div>
                    </div>
                    <div className="portfolio__bottom">
                        <div className="portfolio__bottom-links">
                            <div style={{ marginTop: 10 }}>
                                <b>홈페이지</b>
                            </div>
                            <a href="http://43.200.152.148:3075/"
                                target="_blank" rel="noreferrer noopener">ACO 홈페이지 바로가기</a>
                            <br />
                            <div className='portfolio__bottom-solve'>
                                <b>문제해결 및 메모</b>
                            </div>
                            <a href="https://wonderfulwonder.tistory.com/14"
                                target="_blank" rel="noreferrer noopener">Next.js의 CORS에러</a>
                            <br />
                            <a href="https://wonderfulwonder.tistory.com/17"
                                target="_blank" rel="noreferrer noopener">FormData사용시 FileReader로 이미지 리스트 만들기</a>
                            <br />
                            <a href="https://wonderfulwonder.tistory.com/16"
                                target="_blank" rel="noreferrer noopener">검색 구현을 위한 Reducer사용</a>
                            <br />
                            <a href="https://wonderfulwonder.tistory.com/22"
                                target="_blank" rel="noreferrer noopener">tailwindCSS사용시 Next의 SSR이 동작하지 않는 경우</a>
                            <br />
                            <a href="https://wonderfulwonder.tistory.com/20"
                                target="_blank" rel="noreferrer noopener">AWS Llightsail에서 Burstable Zone을 넘어갔을 때의 Swap Memory사용</a>
                        </div>
                        <div className="portfolio__bottom-links">
                            <div style={{ marginTop: 10 }}>
                                <b>프로젝트 Github</b>
                            </div>
                            <span>Frontend: &nbsp;</span>
                            <a href="https://github.com/TEAM-ACO/aco-front"
                                target="_blank" rel="noreferrer noopener">https://github.com/TEAM-ACO/aco-front</a>
                            <br />
                            <span>Backend: &nbsp;</span>
                            <a href="https://github.com/TEAM-ACO/aco-back"
                                target="_blank" rel="noreferrer noopener">https://github.com/TEAM-ACO/aco-back</a>
                        </div>
                        <div style={{ marginTop: 10 }}>
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
                            <span>변현석 (Backend): &nbsp;</span>
                            <a href="https://github.com/B-HS"
                                target="_blank" rel="noreferrer noopener">https://github.com/B-HS</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectAco