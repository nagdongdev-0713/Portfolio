import { useEffect, useRef, useState } from 'react';

const AboutMe = () => {

    const [ElementVisible, setElementVisible] = useState<boolean>();
    const myRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        // 컨텐츠 Opacity조정을 위함
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // console.log('entry', entry);
            // 위에 찍혔던 boolean인 isIntersecting값이 들어감
            setElementVisible(entry.isIntersecting)
        });
        observer.observe(myRef.current as HTMLInputElement);
    }, [])



    return (
        <div className="am-container">
            <div className="am-area container__default">
                <div className="am-wrapper" ref={myRef}>
                    <div className={ElementVisible ? 'elem-visible am-content' : 'elem-invisible'}>
                        <div className="title-padding">
                            <p>About me</p>
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
                                        <p>부산 동성직업전문학교 프론트/JAVA 풀스택 과정 수료(2022)</p>
                                    </div>
                                </div>

                                <div className='am-infos-icontext'>
                                    <div className='iconsize'>
                                        <p className="subtitle-text bi bi-stack"></p>
                                    </div>
                                    <div className="am-education">
                                        <p>Blue Award 상품문화디자인 국제공모전 특선(2019)</p>
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