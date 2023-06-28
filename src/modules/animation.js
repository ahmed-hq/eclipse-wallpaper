
class Animation {
  heroAnimation() {
    gsap.fromTo(
      "#hero-display",
      { opacity: "0%" },
      { opacity: "100%", ease: "expo", duration: 12, delay: 0.5 }
    );
    gsap.fromTo(
      "#hero-sub_display",
      { opacity: "0%" },
      { opacity: "100%", ease: "expo", duration: 12, delay: 0.7 }
    );
    gsap.fromTo(".main_cta", { opacity: "0%" }, { opacity: "100%", ease: "expo", duration: 12, delay: 0.9 });
    gsap.fromTo(
      ".main_cta > *",
      { y: "-170%", opacity: "0%" },
      { y: "0%", opacity: "100%", ease: "expo", duration: 2, delay: 1.1 }
    );
    const outroAnimations = [
      { selector: "#hero-display", start: 150 },
      { selector: "#hero-sub_display", start: 200 },
      { selector: ".main_cta", start: 250 }
    ];
    
    outroAnimations.forEach(animation => {
      gsap.to(animation.selector, {
        y: "-100%",
        scrollTrigger: {
          trigger: animation.selector,
          start: animation.start,
          end: "800",
          scrub: 1
        }
      });
    });
    
  }
}

const animation = new Animation();
export { animation };
