class UI {
  constructor(){
  this.body = document.body;
  }
  appendPhotos(data){
    data.map((photo) => {
      const url = photo.urls.regular;
      const img = document.createElement('img');
      img.setAttribute('src', `${url}`);
      this.body.appendChild(img);
    });
  }
}

const ui = new UI();
export { ui }
