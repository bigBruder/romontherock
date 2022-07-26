export const addImageV2 = (url) => {
  const p = new Promise((resolved, reject) => {
    const imgElem = document.createElement("img");
    imgElem.setAttribute("alt", "My Photo");
    imgElem.src = url;
    const containerElem = document.querySelector(".page");
    containerElem.append(imgElem);

    const addImage = (callback) => {
      callback(null, { width, heigth });
    };
    imgElem.addEventListener("load", addImage);

    imgElem.addEventListener("error", () => callback("Image load failed"));
  });
  return p;
};
// examples

addImageV2("https://server.com/image.png")
  .then((data) => console.log(data)) // ==> { width: 200, height: 100 }
  .catch((error) => console.log(error)); // ==> 'Image load failed'
