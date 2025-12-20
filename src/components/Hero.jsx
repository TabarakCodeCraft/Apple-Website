import React, { useEffect, useRef } from "react";

function Hero() {
  const videoRef = useRef();
useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  video.playbackRate = 2;
  video.play().catch(() => {});
}, []);

  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook Title" />
      </div>
      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        autoPlay
        muted
        playsInline
      ></video>

      <button>Buy</button>
      <p>From $1599 or $133/mo for 12 months</p>
    </section>
  );
}

export default Hero;
