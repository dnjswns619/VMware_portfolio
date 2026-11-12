import React, { useEffect, useState, useRef } from "react";
import aboutImg0 from "../assets/images/about00.svg";
import aboutImg1 from "../assets/images/about01.svg";
import aboutImg2 from "../assets/images/about02.svg";
import aboutImg3 from "../assets/images/about03.svg";
import aboutImg4 from "../assets/images/about_html.svg"
import aboutImg5 from "../assets/images/about_css.svg"
import aboutImg6 from "../assets/images/about_js.svg"
import aboutImg7 from "../assets/images/about_react.svg"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import UseCountUp from "./numberCount";

const About = () => {
  const [startAnimation1, setStartAnimation1] = useState(false);
  const [startAnimation2, setStartAnimation2] = useState(false);
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);

  useEffect(() => {
    let observer1RefValue = null;
    let observer2RefValue = null;
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation1(true);
          observer1.disconnect(); // 애니메이션이 시작되면 observer를 해제
        }
      },
      { threshold: 0.3 } // div의 30%가 보이면 애니메이션 시작
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation2(true);
          observer2.disconnect(); // 애니메이션이 시작되면 observer를 해제
        }
      },
      { threshold: 0.1 } // div의 30%가 보이면 애니메이션 시작
    );

    if (targetRef1.current) {
      observer1.observe(targetRef1.current);
      observer1RefValue = targetRef1.current;
    }

    if (targetRef2.current) {
      observer2.observe(targetRef2.current);
      observer2RefValue = targetRef2.current;
    }

    return () => {
      if (observer1RefValue) {
        observer1.unobserve(observer1RefValue);
      }
      if (observer2RefValue) {
        observer2.unobserve(observer2RefValue);
      }
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const aboutDesc = document.querySelector(".about__desc")
    gsap.to(".about__wrap", {
      scrollTrigger: {
        trigger: "#about",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0,
        invalidateOnRefresh: true,
      },
      x: () => {
        return -aboutDesc.offsetWidth
      }
    })
    gsap.to(".desc__line--left", {
      scrollTrigger: {
        trigger: "#about",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0
      },
      yPercent: 50
    })
    gsap.to(".desc__line--right", {
      scrollTrigger: {
        trigger: "#about",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0
      },
      yPercent: -50
    })

    const aboutDesc1Animation = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "0% 0%",
        end: "33.333% 20%",
        scrub: 0,
        onEnter: () => {
          gsap.fromTo(".item1 .item__main-text", { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: -20, duration: 1 })
          gsap.fromTo(".item1 .item__sub-text", { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0, duration: 1 })
        }
      }
    })
    aboutDesc1Animation
    .to(".about__desc .item1__img-box--1", {xPercent: 60, yPercent: -10}, "a")
    .to(".about__desc .item1__img-box--2", {xPercent: -90, yPercent: 10}, "a")
    .to(".about__desc .item1__img-box--3", {xPercent: -70, yPercent: 10}, "a")
    .to(".about__desc .item1__img-box--4", {xPercent: -70, yPercent: 10}, "a")

    const aboutDesc2Animation = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "50% 100%",
        end: "100% 100%",
        scrub: 0,
        onEnter: () => {
          gsap.fromTo(".item2 .item__main-text", { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: -20, duration: 1 })
          gsap.fromTo(".item2 .item__sub-text", { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0, duration: 1 })
        }
      }
    })
    aboutDesc2Animation
    .to(".about__desc .item2__img-box--1", {xPercent: 50, yPercent: -5}, "b")
    .to(".about__desc .item2__img-box--2", {xPercent: -60, yPercent: 10}, "b+=0.3")
    .to(".about__desc .item2__img-box--3", {xPercent: 40, yPercent: -15}, "b+=0.8")
    .to(".about__desc .item2__img-box--4", {xPercent: -55, yPercent: -5}, "b")
  }, [])
  return (
    <section id="about" className="about">
      <div className="about__sticky">
        <div className="about__wrap">
          <h2 className="about__title">
            About Me
          </h2>
          <div className="about__desc">
            <div className="about__desc--item item item1" ref={targetRef1}>
              <div className="item1__img-box item1__img-box--1">
                <img src={aboutImg0} alt="" className="item1__img-box--img" />
              </div>
              <div className="item1__img-box item1__img-box--2">
                <img src={aboutImg1} alt="" className="item1__img-box--img" />
              </div>
              <div className="item1__img-box item1__img-box--3">
                <img src={aboutImg2} alt="" className="item1__img-box--img" />
              </div>
              <div className="item1__img-box item1__img-box--4">
                <img src={aboutImg3} alt="" className="item1__img-box--img" />
              </div>
              <div className="item__main-keyword">
                <span className="item__main-num">
                  <UseCountUp targetNumber={33} duration={2000} start={startAnimation1} />
                  <span className="item__main-num--sub">Month+</span>
                </span>
                <p className="item__main-keyword--text">
                  성실함과 책임감으로 첫 직장 입사 1년차에 선임 퍼블리셔와 주임 자리를 맡았었고<br /> 웹 에이전시에서는 기획자, 디자이너와의 협업 및 고객사와 소통하며<br />
                  약 12개의 프로젝트를 일정내에 무사히 완료해냈습니다.

                </p>
              </div>
              <p className="item__sub-text">
                왕복 3시간 거리 통학러<br />
                왕복 4시간 성실한 출근러
              </p>
            </div>
            <div className="about__desc--line">
              <p className="desc__line desc__line--left">
                HTML CSS JAVASCRIPT REACT
                <em>JUN'S ABOUT ME</em>
                HTML CSS JAVASCRIPT REACT
                <em>JUN'S ABOUT ME</em>
                HTML CSS JAVASCRIPT REACT
                <em>JUN'S ABOUT ME</em>
                HTML CSS JAVASCRIPT REACT
                <em>JUN'S ABOUT ME</em>
                HTML CSS JAVASCRIPT REACT
                <em>JUN'S ABOUT ME</em>
                HTML CSS JAVASCRIPT REACT
                <em>JUN'S ABOUT ME</em>
                HTML CSS JAVASCRIPT REACT
                <em>JUN'S ABOUT ME</em>
              </p>
              <p className="desc__line desc__line--right">
                JUN'S ABOUT ME
                <em>HTML CSS JAVASCRIPT REACT</em>
                JUN'S ABOUT ME
                <em>HTML CSS JAVASCRIPT REACT</em>
                JUN'S ABOUT ME
                <em>HTML CSS JAVASCRIPT REACT</em>
                JUN'S ABOUT ME
                <em>HTML CSS JAVASCRIPT REACT</em>
                JUN'S ABOUT ME
                <em>HTML CSS JAVASCRIPT REACT</em>
                JUN'S ABOUT ME
                <em>HTML CSS JAVASCRIPT REACT</em>
                JUN'S ABOUT ME
                <em>HTML CSS JAVASCRIPT REACT</em>
              </p>
            </div>
            <div className="about__desc--item item item2" ref={targetRef2}>
              <div className="item2__img-box item2__img-box--1">
                <img src={aboutImg4} alt="" className="item2__img-box--img" />
              </div>
              <div className="item2__img-box item2__img-box--2">
                <img src={aboutImg7} alt="" className="item2__img-box--img" />
              </div>
              <div className="item2__img-box item2__img-box--3">
                <img src={aboutImg6} alt="" className="item2__img-box--img" />
              </div>
              <div className="item2__img-box item2__img-box--4">
                <img src={aboutImg5} alt="" className="item2__img-box--img" />
              </div>
              <div className="item__main-keyword">
                <span className="item__main-num">
                  <UseCountUp targetNumber={23} duration={2000} start={startAnimation2} />
                  <span className="item__main-num--sub">Project</span>
                </span>
                <p className="item__main-keyword--text">
                  html과 css, PHP를 주로 사용하여 웹 표준과 웹 접근성을 준수하고<br />
                  JS를 이해하고 응용, 수정하여 사용해 프로젝트를 제작했습니다. 
                </p>
              </div>
              <p className="item__sub-text item__sub-text--1">
                현재는 인프라/시스템 엔지니어가 되기위해<br /> Linux와 네트워크를 공부하고 있으며<br /> 네트워크 관리사 자격증을 준비하고 있습니다.
              </p>
              <p className="item__sub-text item__sub-text--2">
                총 진행 프로젝트: 23개<br />
                회사 진행 프로젝트: 14개<br />
                개인 진행 프로젝트: 9개
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;