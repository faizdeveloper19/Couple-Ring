import React, { useRef, useEffect } from 'react'; 
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const watchLeftRef = useRef(null);
  const watchRightRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // --- PART 1: Intro Animation (Happens on Load) ---
      tl.fromTo(titleRef.current, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
      )
      .fromTo(subTitleRef.current, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, 
        "-=0.8"
      );

      // Watches fly in to their "Initial" resting state
      tl.fromTo(watchLeftRef.current,
        { x: -200, opacity: 0, rotation: -45 },
        { x: 0, opacity: 1, rotation: -15, duration: 1.5, ease: "power3.out" },
        "-=1.2"
      )
      .fromTo(watchRightRef.current,
        { x: 200, opacity: 0, rotation: 45 },
        { x: 0, opacity: 1, rotation: 15, duration: 1.5, ease: "power3.out" },
        "-=1.5"
      );

      // --- PART 2: Scroll Animation ---
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top+=50 top", 
          end: "bottom top", 
          scrub: 1,
        }
      });

      // Move Left Watch to Center
      scrollTl.to(watchLeftRef.current, {
        top: "50%",               
        left: "calc(50% - 6.5vw)", 
        x: -320,
        y: -255, // Adjust this Y to match the Box height in Section 1 perfectly
        scale: 0.69,
        rotation: 0,
        ease: "power1.inOut"
      }, 0);

      // Move Right Watch to Center
      scrollTl.to(watchRightRef.current, {
        top: "50%",               
        left: "calc(50% + 6.5vw)",
        right: "auto",
        x: -215,
        y: -230, // Adjust this Y to match the Box height in Section 1 perfectly
        scale: 0.69,
        rotation: 0,
        ease: "power1.inOut"
      }, 0);

    }, containerRef); 

    return () => ctx.revert();

  }, []); 

  return (
    <div className="hero-container" ref={containerRef}>
      <div className="hero-text-wrapper">
        <h1 ref={titleRef} className="main-title">LOVIQUE</h1>
        <p ref={subTitleRef} className="sub-title">Two Hearts, One Promise</p>
      </div>

      <img 
        ref={watchLeftRef}
        src="/images/Ring_2.png" 
        alt="Watch Left" 
        className="watch-fixed watch-left"
      />
      
      <img 
        ref={watchRightRef}
        src="/images/Ring_1.png" 
        alt="Watch Right" 
        className="watch-fixed watch-right"
      />
    </div>
  );
};

export default Hero;