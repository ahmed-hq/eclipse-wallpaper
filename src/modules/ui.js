import { api } from "./api";
import { element } from "./ui-modules/element";
import { hero } from "./ui-modules/hero";
import { nav } from "./ui-modules/nav";
import downloadIcon from "../assets/download.svg";
import upIcon from "../assets/up-arrow.svg";

class UI {
  constructor() {
    this.mainWrapper = element.divCreator("class", "main-wrapper", document.body);
    this.gallerySection = null;
    this.navbar = null;
    this.galleryWrapper = null;
  }

  createHeroSection() {
    const heroSection = element.sectionCreator("class", "hero-section", this.mainWrapper);
    hero.bgVideo(heroSection);
    hero.videoOverlay(heroSection);
    hero.displayHeader(heroSection);
    hero.createMainCta(heroSection);
  }

  createNavbar() {
    this.navbar = element.divCreator("class", "navbar", this.gallerySection);
    nav.createLogo(this.navbar);
    nav.displayOnScroll(this.navbar);
  }

  createGallerySection() {
    this.gallerySection = element.sectionCreator("class", "gallery-section", this.mainWrapper);
    this.createNavbar();
    const pagePadding = element.divCreator("class", "page-padding", this.gallerySection);
    this.galleryWrapper = element.divCreator("class", "gallery-wrapper", pagePadding);
  }

  appendPhotos(data) {
    data.map((photo) => {
      const url = photo.urls.regular;
      const photoName = photo.alt_description;
      const downloadURL = photo.urls.full;

      const imgWrapper = element.divCreator("class", "img-wrapper", this.galleryWrapper);
      imgWrapper.style.background = `url(${url}) no-repeat`;
      imgWrapper.style.backgroundSize = "cover";
      imgWrapper.style.backgroundPosition = "center";

      const imgPropWrapper = element.divCreator("class", "img_prop-wrapper", imgWrapper);

      const downloadCtaWrapper = element.divCreator("class", "download_cta-wrapper", imgPropWrapper);
      downloadCtaWrapper.style.opacity = "0";

      const downloadCta = element.divCreator("class", "download_cta", downloadCtaWrapper);
      element.imgCreator(downloadIcon, downloadCta);
      downloadCta.addEventListener("click", () => {
        api.downloadPhotos(photoName, downloadURL);
      });

      const imgPropOpenerWrapper = element.divCreator("class", "img_prop_opener-wrapper", imgPropWrapper);
      element.imgCreator(upIcon, imgPropOpenerWrapper);
      imgPropOpenerWrapper &&
        imgPropWrapper.addEventListener("mouseover", () => {
          downloadCtaWrapper.style.opacity = "100";
        });
      imgPropWrapper.addEventListener("mouseout", () => {
        downloadCtaWrapper.style.opacity = "0";
      });
    });
  }

  createLoadBtn() {
    const Btn = document.createElement("button");
    Btn.setAttribute("class", "load_more-btn");
    Btn.style.display = "block";
    Btn.innerText = "Load More";
    this.galleryWrapper.appendChild(Btn);

    Btn.addEventListener("click", async () => {
      // getData();
      await api.getRandomPhotos();
      this.appendPhotos(api.randomPhotosAPI);
      Btn.style.display = "none";
      this.createLoadBtn();
    });
  }
}

const ui = new UI();
export { ui };
