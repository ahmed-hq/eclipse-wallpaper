import { api } from "./api";
import ctaArrow from "../assets/cta-arrow.svg";
import bGVideo from "../assets/eclipse-bg-v2.mp4";

class Element {
  divCreator(attribute, attName, parent) {
    const div = document.createElement("div");
    div.setAttribute(`${attribute}`, `${attName}`);
    parent.appendChild(div);
    return div;
  }

  sectionCreator(attribute, attName, parent) {
    const section = document.createElement("section");
    section.setAttribute(`${attribute}`, `${attName}`);
    parent.appendChild(section);
    return section;
  }

  imgCreator(source, parent) {
    const img = new Image();
    img.src = source;
    parent.appendChild(img);
  }
}

class UI {
  constructor() {
    this.element = new Element();
    this.mainWrapper = this.element.divCreator("class", "main-wrapper", document.body);
    this.galleryWrapper = null;
  }
  createHeroSection() {
    const heroSection = this.element.sectionCreator("class", "hero-section", this.mainWrapper);

    const heroBgVideoWrapper = document.createElement("video");
    heroBgVideoWrapper.autoplay = true;
    heroBgVideoWrapper.muted = true;
    heroBgVideoWrapper.loop = true;
    heroBgVideoWrapper.setAttribute("id", "hero-video");
    heroSection.appendChild(heroBgVideoWrapper);

    const heroBgVideoSrc = document.createElement("source");
    heroBgVideoSrc.setAttribute("src", bGVideo);
    heroBgVideoSrc.setAttribute("type", "video/mp4");
    heroBgVideoWrapper.appendChild(heroBgVideoSrc);

    const blackOverlay = this.element.divCreator('id', 'black-overlay', heroSection)
    const blackGradientOverlay = this.element.divCreator('id', 'black_gradient-overlay', heroSection)


    const heroContentWrapper = this.element.divCreator("class", "hero_content-wrapper", heroSection);

    const heroDisplay = document.createElement("h1");
    heroDisplay.setAttribute("id", "hero-display");
    heroDisplay.textContent = "Explore";
    heroContentWrapper.appendChild(heroDisplay);

    const heroSubDisplay = document.createElement("h2");
    heroSubDisplay.setAttribute("id", "hero-sub_display");
    heroSubDisplay.textContent = "the Essence of Black in Minimal Wallpapers";
    heroContentWrapper.appendChild(heroSubDisplay);

    const mainCtaWrapper = this.element.divCreator("class", "main_cta-wrapper", heroSection);

    const mainCta = this.element.divCreator("class", "main_cta", mainCtaWrapper);
    this.element.imgCreator(ctaArrow, mainCta);
  }

  createGallerySection(){
    const gallerySection = this.element.sectionCreator("class", "gallery-section", this.mainWrapper);
    const pagePadding = this.element.divCreator("class", "page-padding", gallerySection);
    this.galleryWrapper = this.element.divCreator("class", "gallery-wrapper", pagePadding);



  }

  appendPhotos(data) {
    data.map((photo) => {
      console.log(data)
      const url = photo.urls.regular;
      

      const imgWrapper = this.element.divCreator('class', 'img-wrapper', this.galleryWrapper);
      imgWrapper.style.background = `url(${url}) no-repeat`
      imgWrapper.style.backgroundSize = 'cover'
      imgWrapper.style.backgroundPosition = 'center'
    });
  }

  createLoadBtn() {
    const Btn = document.createElement("button");
    Btn.setAttribute('class', 'load_more-btn')
    Btn.style.display = "block";
    Btn.innerText = "Load More";
    this.mainWrapper.appendChild(Btn);

    Btn.addEventListener("click", async () => {
      // getData();
      await api.getRandomPhotos();
      this.appendPhotos(api.randomPhotosAPI);
      Btn.style.display = "none";
      this.appendLoadBtn();
    });
  }
}

const ui = new UI();
export { ui };
