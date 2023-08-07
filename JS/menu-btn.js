const restOfMobile = document.querySelectorAll('footer, #sponsors, #drivers article:not(#driver[0], #driver[1])');
const moreBtn = document.querySelector('#more');
moreBtn.addEventListener("click", () => {
  restOfMobile.forEach((element) => {
    element.classList.remove('hidden');
  });
  moreBtn.classList.add('hidden');
});