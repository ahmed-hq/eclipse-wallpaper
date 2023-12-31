import { element } from "./element";
import { ui } from "../ui";
import bGVideoSrc from "../../assets/eclipse-bg-v2.mp4";

class Hero {
  constructor() {}

  bgVideo(parent) {
    const myVideo = document.createElement("video");
    myVideo.autoplay = true;
    myVideo.loop = true;
    myVideo.muted = true;
    myVideo.setAttribute("id", "hero-video");
    parent.appendChild(myVideo);

    const myVideoSrc = document.createElement("source");
    myVideoSrc.setAttribute("src", bGVideoSrc);
    myVideoSrc.setAttribute("type", "video/mp4");
    myVideo.appendChild(myVideoSrc);
  }

  videoOverlay(parent) {
    const blackOverlay = element.divCreator("id", "black-overlay", parent);
    const blackGradientOverlay = element.divCreator("id", "black_gradient-overlay", parent);
  }

  displayHeader(parent) {
    const heroContentWrapper = element.divCreator("class", "hero_content-wrapper", parent);

    const heroDisplay = document.createElement("h1");
    heroDisplay.setAttribute("id", "hero-display");
    heroDisplay.textContent = "Explore";
    heroContentWrapper.appendChild(heroDisplay);

    const heroSubDisplay = document.createElement("h2");
    heroSubDisplay.setAttribute("id", "hero-sub_display");
    heroSubDisplay.textContent = "the Essence of Black in Minimal Wallpapers";
    heroContentWrapper.appendChild(heroSubDisplay);
  }

}

const hero = new Hero();
export { hero };
