   document.addEventListener('DOMContentLoaded', () => {
      const urlText = "https://yzziebernardo.github.io/"; 
      const typingEl = document.getElementById('typing-url');
      const preloader = document.getElementById('preloader');
      const main = document.getElementById('main-content');

      let index = 0;
      const speed = 100; 

      function type() {
        if (index < urlText.length) {
          typingEl.textContent += urlText.charAt(index);
          index++;
          setTimeout(type, speed);
        } else {

          setTimeout(() => {
            preloader.classList.add('hide');
            main.classList.remove('hidden');
            main.classList.add('show');
          }, 700);
        }
      }

      type();
    });