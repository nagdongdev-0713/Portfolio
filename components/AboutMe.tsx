import { useCallback, useEffect, useRef, useState } from 'react';

type Props = {
    canvas: number | undefined;
}

const AboutMe = ({ canvas }: Props) => {
    const [ElementVisible, setElementVisible] = useState<boolean>(false);
    const [amAnime, setAmAnime] = useState<number>(0);
    const myRef = useRef<HTMLDivElement | null>(null);
    const aboutMe = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        // 컨텐츠 Opacity조정을 위함
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // console.log('entry', entry);
            setElementVisible(entry.isIntersecting)
        });
        observer.observe(myRef.current as HTMLDivElement);
        // ref를 두개 선언하면 둘 다 인식이 되어 isIntersecting이 꼬인다
    }, [])

    /**
     * TEXT 좌우 이동 애니메이션
     */
    const abScroll = useCallback(() => {
        setAmAnime((window.scrollY - (canvas as number)) / 3)
    }, [canvas])

    useEffect(() => {
        window.addEventListener("scroll", abScroll)
        return () => {
            window.removeEventListener("scroll", abScroll);
        }
    })


    return (
        <div className="am-container">
            <div className="am-area container__default">
                <div className="am-wrapper" ref={myRef}>
                    <div className={ElementVisible ? 'elem-visible am-content relative' : 'elem-invisible am-content relative'}>
                        <div ref={aboutMe} className="am-aboutme">
                            <div style={{ transform: `translateX(${amAnime}px)` }}>About me</div>
                        </div>
                        <div className="am-about">
                            <div className="am-infos">
                                <div className='am-infos-icontext'>
                                    <div className='iconsize'>
                                        <p className="subtitle-text bi bi-person-fill"></p>
                                    </div>
                                    <p>이연우</p>
                                </div>
                                <div className='am-infos-icontext'>
                                    <div className='iconsize'>
                                        <p className="subtitle-text bi bi-calendar-event-fill"></p>
                                    </div>
                                    <p>2012</p>
                                </div>
                            </div>
                            <div className='am-stroke'></div>
                            <div className="am-infos">
                                <div className='am-infos-icontext'>
                                    <div className='iconsize'>
                                        <p className="subtitle-text bi bi-telephone-fill"></p>
                                    </div>
                                    <p>NONE</p>
                                </div>
                                <div className='am-infos-icontext'>
                                    <div className='iconsize'>
                                        <p className="subtitle-text bi bi-envelope-fill"></p>
                                    </div>
                                    <p>youbotmaguni@gmail.com</p>
                                </div>
                            </div>
                            <div className='am-stroke'></div>
                            <div className="am-infos-two">
                                <div className='am-infos-icontext'>
                                    <div className='iconsize'>
                                        <p className="subtitle-text bi bi-mortarboard-fill"></p>
                                    </div>
                                    <div className="am-education">
                                        <p>낙동초등학교 재학 중</p>
                                    </div>
                                </div>
                                <div className='am-infos-icontext'>
                                    <div className='iconsize'>
                                        <p className="none subtitle-text bi bi-mortarboard-fill"></p>
                                    </div>
                                    <div className="am-education">
                                        <p>2023 로봇올림피아드 그리스 진출권 획득</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='am-about'>
                            <div>
                                <div className='am-career'>
                                    <div className='iconsize'>
                                        <span className="subtitle-text bi bi-pc"></span>
                                    </div>
                                    <div className='am-career__title'>
                                        WaterPLe - Backend Developer
                                    </div>
                                    <div className='am-career__date'>
                                        2023.05 ~ 재직중
                                    </div>
                                </div>
                                <div className='am-career-detail'>
                                    <div className='iconsize'>
                                        <span className="none subtitle-text bi bi-pc"></span>
                                    </div>
                                    <div>
                                        · 기여내용 <br />
                                        &nbsp; - WaterPLe 디스코드 서버 내 다용도 모더레이터 봇 개발<br />
                                        &nbsp; - WaterPLe 홈페이지, Contact, page in ChatBot(openai-api) 기능 구현<br /><br />
                                        · 서버 구축&방어 도움<br />
                                        &nbsp; - Cloudflare DDoS Defence<br />
                                        &nbsp; - IDC대역&Proxy&VPN Blocker<br />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;