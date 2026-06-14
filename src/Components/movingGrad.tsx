import {useEffect, useRef} from "react";

interface MovingGradProps {
    speed: number;
    angle: number;
    blur: number;
    opacity: number;
    colors: string;
}


export default function MovingGradient({speed, angle, blur, opacity, colors}) {

    const ref = useRef(null); // will give direct access to the DOM element, the div that we want to animate


    useEffect(() => {

        let start = performance.now();
        const travel = 300;
        const rad = angle * Math.PI / 180;

        const dx = Math.cos(rad);
        const dy = Math.sin(rad);
        const phase = Math.random() * travel;

        const animate = (t: number) => {
            const el = ref.current; //the div we want to animate
            if(!el) return;
            const time = (t - start) * speed;
            const pos = ((time + phase) % travel) - travel / 2;

            el.style.transform = `
    translate(${pos * dx}%, ${pos * dy}%)
    rotate(${angle}deg)
    `;

            requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [speed, angle])


    return (
        <div
            ref={ref}
            className="absolute inset-[-50%]"
            style={{
                background: colors,
                filter: `blur(${blur}px)`,
                opacity,
                mixBlendMode: "screen",
            }}
        />
    );
}