import React, { useEffect, useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import svgMouse from '../public/mouse/mouse.svg'

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
    opacity = 1,
    easing = "cubic-bezier(0.18, 0.89, 0.32, 1.28)",
    duration = 0.2,
    custom = false,
    ...rest
}) => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useLayoutEffect(() => {
        document.onmousemove = (event: any) => {
            let e = event;
            setX(e.clientX);
            setY(e.clientY);
        };
    });

    const styles = {
        ...base,
        animation: pulse ? "pulse 2s infinite" : null,
        "background-color": hollow ? "transparent" : color,
        border: hollow ? "1px solid " + color : null,
        width: size + "px",
        height: size + "px",
        top: y,
        left: x,
        "transition-timing-function": easing,
        opacity: opacity,
        "transition-duration": duration + "s"
    };

    const styles2 = {
        ...base,
        animation: pulse ? "pulse 2s infinite" : null,
        "background-color": hollow ? "transparent" : color,
        border: hollow ? "1px solid " + color : null,
        width: size + "px",
        height: size + "px",
        top: y,
        left: x,
        "transition-timing-function": easing,
        opacity: 0.6,
        "transition-duration": 0.3 + "s"
    };

    return (
        <>
            <Image className="mouse-event" {...rest} src={svgMouse} alt='' style={styles} />
            <Image className="mouse-event" {...rest} src={svgMouse} alt='' style={styles2} />
            {/* <div id="cursor" {...rest} style={styles} /> */}
            {/* svg 두세개 더 추가해서 잔상 넣기 */}
        </>
    );
};

export default Cursor;