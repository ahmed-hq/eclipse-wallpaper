import logo from "../../assets/logo.svg";
import { element } from "./element";


class Nav {
  createLogo(parent){
    const logoWrapper = element.divCreator("class", "logo-wrapper", parent);
    element.imgCreator(logo, logoWrapper);
  }

  displayOnScroll(target){
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 1000) {
        target.style.display = "flex";
      } else {
        target.style.display = "none";
      }
    });
  }
}

const nav = new Nav()
export { nav }