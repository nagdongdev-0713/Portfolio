import { useEffect, useState } from 'react';

const Canvas = () => {
    // const sceneInfo = [
    //     {
    //         // 0
    //         type: "sticky",
    //         heightNum: 5,
    //         scrollHeight: 0,
    //         objs: {
    //             container: document.querySelector("#scroll-section-cav"),
    //             messageA: document.querySelector("#scroll-section-cav .main-message.a"),
    //             canvas: document.querySelector("#video-canvas-cav"),
    //             videoImages: [],
    //         },
    //         // objs를 동작시키는 값들
    //         values: {
    //             // 비디오 이미지
    //             videoImageCount: 69,
    //             imageSequence: [0, 68],
    //             canvas_opacity: [1, 0, { start: 0.9, end: 1 }],
    //             messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
    //             // fade out text 위치이동
    //             messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
    //             messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
    //             messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
    //         },
    //     },
    // ]
    const [typePosition, setTypePosition] = useState<number>(0);
    const [imageCount, setImageCount] = useState<number>(69);
    const [imageSequence, setImageSequence] = useState<number[]>([0, 68]);

    const onCanvasType = () => {
        setTypePosition(window.scrollY);
        // window.innerHeight
    }

    // const setVideo = () => {
    //     let imgElem;
    //     for (let i = 0; i < sceneInfo[0].values.videoImageCount; i++) {
    //         // 이미지 시작 ~ 끝
    //         imgElem = new Image();
    //         imgElem.src = `./video/001/IMG_${6726 + i}.JPG`;
    //         sceneInfo[0].objs.videoImages.push(imgElem);
    //     }
    // }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            onCanvasType();
            return () => {
                window.removeEventListener("scroll", () => {
                    onCanvasType();
                })
            }
        })
    }, [])

    return (
        <div className="cav-container">
            <div className="cav-wrapper container__default">
                <div className="cav-content">
                    <p>안녕하세요</p>
                    <p className="cav-bold">Front-end Developer 이태일입니다.</p>
                    <p>항상 탐구하는 개발자가 되고 싶습니다.</p>
                </div>
                <div style={{ width: "265px", height: "265px", backgroundColor: "grey" }}></div>
            </div>
        </div>
    )
}

export default Canvas;