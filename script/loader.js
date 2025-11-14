document.addEventListener("DOMContentLoaded", () => {
  const urlText = "www.yzziebernardo.dev";
  const urlEl = document.getElementById("typing-url");
  const preloader = document.getElementById("preloader");
  const main = document.getElementById("main-content");

  let i = 0;

  function typeURL() {
    if (i < urlText.length) {
      urlEl.textContent += urlText.charAt(i);
      i++;
      setTimeout(typeURL, 100);
    } else {
      setTimeout(() => {
        preloader.classList.add("hide");
        main.classList.remove("hidden");
        main.classList.add("show");

        document.dispatchEvent(new Event("preloaderDone"));
      }, 700);
    }
  }

  typeURL();
});
