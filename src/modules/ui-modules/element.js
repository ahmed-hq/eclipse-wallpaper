class Element {
  divCreator(attribute, attName, parent) {
    const div = document.createElement("div");
    div.setAttribute(`${attribute}`, `${attName}`);
    parent.appendChild(div);
    return div;
  }

  sectionCreator(attribute, attName, parent) {
    const section = document.createElement("section");
    section.setAttribute(`${attribute}`, `${attName}`);
    parent.appendChild(section);
    return section;
  }

  imgCreator(source, parent) {
    const img = new Image();
    img.src = source;
    parent.appendChild(img);
  }

  vidCreator(idAtt, src, parent, autoplay, loop, muted){
    const myVideo = document.createElement("video");
    myVideo.autoplay = autoplay;
    myVideo.loop = loop;
    myVideo.muted = muted;
    myVideo.setAttribute("id", `${idAtt}`);
    parent.appendChild(myVideo);

    const myVideoSrc = document.createElement("source");
    myVideoSrc.setAttribute("src", src);
    myVideoSrc.setAttribute("type", "video/mp4");
    myVideo.appendChild(myVideoSrc);

  }
}

const element = new Element();
export { element }