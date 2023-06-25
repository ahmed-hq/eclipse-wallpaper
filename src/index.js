import './styles/main.scss';
import { api } from './modules/api';
import { ui } from './modules/ui';

async function getData() {
  const body = document.body;
  
  await api.getRandomPhotos();
  ui.appendPhotos(api.randomPhotosAPI)
  
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
