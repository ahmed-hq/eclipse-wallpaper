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
          { selector: "#hero-display", start: 50 },
          { selector: "#hero-sub_display", start: 150 },
        { selector: ".main_cta", start: 250 },
      ];
      
      outroAnimations.forEach((animation) => {
        gsap.to(animation.selector, {
          y: "-100%",
          scrollTrigger: {
            trigger: animation.selector,
            start: animation.start,
            end: "400",
            scrub: 3,
          },
        });
      });
    }
    
    mainCtaHoverAnimation() {
      const btn = document.querySelector(".main_cta");
      const children = btn.children;
      for (let i = 0; i < children.length; i++) {
        children[i].style.pointerEvents = "none";
      }
      btn.addEventListener("mouseover", () => {
        const timeline = gsap.timeline();
        timeline.to(btn.children, { y: "65%", ease: "expo", duration: 2 });
      });
    
      btn.addEventListener("mouseout", () => {
        const timeline = gsap.timeline();
        timeline.to(btn.children, { y: "0%", ease: "expo", duration: 1 });
      });
    }
    navScrollAnimation(target) {
      let animationDone = false;
      let timeline;
      target.style.opacity = "0%";
      window.addEventListener("scroll", (e) => {
        if (window.scrollY > 1000 && !animationDone) {
          // target.style.display = "flex";
          animationDone = true;
          timeline = gsap.fromTo(target, { opacity: "0%" }, { opacity: "100%", ease: "expo", duration: 2 });
        } else if (window.scrollY < 1000 && animationDone && timeline) {
          // target.style.display = "none";
          animationDone = false;
          timeline.reverse(0.2);
        }
      });
    }

    
  }
  
  const animation = new Animation();
  export { animation };
  