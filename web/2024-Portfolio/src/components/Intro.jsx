import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import introCircle from "../assets/images/intro_circle0.jpg";
import introCircle2 from "../assets/images/intro_circle1.jpg";
import { introText } from "../constants"; 

const Intro = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".desc__item--middle .desc__item--wrap:nth-child(3) .desc__item--img", {autoAlpha: 0})
    gsap.timeline({
      scrollTrigger: {
        trigger: "#intro",
        start: "75% 100%",
        end: "78% 100%",
        invalidateOnRefresh: true,
        onLeaveBack: () => {
          gsap.set(".desc__item--middle .desc__item--wrap:nth-child(3) .desc__item--img", {autoAlpha: 0}, "c")
          gsap.set(".intro__tit", {autoAlpha: 1}, "c")
        },
        onEnter: () => {
          gsap.to(".desc__item--middle .desc__item--wrap:nth-child(3) .desc__item--img", {autoAlpha: 1}, "d")
          gsap.to(".intro__tit", {autoAlpha: 0}, "d")
        }
      }
    })

    const introScaleAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#intro",
        start: "0% 0%",
        end: "100% 0%",
        scrub: 0,
        invalidateOnRefresh: true
      }
    })
    
    introScaleAnimation
    .to(".intro__tit", {"--circle": () => 0 + "%"}, "a")
    .to(".intro__desc", {"--scale": 1}, "a")
    .to(".intro__desc .desc__item--top" , {xPercent: -5}, "b")
    .to(".intro__desc .desc__item--middle" , {xPercent: 5}, "b")
    .to(".intro__desc .desc__item--bottom" , {xPercent: -5}, "b")
    return () => {
      introScaleAnimation.kill();
    }
  }, [])
  const introTopText = introText.top;
  const introMiddleText = introText.middle;
  const introBottomText = introText.bottom;
  return (
    <section id="intro" className="intro">
      <div className="intro__inner">
        <div className="intro__tit">
          <h2 className="intro__tit--text">
            <span>JUN'S</span>
          </h2>
          <h2 className="intro__tit--text intro__tit--change">
            PORTFOLIO
          </h2>
        </div>
        <div className="intro__desc">
          <div className="intro__desc--row desc__item desc__item--top">
            {
              introTopText.map((arr, idx) => {
                return (
                  <div className="desc__item--wrap" key={arr.id}>
                    <div className={arr.class}>{arr.text}</div>
                    <img className="desc__item--img" src={idx % 2 === 0 ? introCircle : introCircle2} alt="" />
                  </div>
                )
              })
            }
          </div>
          <div className="intro__desc--row desc__item desc__item--middle">
            {
                introMiddleText.map((arr, idx) => {
                  return (
                    <div className="desc__item--wrap" key={arr.id}>
                      <div className={arr.class}>{arr.text}</div>
                      {
                        idx % 2 === 0 ? <img className="desc__item--img" src={introCircle} alt="" /> : 
                        idx === 5 ? null : <img className="desc__item--img" src={introCircle2} alt="" />}
                    </div>
                  )
                })
              }
          </div>
          <div className="intro__desc--row desc__item desc__item--bottom">
            {
              introBottomText.map((arr, idx) => {
                return (
                  <div className="desc__item--wrap" key={arr.id}>
                    <img className="desc__item--img" src={idx % 2 === 0 ? introCircle : introCircle2} alt="" />
                    <div className={arr.class}>{arr.text}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro;