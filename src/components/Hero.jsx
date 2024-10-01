import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? true : false
  );

  const handleSetVideoSrc = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(true);
    } else {
      setVideoSrc(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleSetVideoSrc);

    return () => {
      window.removeEventListener("resize", handleSetVideoSrc);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });
    gsap.to("#cta", { opacity: 1, delay: 2, y: -50 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-100 flex-center flex-col">
        <p id="hero" className="hero-title z-10">
          Iphone 16 pro
        </p>
        <div className="overflow-hidden flex items-center justify-center h-5/6">
          <video
            className={`pointer-events-none md:rotate-0 rotate-90`}
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source
              type="video/mp4"
              src={
                "https://www.apple.com/105/media/us/iphone-16-pro/2024/3616fe73-ad74-4b7f-8b93-a4c0f0b6a2d7/anim/hero/medium_2x.mp4"
              }
            />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a id="highlights" className="cursor-pointer btn">
          Buy{" "}
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
