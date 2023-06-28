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
    gsap.fromTo(
      ".main_cta",
      { opacity: "0%" },
      { opacity: "100%", ease: "expo", duration: 12, delay: 0.9 }
    );
    gsap.fromTo(
      ".main_cta > *", 
      { y: "-170%" },
      { y: "0%", ease: "expo", duration: 2, delay: 1.1}
    )
  }
}

const animation = new Animation();
export { animation };
