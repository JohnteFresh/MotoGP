const restOfMobile = document.querySelectorAll('footer, section, #drivers article:not(#driver0, #driver1)');
const moreBtn = document.querySelector('#more');
moreBtn.addEventListener('click', () => {
  restOfMobile.forEach((element) => {
    element.classList.remove('hidden');
  });
  moreBtn.classList.add('hidden');
});