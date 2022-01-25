
  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');
  let timerId = null;

  
  startBtn.addEventListener ('click', () => {
      timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
      }, 1000);
      startBtn.disabled = true;
    });

    stopBtn.addEventListener("click", () => {
        clearInterval(timerId);
        startBtn.disabled = false;
      });


      function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      }
