import './styles/main.scss';

async function hamada() {
  const body = document.body
  const data = await fetch(
    'https://api.unsplash.com/photos/random?count=30&collections=4369173', {
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${process.env.ACCESS_KEY}`
      }
    }
  );
  const res = await data.json();
  console.log(res);
  res.map((e) => {
    const url = e.urls.regular;
    const img = document.createElement('img')
    img.setAttribute('src', `${url}`)
    body.appendChild(img)
  });
}

hamada();
