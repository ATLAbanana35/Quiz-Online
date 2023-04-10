document.querySelector("header").addEventListener("click", () => {
  document.querySelector("header").style.top = "-1000px";
});
setInterval(() => {
  document.querySelector("header").style.top = "-1000px";
}, 5000);
