(()=>{
  const section = document.currentScript.closest('section');
  const stack = section.querySelector(".image-slider__cards__wrapper");
  let touchStartX = 0;
  let touchEndX = 0;

  stack.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  });

  stack.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    if (swipeDistance > 50) {
      moveCardBack()      
    } else if (swipeDistance < -50) {
      moveCardAhead()
    }
  }

  function moveCardAhead() {
    const lastCard = stack.firstElementChild;
    if (lastCard.classList.contains("image-slider__card")) {
      stack.firstElementChild.classList.add("swap-ahead");

      setTimeout(() => {
        stack.appendChild(lastCard);
        lastCard.classList.remove("swap-ahead");

        updatePagination()
      }, 500);
    }
  }

  function moveCardBack() {
    const lastCard = stack.lastElementChild;
    if (lastCard.classList.contains("image-slider__card")) {

      stack.insertBefore(lastCard, stack.firstElementChild);
      lastCard.classList.add("swap-back");

      setTimeout(() => {
        lastCard.classList.remove("swap-back");

        updatePagination()
      }, 500);
    }
  }


  stack.addEventListener("click", moveCardAhead);

  section.querySelectorAll('[data-navigation-type]').forEach(navigationButton => {
    navigationButton.addEventListener('click', () => {
      navigationButton.dataset.navigationType === "next" ? moveCardAhead() : moveCardBack();
    });
  })

  function updatePagination(){
    section.querySelectorAll('[data-pagination-unit]').forEach(unit => {
      unit.classList.toggle("active", unit.dataset.index === stack.firstElementChild.dataset.index);
    })
  }
})()