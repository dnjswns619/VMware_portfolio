import React, { useEffect, useRef } from "react";
import ProjectDesc from "./ProjectDesc";
import { portContent } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const AnimatedText = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const chars = textRef.current.querySelectorAll('span');
    const portTitleAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#port",
        start: "0% 40%",
        end: "0% 0%",
        scrub: 0,
        invalidateOnRefresh: true
      }
    })
    portTitleAnimation
    .to(chars[0], { yPercent: -20 }, "a")
    .to(chars[1], { yPercent: -35 }, "a+=0.2")
    .to(chars[2], { yPercent: -20 }, "a+=0.4")
    .to(chars[4], { yPercent: -30 }, "a")
    .to(chars[6], { yPercent: -20 }, "a+=0.4")
    .to(chars[7], { yPercent: -35 }, "a+=0.2")
    .to(chars[8], { yPercent: -25 }, "a")
  }, []);

  return (
    <h2 className="port__title" ref={textRef}>
      {splitText(text)}
    </h2>
  );
};
const splitText = (text) => {
  return text.split("").map((char, idx) => (
    <span key={idx} style={{display: 'inline-block'}}>{char}</span>
  ))
}

const Port = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const portCards = document.querySelectorAll(".port__item--img");
    const portItem = document.querySelectorAll(".port__item");
    portCards.forEach((card, idx) => {
      card.addEventListener("mouseover", (e) => {
        portItem[idx].classList.add("on");
      })
      card.addEventListener("mouseout", () => {
        portItem[idx].classList.remove("on");
      })
    })
    ScrollTrigger.matchMedia({
      "(min-width: 1025px)": function() {
        const portItemAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: "#port",
            start: "45% 100%",
            end: "100% 100%",
            scrub: 0,
            invalidateOnRefresh: true
          }
        })
        gsap.utils.toArray(".port__item").forEach((item) => {
          portItemAnimation.to(item, {gap: () => 10 + "vw", yPercent: -10})
        })
      },
      "(min-width: 901px) and (max-width: 1024px)": function() {
        const portItemAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: "#port",
            start: "45% 100%",
            end: "100% 100%",
            scrub: 0,
            invalidateOnRefresh: true
          }
        })
        gsap.utils.toArray(".port__item").forEach((item) => {
          portItemAnimation.to(item, {gap: () => 4 + "vw", yPercent: -10})
        })
      },
      "(max-width: 900px)": function() {
        const portItemAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: "#port",
            start: "45% 100%",
            end: "100% 100%",
            scrub: 0,
            invalidateOnRefresh: true
          }
        })
        gsap.utils.toArray(".port__item").forEach((item) => {
          portItemAnimation.to(item, {gap: () => 10 + "vw", yPercent: -10})
        })
      }
    });

    const commonAnimationOption = {
      start: "0% 65%",
      end: "0% 30%",
      invalidateOnRefresh: true
    }

    const portText1Animation = gsap.timeline({
      scrollTrigger: {
        trigger: ".port__item:nth-child(1 of .port__item)",
        ...commonAnimationOption
      },
      ease: "none"
    })
    portText1Animation
    .to(".imgBox__front h3", {"--after-width1": () => 0 + "%", duration: 1}, "b")
    .to(".port__item .projectDesc", {"--textColor-progress1": () => 100 + "%", duration: 1}, "b")

    const portText2Animation = gsap.timeline({
      scrollTrigger: {
        trigger: ".port__item:nth-child(2 of .port__item)",
        ...commonAnimationOption
      },
      ease: "none"
    })
    portText2Animation
    .to(".imgBox__front h3", {"--after-width2": () => 0 + "%", duration: 1}, "b")
    .to(".port__item .projectDesc", {"--textColor-progress2": () => 100 + "%", duration: 1}, "b")

    const portText3Animation = gsap.timeline({
      scrollTrigger: {
        trigger: ".port__item:nth-child(3 of .port__item)",
        ...commonAnimationOption
      },
      ease: "none"
    })
    portText3Animation
    .to(".imgBox__front h3", {"--after-width3": () => 0 + "%", duration: 1}, "b")
    .to(".port__item .projectDesc", {"--textColor-progress3": () => 100 + "%", duration: 1}, "b")

    const portText4Animation = gsap.timeline({
      scrollTrigger: {
        trigger: ".port__item:nth-child(4 of .port__item)",
        ...commonAnimationOption
      },
      ease: "none"
    })
    portText4Animation
    .to(".imgBox__front h3", {"--after-width4": () => 0 + "%", duration: 1}, "b")
    .to(".port__item .projectDesc", {"--textColor-progress4": () => 100 + "%", duration: 1}, "b")

    const portText5Animation = gsap.timeline({
      scrollTrigger: {
        trigger: ".port__item:nth-child(5 of .port__item)",
        ...commonAnimationOption
      },
      ease: "none"
    })
    portText5Animation
    .to(".imgBox__front h3", {"--after-width5": () => 0 + "%", duration: 1}, "b")
    .to(".port__item .projectDesc", {"--textColor-progress5": () => 100 + "%", duration: 1}, "b")

    const portText6Animation = gsap.timeline({
      scrollTrigger: {
        trigger: ".port__item:nth-child(6 of .port__item)",
        ...commonAnimationOption
      },
      ease: "none"
    })
    portText6Animation
    .to(".imgBox__front h3", {"--after-width6": () => 0 + "%", duration: 1}, "b")
    .to(".port__item .projectDesc", {"--textColor-progress6": () => 100 + "%", duration: 1}, "b")

    const portText7Animation = gsap.timeline({
      scrollTrigger: {
        trigger: ".port__item:nth-child(7 of .port__item)",
        ...commonAnimationOption
      },
      ease: "none"
    })
    portText7Animation
    .to(".imgBox__front h3", {"--after-width7": () => 0 + "%", duration: 1}, "b")
    .to(".port__item .projectDesc", {"--textColor-progress7": () => 100 + "%", duration: 1}, "b")

    const portText8Animation = gsap.timeline({
      scrollTrigger: {
        trigger: ".port__item:nth-child(8 of .port__item)",
        ...commonAnimationOption
      },
      ease: "none"
    })
    portText8Animation
    .to(".imgBox__front h3", {"--after-width8": () => 0 + "%", duration: 1}, "b")
    .to(".port__item .projectDesc", {"--textColor-progress8": () => 100 + "%", duration: 1}, "b")
  })

  return (
    <section id="port" className="port">
      <div className="port__wrap">
        <AnimatedText text="PORTFOLIO" />
        {
          portContent.map((port, idx) => {
            return(
              idx % 2 === 0 ? 
              <div className={`port__item port__item--${idx + 1}`} key={port.id}>
                <a className="port__item--img imgBox imgBox__left" href={port?.pageLink} target="_blank" rel="noreferrer noopener">
                  <div className="imgBox__item imgBox__front">
                    {
                      port.cardText ? <h3 dangerouslySetInnerHTML={{__html: port.cardText}}></h3> : <h3>{port.title}</h3>
                    }
                    
                  </div>
                  <div className="imgBox__item imgBox__behind">
                    <img src={require('../assets/images/' + port.imgSrc)} alt="" />
                  </div>
                </a>
                <ProjectDesc className="port__item--desc" data={port} />
              </div> :
              <div className={`port__item port__item--${idx + 1}`} key={port.id}>
                <ProjectDesc className="port__item--desc" data={port} />
                <a className="port__item--img imgBox imgBox__right" href={port?.pageLink} target="_blank" rel="noreferrer noopener">
                  <div className="imgBox__item imgBox__front">
                    {
                      port.cardText ? <h3 dangerouslySetInnerHTML={{__html: port.cardText}}></h3> : <h3>{port.title}</h3>
                    }
                  </div>
                  <div className="imgBox__item imgBox__behind">
                    <img src={require('../assets/images/' + port.imgSrc)} alt="" />
                  </div>
                </a>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Port;