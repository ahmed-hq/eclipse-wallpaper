class API {
  constructor() {
    this.randomPhotosAPI = null;
  }

  async getRandomPhotos() {
    const body = document.body;
    const res = await fetch("https://api.unsplash.com/photos/random?count=20&collections=l_pyR0TV5DU,9yejf7rOW5A", {
      method: "GET",
      headers: {
        Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
      },
    });
    this.randomPhotosAPI = await res.json();
    console.log(this.randomPhotosAPI);
  }

  downloadPhotos(photoName, url) {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${photoName}`;
        link.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.log("Error occurred while downloading the image:", error);
      });
  }
}

const api = new API();
export { api };
