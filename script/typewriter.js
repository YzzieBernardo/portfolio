// Start AFTER preloader is done
document.addEventListener("preloaderDone", () => {
  const el = document.getElementById("typing-role");

  const words = [
    "Freelancer",
    "Junior Web Developer",
    "Front-End Developer",
  ];

  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  const speed = 120;      // typing speed
  const deleteSpeed = 70; // deleting speed
  const delay = 1200;     // pause after full word

  function typeEffect() {
    const currentWord = words[index];

    if (!isDeleting) {
      // typing
      el.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, delay);
        return;
      }
    } else {
      // deleting
      el.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % words.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? deleteSpeed : speed);
  }

  typeEffect();
});
