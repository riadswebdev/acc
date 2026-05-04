"use client";
const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="cube">
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face right"></div>
        <div className="face left"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>

      <style jsx>{`
        .cube {
          position: relative;
          width: 80px;
          height: 80px;
          transform-style: preserve-3d;
          animation: rotate 4s infinite linear;
        }

        .face {
          position: absolute;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #3b82f6, #1e3a8a);
          opacity: 0.9;
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

        .front {
          transform: translateZ(40px);
        }
        .back {
          transform: rotateY(180deg) translateZ(40px);
        }
        .right {
          transform: rotateY(90deg) translateZ(40px);
        }
        .left {
          transform: rotateY(-90deg) translateZ(40px);
        }
        .top {
          transform: rotateX(90deg) translateZ(40px);
        }
        .bottom {
          transform: rotateX(-90deg) translateZ(40px);
        }

        @keyframes rotate {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
