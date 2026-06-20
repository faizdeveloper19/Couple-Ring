import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section1.css';

gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
  const containerRef = useRef(null);
  const frameRef = useRef(null);
  const mirrorRef = useRef(null);
  const titleRef = useRef(null); // Ref for the Title

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2000", 
          pin: true,
          scrub: 1,
        }
      });

      // 1. Frame + Mirror Animation
      tl.fromTo([frameRef.current, mirrorRef.current], 
        { 
          opacity: 0, 
          scale: 1.3, 
          z: 100 
        },
        { 
          opacity: 1, 
          scale: 1,
          z: 0,
          y: 90, 
          duration: 1,
          ease: "power2.out" 
        }
      );

      // 2. Title Fade Up Animation
      // Starts AFTER (">") the frame animation completes
      tl.fromTo(titleRef.current, 
        { 
          y: 100, 
          opacity: 0 
        },
        { 
          y: -30, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power4.out" 
        },
        ">" 
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="section1-container" ref={containerRef}>
      
      {/* TITLE WRAPPER */}
      <div className="title-wrapper">
        <h1 className="title-text" ref={titleRef}>
        When Love Finds Its Home........
        </h1>
      </div>

      <div className="box-wrapper">
        
        {/* MIRROR (z-29) */}
        <div 
            ref={mirrorRef}
            className="frame-mirror"
        ></div>

        {/* FRAME (z-30) */}
        <img 
          ref={frameRef}
          src="/images/f.png" 
          alt="Decorative Frame" 
          className="frame-image"
        />

        {/* BOX (z-5) */}
        <img 
          src="/images/RBox.png" 
          alt="Watch Box" 
          className="box-image"
        />
       
      </div>
    </div>
  );
};

export default Section1;