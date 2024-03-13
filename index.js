/*

// so first i try to create a variable in which i can et all document in that file
const sidebar = document.getElementById('all');
const bar = document.getElementById('ham');
const sidecancel = document.getElementById('icon');

// now is to add the event listener to where i want, having the event and a function
 bar.addEventListener('click',bringNav);
 sidecancel.addEventListener('click',bringNav);
   

  function bringNav(){
    sidebar.classList.toggle('hide');
  }
  //  function takeNav(){
  //   sidebar.classList.remove('hide');
  // }

  */



const headerEl = document.querySelector('header nav')
const hamEl = document.querySelector('#ham')
const iconEl = document.querySelector('#icon')

hamEl.addEventListener('click', () => { 
  headerEl.classList.toggle('hide')
  hamEl.style.display = 'none';
  iconEl.style.display = 'block';
  console.log(iconEl)
}

)
iconEl.addEventListener('click', () => { 
  headerEl.classList.toggle('hide')
  hamEl.style.display = 'block';
  iconEl.style.display = 'none';
  console.log(iconEl)
}

)
document.addEventListener("DOMContentLoaded", function() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Update the content of the element with the ID "currentYear"
  document.getElementById("currentYear").textContent = currentYear;
});

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for all links with the class "smooth-scroll"
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
  scrollLinks.forEach(scrollLink => {
    scrollLink.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for fixed header height
          behavior: 'smooth'
        });
  
        // Hide the navigation menu after clicking a link
        document.querySelector('header nav').style.display = 'none';
      }
    });
  });
});
