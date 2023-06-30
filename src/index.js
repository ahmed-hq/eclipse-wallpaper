import "./styles/main.scss";
import { api } from "./modules/api";
import { ui } from "./modules/ui";
import { animation } from "./modules/animation";

ui.createHeroSection();
ui.createGallerySection();
await api.getRandomPhotos();
ui.appendPhotos(api.randomPhotosAPI);
ui.createLoadBtn();
