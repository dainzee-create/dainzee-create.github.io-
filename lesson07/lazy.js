const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
  threshold: "1",
  rootMargin: "1px 1px 50px 1px"
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onLoad = () => {
    image.removeAttribute("data-src");};
};

if ("IntersectionObserver" in window) {
  const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        imgObserver.unobserve(item.target);
      }
    });
  }, imgOptions);

  imagesToLoad.forEach((img) => {
    imgObserver.observe(img)
  });
}
else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}