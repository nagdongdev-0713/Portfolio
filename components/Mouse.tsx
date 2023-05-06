import React, { useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import svgMouse from '../public/mouse/mouse.svg'

// 과한 움직임시 렉으로 인해 마우스 이벤트 보류

const base = {
    "pointer-events": "none",
    "user-select": "none",
    display: "block",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "border-radius": "100%",
};
const Cursor = ({
    pulse = false,
    size = 18,
    hollow = false,
    color = "#2E2E2E",
    opacity = 0.7,
    easing = "cubic-bezier(0.18, 0.89, 0.32, 1.28)",
    duration = 0.2,
    custom = false,
    ...rest
}) => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useLayoutEffect(() => {
        document.onmousemove = (event: MouseEvent) => {
            let e = event;
            setX(e.clientX);
            setY(e.clientY);
        };
    }, [x, y]);

    const styleContent: any = {
        ...base,
        animation: pulse ? "pulse 2s infinite" : null,
        "background-color": hollow ? "transparent" : color,
        border: hollow ? "1px solid " + color : null,
        width: size + "px",
        height: size + "px",
        top: y,
        left: x,
        "transition-timing-function": easing,
    };

    const styles = {
        ...styleContent,
        opacity: opacity,
        "transition-duration": duration + "s"
    }
    // const styles2 = {
    //     ...styleContent,
    //     opacity: 0.5,
    //     "transition-duration": 0.3 + "s"
    // }
    // const styles3 = {
    //     ...styleContent,
    //     opacity: 0.3,
    //     "transition-duration": 0.4 + "s"
    // }
    // const styles4 = {
    //     ...styleContent,
    //     opacity: 0.1,
    //     "transition-duration": 0.47 + "s"
    // }

    return (
        <>
            <Image className="mouse-event" {...rest} src={svgMouse} alt='' style={styles} />
            {/* <Image className="mouse-event" {...rest} src={svgMouse} alt='' style={styles2} />
            <Image className="mouse-event" {...rest} src={svgMouse} alt='' style={styles3} />
            <Image className="mouse-event" {...rest} src={svgMouse} alt='' style={styles4} /> */}
        </>
    );
};

export default Cursor;