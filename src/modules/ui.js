import { api } from './api';

class UI {
  constructor() {
    this.body = document.body;
  }
  appendPhotos(data) {
    data.map((photo) => {
      const url = photo.urls.regular;
      const img = document.createElement('img');
      img.setAttribute('src', `${url}`);
      this.body.appendChild(img);
    });
  }

  createLoadBtn() {
    const Btn = document.createElement('button');
    Btn.style.display = 'block';
    Btn.innerText = 'Load More';
    this.body.appendChild(Btn);

    Btn.addEventListener('click', async () => {
      // getData();
      await api.getRandomPhotos();
      this.appendPhotos(api.randomPhotosAPI);
      Btn.style.display = 'none';
      this.appendLoadBtn();
    });
  }
}

const ui = new UI();
export { ui };
