const imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
  threshold: 6,
  rootMargin: "0 0 500px"
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}