const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

const changeBackgroundColor = () => {
  const rootElement = document.querySelector(".container");
  const linearColor = `linear-gradient(${getRandomColor()},${getRandomColor()})`;
  rootElement.style.background = linearColor;
};

window.addEventListener("load", () => {
  setInterval(() => {
    changeBackgroundColor();
  }, 2000);
});
