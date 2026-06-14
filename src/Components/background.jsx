import MovingGradient from "./movingGrad";



function Background() {
    const maxBars = 4;
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {Array.from({length: maxBars}).map((_, i) => (
                <MovingGradient
                    key={i}
                    speed={0.005 + i * 0.001}
                    angle={45 + i * 30}
                    blur={60 - i * 8}
                    opacity={0.25}
                    colors="linear-gradient(
  120deg,
  rgba(79,70,229,0.7),
  rgba(168,85,247,0.7),
  rgba(6,182,212,0.7)
)"
                />
            ))}
        </div>
    );
}

export default Background;