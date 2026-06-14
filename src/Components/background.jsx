import MovingGradient from "./movingGrad";



function Background() {
    const maxBars = 4;
    const gradients = [
        "linear-gradient(120deg, rgba(79,70,229,0.7), rgba(99,102,241,0.7))", // Indigo
        "linear-gradient(120deg, rgba(168,85,247,0.6), rgba(217,70,239,0.6))", // Purple
        "linear-gradient(120deg, rgba(6,182,212,0.6), rgba(59,130,246,0.6))",  // Cyan
        "linear-gradient(120deg, rgba(236,72,153,0.5), rgba(168,85,247,0.5))"  // Pink
    ];
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {Array.from({length: maxBars}).map((_, i) => (
                <MovingGradient
                    key={i}
                    speed={0.005 + i * 0.001}
                    angle={45 + i * 45}
                    blur={60 - i * 8}
                    opacity={0.12}
                    colors={gradients[i]}
                />
            ))}
        </div>
    );
}

export default Background;