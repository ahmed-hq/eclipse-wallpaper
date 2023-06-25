import './styles/main.scss';
import { api } from './modules/api';

async function getData() {
  const body = document.body;
  
  await api.getRandomPhotos();
  api.randomPhotosAPI.map((e) => {
    const url = e.urls.regular;
    const img = document.createElement('img');
    img.setAttribute('src', `${url}`);
    body.appendChild(img);
  });

  const moreBtn = document.createElement('button');
  moreBtn.style.display = 'block';
  moreBtn.innerText = 'More';
  body.appendChild(moreBtn);
  moreBtn.addEventListener('click', () => {
    getData();
    moreBtn.style.display = 'none';
  });
}

getData();
