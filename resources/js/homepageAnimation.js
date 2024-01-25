document.addEventListener('DOMContentLoaded', function () {
    const oSpan = document.getElementById("o-characters");
  
    const getDelay = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  
    async function commitOAnimation(tick) {
        if (oSpan.textContent.length * 80 >= (window.innerWidth - 11) - 80) {
            document.documentElement.style.setProperty('--intro-visible', 'visible');
            document.querySelector('.introduction').classList.add('fadeIn');
            return;
        }
  
        await getDelay(tick);
        oSpan.textContent = oSpan.textContent + "O";
        commitOAnimation(tick - 5.2);
    }
  
    commitOAnimation(200);
});
  