document.addEventListener('DOMContentLoaded', function () {
    const oSpan = document.getElementById("o-characters");
  
    const getDelay = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  
    async function commitOAnimation() {
        if (oSpan.textContent.length * 80 >= (window.innerWidth - 11) - 80) {
            document.documentElement.style.setProperty('--intro-visible', 'visible');
            document.querySelector('.introduction').classList.add('fadeIn');
            return;
        }
  
        await getDelay((Math.floor(Math.random() * 300) + 150) / 2);
        oSpan.textContent = oSpan.textContent + "O";
        commitOAnimation();
    }
  
    commitOAnimation();
});
  