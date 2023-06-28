import logo from "../../assets/logo.svg";
import { element } from "./element";

class Nav {
  createLogo(parent) {
    const logoWrapper = element.divCreator("class", "logo-wrapper", parent);
    element.imgCreator(logo, logoWrapper);
  }


}

const nav = new Nav();
export { nav };
