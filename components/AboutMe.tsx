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

    const abScroll = useCallback(() => {
        setAmAnime((window.scrollY - (canvas as number)) / 4)
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
                                    <p>이태일</p>
                                </div>
                                <div className='am-infos-icontext'>
                                    <div className='iconsize'>
                                        <p className="subtitle-text bi bi-calendar-event-fill"></p>
                                    </div>
                                    <p>1993.02.15</p>
                                </div>
                            </div>
                            <div className='am-stroke'></div>
                            <div className="am-infos">
                                <div className='am-infos-icontext'>
                                    <div className='iconsize'>
                                        <p className="subtitle-text bi bi-telephone-fill"></p>
                                    </div>
                                    <p>010-4221-8622</p>
                                </div>
                                <div className='am-infos-icontext'>
                                    <div className='iconsize'>
                                        <p className="subtitle-text bi bi-envelope-fill"></p>
                                    </div>
                                    <p>ofshadows@naver.com</p>
                                </div>
                            </div>
                            <div className='am-stroke'></div>
                            <div className="am-infos-two">
                                <div className='am-infos-icontext'>
                                    <div className='iconsize'>
                                        <p className="subtitle-text bi bi-mortarboard-fill"></p>
                                    </div>
                                    <div className="am-education">
                                        <p>선문대학교 시각디자인학과 졸업(2021)</p>
                                    </div>
                                </div>
                                <div className='am-infos-icontext'>
                                    <div className='iconsize'>
                                        <p className="none subtitle-text bi bi-mortarboard-fill"></p>
                                    </div>
                                    <div className="am-education">
                                        <p>동성직업전문학교 프론트/JAVA 풀스택 과정 수료(2022)</p>
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