import './styles/main.scss';

async function hamada() {
  const body = document.body
  const data = await fetch(
    'https://api.unsplash.com/photos/', {
      method: 'GET',
      headers: {
        Authorization: `Client-ID xL89z7hn8F3AhY7j8f23z2mNIR9qGyU3338Yw4sdjI4`
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
