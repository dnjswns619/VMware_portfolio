import React, {useEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Footer = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const footerScaleAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#footer",
        start: "0% 0%",
        end: "90% 100%",
        scrub: 0,
      }
    })
    footerScaleAnimation.to(".footer__effect", {"--circle": () => 0 + "%", duration: 0.6})
    const textAnimation = [...document.querySelectorAll(".text")]
    textAnimation.map((text) => footerScaleAnimation.to(text, { yPercent: -30, autoAlpha: 1, duration: 0.3}))
    footerScaleAnimation
    .to(".footer__career", {autoAlpha: 1, duration: 0.1}, "a")
    .to(".footer__tel", {autoAlpha: 1, duration: 0.1}, "a")
    .to(".footer__github", {autoAlpha: 1, duration: 0.1}, "a")
    
    return () => {
      footerScaleAnimation.kill();
    }
  }, [])

  const contentText = "Thank You"
  const effectTextSplit = contentText.split("");

  return (
    <footer id="footer" className="footer">
      <div className="footer__wrap">
        <div className="footer__effect">
        </div>
        <p className="footer__effect--text">
          {
            effectTextSplit.map((text, idx) => {
              return <span className="text" key={idx}>{text}</span>
            })
          }
        </p>
        <div className="footer__career footer__info">
          <span className="footer__tit">Career :</span> 
          <div class="footer__career-list">
            <p><span>아이스캔디</span> 2023.03 ~ 2024.12</p>
            <p><span>파인애플피티엘</span> 2024.12 ~ 2025.12</p>
          </div>
        </div>
        <p className="footer__tel footer__info">
          <span className="footer__tit">Tel :</span> 010-8329-0566</p>
        <p className="footer__github footer__info">
          <span className="footer__tit">GitHub :</span> <a href="https://github.com/dnjswns619" target="_blank" rel="noopener noreferrer">https://github.com/dnjswns619</a></p>

      </div>
    </footer>
  )
}

export default Footer;