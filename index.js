const navEl = document.querySelector('.header1 .nav1')
const headerEl = document.querySelector('.header1 .nav1')
const hamEl = document.querySelector('#ham')
const iconEl = document.querySelector('#icon')

document.querySelectorAll('.nav1 ul li a').forEach(n => n.addEventListener('click', () =>{
hamEl.classList.add('hide');
iconEl.classList.add('hide');
}))

hamEl.addEventListener('click', () =>{
  hamEl.classList.toggle('hide');
  iconEl.classList.toggle('hide');
})

// hamEl.addEventListener('click', () => { 
//   navEl.style.display = 'block'
//   hamEl.style.display = 'none';
//   iconEl.style.display = 'block';
//   console.log(iconEl)
// }

// )
// iconEl.addEventListener('click', () => { 
//   navEl.style.display = 'none'
//   hamEl.style.display = 'block';
//   iconEl.style.display = 'none';
//   console.log(iconEl)
// }

// )
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
