

const hamBtn = document.getElementById("ham-btn");
  const hamMenu = document.getElementById("ham-menu");
  const closeBtn = document.getElementById("close-btn");

  hamBtn.addEventListener("click", () => {
    hamMenu.classList.remove("hidden");
    hamBtn.classList.add('hidden')
  });

  closeBtn.addEventListener("click", () => {
    hamMenu.classList.add("hidden");
    hamBtn.classList.remove('hidden')
  });