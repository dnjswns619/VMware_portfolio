import React, { useEffect } from "react";
import { workImg } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const renderWorkImg = (length, subject) => {
  const imgArr = [];
  for(let i = 0; i <= length - 1; i++) {
    if(subject === "sci") {
      imgArr.push(
        <img className="workImg" src={require('../assets/images/work/sci/' + workImg[i].imgSrc + '.png')} alt="회사에서 제작한 화면" key={i} />
      )
      
    } else if(subject === "aidt") {
      imgArr.push(
        <img className="workImg" src={require('../assets/images/work/aidt/' + workImg[i].imgSrc + '.png')} alt="회사에서 제작한 화면" key={i} />
      )
    }
  }
  return imgArr;
}

const Work = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.config({nullTargetWarn:false});
    const workImg1 = document.querySelectorAll(".work__img-box--section1 .workImg");
    const workImg2 = document.querySelectorAll(".work__img-box--section2 .workImg");
    const workImgAnimation1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#work",
        start: "20% 40%",
        end: "60% 100%",
        scrub: 0,
        invalidateOnRefresh: true
      },
      ease: "none"
    })
    const workImgAnimation2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#work",
        start: "60% 100%",
        end: "100% 100%",
        scrub: 0,
        invalidateOnRefresh: true
      },
      ease: "none"
    })
    ScrollTrigger.matchMedia({
      "(min-width: 751px)": function() {
        // workProject 1
        workImgAnimation1
        .to(".work__img-box--section", { autoAlpha: 0, duration: 0.2 }, "a")
        .fromTo(".work__img-box--section1", {top: () => 0 + "%", left: () => 1.5 + "%", scale: 0.733, autoAlpha: 1 }, {top: () => 0 + "%", left: () => 0 + "%", scale: 1, autoAlpha: 1 }, "a")
        .fromTo(".work__title--aidt", {autoAlpha: 1}, {autoAlpha: 0}, "a")
        workImg1.forEach((img, idx) => {
          workImgAnimation1
          .fromTo(img, {left: () => 12 + "vw"}, { left: () => 50 + "vw", duration: 0.1 }, "b")
          .fromTo(workImg1[idx + 1], {autoAlpha: 0}, {autoAlpha: 1, duration: 0.1}, "b")
          .fromTo(img,{zIndex: () => -idx}, {zIndex: 1, duration: 0.1})
          .fromTo(img,{rotateY: 0, filter: "blur(0px)"}, {rotateY: -180, filter: "blur(1px)"})
        })
        workImgAnimation1
        .to(".work__img-box--section1", {top: () => 0 + "%", left: () => 1.5 + "%", scale: 0.733, autoAlpha: 1 })
        .to(".work__img-box--section", { autoAlpha: 1 }, "e")
        .to(".work__title--aidt", {autoAlpha: 1}, "e")

        // workProject 2
        workImgAnimation2
        .to(".work__img-box--section", { autoAlpha: 0, duration: 0.4 }, "c")
        .fromTo(".work__img-box--section2", {top: () => 0 + "%", left: () => 58 + "%", scale: 0.733, autoAlpha: 1}, {top: () => 0 + "%", left: 0, scale: 1, autoAlpha: 1 }, "c")
        .fromTo(".work__title--sci", {autoAlpha: 1}, {autoAlpha: 0}, "c")
        workImg2.forEach((img, idx) => {
          workImgAnimation2
          .fromTo(img, {left: () => 12 + "vw"}, { left: () => 50 + "vw", duration: 0.1 }, "d")
          .fromTo(workImg2[idx + 1], {autoAlpha: 0}, {autoAlpha: 1, duration: 0.1}, "d")
          .fromTo(img,{zIndex: () => -idx}, {zIndex: 1, duration: 0.1})
          .fromTo(img,{rotateY: 0, filter: "blur(0px)"}, {rotateY: -180, filter: "blur(1px)"})
        })
        workImgAnimation2
        .to(".work__img-box--section2", {top: () => 0 + "%", left: () => 58 + "%", scale: 0.733, autoAlpha: 1 })
        .to(".work__img-box--section", { autoAlpha: 1 }, "f")
        .to(".work__title--sci", {autoAlpha: 1}, "f")
      },
      "(max-width: 750px)": function() { //모바일 반응형
        // workProject 1
        workImgAnimation1
        .to(".work__img-box--section", { autoAlpha: 0, duration: 0.2 }, "a")
        .fromTo(".work__img-box--section1", {top: () => 4 + "vh", left: () => 41 + "%", scale: 0.733, autoAlpha: 1 }, {top: () => 13 + "%", left: () => 41 + "%", scale: 1, autoAlpha: 1 }, "a")
        .fromTo(".work__title--aidt", {autoAlpha: 1}, {autoAlpha: 0}, "a")
        .fromTo(".work__title--sci", {top: () => 26 + "vh", maxWidth: () => 40 + "%"}, {top: () => 20 + "vh", maxWidth: () => 84 + "%"}, "a")
        workImg1.forEach((img, idx) => {
          workImgAnimation1
          .fromTo(img, {left: () => 0 + "vw"}, { left: () => 9 + "vw", duration: 0.1 }, "b")
          .fromTo(workImg1[idx + 1], {autoAlpha: 0}, {autoAlpha: 1, duration: 0.1}, "b")
          .fromTo(img,{zIndex: () => -idx}, {zIndex: 1, duration: 0.1})
          .fromTo(img,{rotateY: 0, filter: "blur(0px)"}, {rotateY: -180, filter: "blur(1px)"})
        })
        workImgAnimation1
        .to(".work__img-box--section1", {top: () => 4 + "vh", left: () => 20 + "%", scale: 0.733, autoAlpha: 1 }, "g")
        .to(".work__title--sci", {top: () => 26 + "vh", maxWidth: () => 40 + "%", left: () => 52 + "vw"}, "g")
        .to(".work__img-box--section", { autoAlpha: 1 }, "e")
        .to(".work__title--aidt", {autoAlpha: 1}, "e")

        // workProject 2
        workImgAnimation2
        .to(".work__img-box--section", { autoAlpha: 0, duration: 0.4 }, "c")
        .fromTo(".work__img-box--section2", {top: () => 43 + "vh", left: () => 41 + "%", scale: 0.733, autoAlpha: 1}, {top: () => 13 + "%", left: () => 41 + "%", scale: 1, autoAlpha: 1 }, "c")
        .fromTo(".work__title--sci", {autoAlpha: 1}, {autoAlpha: 0}, "c")
        .fromTo(".work__title--aidt", {top: () => 67 + "vh", maxWidth: () => 40 + "%"}, {top: () => 20 + "vh", maxWidth: () => 84 + "%"}, "c")
        workImg2.forEach((img, idx) => {
          workImgAnimation2
          .fromTo(img, {left: () => 0 + "vw"}, { left: () => 9 + "vw", duration: 0.1 }, "d")
          .fromTo(workImg2[idx + 1], {autoAlpha: 0}, {autoAlpha: 1, duration: 0.1}, "d")
          .fromTo(img,{zIndex: () => -idx}, {zIndex: 1, duration: 0.1})
          .fromTo(img,{rotateY: 0, filter: "blur(0px)"}, {rotateY: -180, filter: "blur(1px)"})
        })
        workImgAnimation2
        .to(".work__img-box--section2", {top: () => 43 + "vh", left: () => 20 + "%", scale: 0.733, autoAlpha: 1 }, "h")
        .to(".work__title--aidt", {top: () => 67 + "vh", maxWidth: () => 84 + "%", left: () => 52 + "vw"}, "h")
        .to(".work__img-box--section", { autoAlpha: 1 }, "f")
        .to(".work__title--sci", {autoAlpha: 1}, "f")
      }
    });

    gsap.set(".work__wrap", {"--circle-scale": () => 5 + "%"})
    const workCircle1Animation = gsap.timeline({
      scrollTrigger: {
        trigger: ".work__wrap",
        start: "0% 70%",
        end: "0% -20%",
        scrub: 0,
        invalidateOnRefresh: true
      },
      ease: "none"
    })
    workCircle1Animation
    .fromTo(".work__wrap", {duration: 0.7,"--circle-scale": () => 5 + "%"}, {duration: 0.7,"--circle-scale": () => 30 + "%"})
    .to(".work__wrap", {duration: 0.3,"--circle-scale": () => 80 + "%"})

    gsap.to(".work__img-box", {
      scrollTrigger: {
        trigger: "#work",
        start: "10% 0%",
        end: "20% 0%",
        scrub: 0,
        invalidateOnRefresh: true
      },
      autoAlpha: 1
    })
  })

  const workImgLength = 11;
  
  return (
    <section id="work" className="work">
      <div className="work__wrap">
        <div className="work__img-box">
          <h2 className="work__title work__title--sci">초등 3,4학년 과학 전자저작물</h2>
          <h2 className="work__title work__title--aidt">고등 공통 영어 AIDT</h2>
          <div className="work__img-box--section work__img-box--section1">
            {renderWorkImg(workImgLength, "sci")}
          </div>
          <div className="work__img-box--section work__img-box--section2">
            {renderWorkImg(workImgLength, "aidt")}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work;