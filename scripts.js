
const catImg= document.getElementById("cat_heart");
const title= document.getElementById("letter-heading");

const yesBtn= document.querySelector(".btn[alt='yes']");
const noBtn= document.querySelector(".no-btn");
const buttons = document.getElementById("buttons");
const finalText = document.getElementById("final-text");

noBtn.addEventListener("mouseover", ()=> {
  const min=200;
  const max=200;

  const distance = Math.random() * (max-min)+min;
  const angle = Math.random() * Math.PI *2;

  const moveX= Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  noBtn.style.transition = "transform 0.3s ease";
  noBtn.style.transform =  `translate(${moveX}px, ${moveY}px)`
});

yesBtn.addEventListener("click", () => {
  title.textContent = "Yayyyyy!";
  catImg.src = "cat_dance.gif";
  
  // Use the class to hide buttons but keep the layout stable
  buttons.classList.add("hidden-keep-space");
  
  // Show the final text
  finalText.style.display = "block";
});