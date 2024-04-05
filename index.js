const mainMenu = document.querySelector('.main-menu')
const menuLinks = document.querySelectorAll('.main-menu a')
const iconEl = document.querySelector('.icon')
const hamEl = document.querySelector('.ham')

menuLinks.forEach((link) => {
    link.addEventListener('click', close)
})

hamEl.addEventListener('click', show);
iconEl.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';

}
function close() {
    mainMenu.style.top = '-100%';
}



document.addEventListener("DOMContentLoaded", function() {
  const currentYear = new Date().getFullYear();

  document.getElementById("currentYear").textContent = currentYear;
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
  scrollLinks.forEach(scrollLink => {
    scrollLink.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, 
          behavior: 'smooth'
        });
        document.querySelector('.header1 .nav1 ul li a').style.display = 'none';
      }
    });
  });
});
