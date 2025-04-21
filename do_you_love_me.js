document.addEventListener("DOMContentLoaded", function() {
  const questionContainer = document.querySelector(".question-container");
  const resultContainer = document.querySelector(".result-container");
  const gifResult = document.querySelector(".gif-result");
  const heartLoader = document.querySelector(".cssload-main");
  const yesBtn = document.querySelector(".js-yes-btn");
  const noBtn = document.querySelector(".js-no-btn");
  
  
  // No button - Move randomly
  noBtn.addEventListener("mouseover", () => {
    const containerWidth = questionContainer.offsetWidth - noBtn.offsetWidth;
    const containerHeight = questionContainer.offsetHeight - noBtn.offsetHeight;
  
    const newX = Math.floor(Math.random() * containerWidth);
    const newY = Math.floor(Math.random() * containerHeight);
  
    noBtn.style.position = "absolute";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
  });
  
  // Yes button - Show heart loading then result
  yesBtn.addEventListener("click", () => {
    questionContainer.style.display = "none";
    heartLoader.style.display = "inherit";
    
    // Play audio
    const audio = document.getElementById("love-audio");
    if (audio) {
      audio.play().catch((err) => {
        console.error("Audio error:", err);
      });
    }
   audio.loop = true;
  
    setTimeout(() => {
      heartLoader.style.display = "none";
      resultContainer.style.display = "inherit";
      gifResult.play();
    }, 3000);
  });
      document.addEventListener("mousemove", function(e) {
          const heart = document.createElement("div");
          heart.textContent = "💖";
          heart.style.position = "absolute";
          heart.style.left = e.pageX + "px";
          heart.style.top = e.pageY + "px";
          heart.style.pointerEvents = "none";
          heart.style.fontSize = "25px";
          heart.style.animation = "fadeOut 1s forwards";
          document.body.appendChild(heart);
          setTimeout(() => heart.remove(), 2000);
      });
  
      // Animation CSS
      const style = document.createElement("style");
      style.textContent = `
          @keyframes fadeOut {
              0% { opacity: 1; transform: translateY(0px) scale(1); }
              100% { opacity: 0; transform: translateY(-20px) scale(0.5); }
          }
      `;
      document.head.appendChild(style);
      yesBtn.addEventListener("click", () => {
        confetti({
          particleCount: 150,
          spread: 60,
          origin: { y: 0.6 }
        });
      });  
      
 });
 