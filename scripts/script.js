let menuIcon = document.querySelector(`#menu-icon`);
let navbar = document.querySelector(`.navbar`);

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
  navbar.classList.toggle('animate__animated animate__bounce animate__delay-1s');
  navbar.classList.toggle('animate__fadeInDown'); 
}

window.onscroll = () =>{
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute( 'id' );
    if (top >= offset && top < offset + height){
       navLinks.forEach(links => {
        links.classList.remove('active');
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        document.querySelector('header nav a[href*='+ id +']').classList.add('active');
       }) 
    }
  })
}


// SKILLS SECTION

document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillsList = document.querySelector('.skills-list');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = btn.dataset.filter;

      filterBtns.forEach(btn => {
        btn.classList.remove('active');
      });
      btn.classList.add('active');

      

      

      skillsList.querySelectorAll('.skill').forEach(skill => {
        console.log(skill)
        
        setTimeout(function() {
            skill.style.top = 0;
            skill.style.left = 0;
            skill.style.transform = `scale(0)`;
            skill.style.opacity = 0;
            
            setTimeout(function() {
              skill.style.display = 'none';
            }, 300); 
        }); 
      
        
        if (filter === 'all' || skill.classList.contains(filter)) {
          
          setTimeout(function() {
            skill.style.top = 0;
            skill.style.left = 0;
            skill.style.transform = `scale(0)`;
            skill.style.transform = `scale(1)`;
              skill.style.opacity = 1;
              setTimeout(function() {
                skill.style.display = 'block';
              }, 300);
          });

          
        }
      });
    });
  });
});



// ANIMATION

// ABOUT 
const obsesrverA = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
    else{
      entry.target.classList.remove('show');
    }
  })
})

const hiddenElementsA = document.querySelectorAll('.hidden');
hiddenElementsA.forEach((el) => obsesrverA.observe(el))


// SKILL
const obsesrverS = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    if(entry.isIntersecting){
      entry.target.classList.add('show-skill');
    }
    else{
      entry.target.classList.remove('show-skill');
    }
  })
})


const hiddenElementsS = document.querySelectorAll('.hidden-skill');
hiddenElementsS.forEach((el) => obsesrverS.observe(el))


// PROJECT
const obsesrverP = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    if(entry.isIntersecting){
      entry.target.classList.add('show-project');
    }
    else{
      entry.target.classList.remove('show-project');
    }
  })
})

const hiddenElementsP = document.querySelectorAll('.hidden-project');
hiddenElementsP.forEach((el) => obsesrverP.observe(el))


// CONTACTS
const obsesrverC = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    if(entry.isIntersecting){
      entry.target.classList.add('show-contacts');
    }
    else{
      entry.target.classList.remove('show-contacts');
    }
  })
})

const hiddenElementsC = document.querySelectorAll('.hidden-contacts');
hiddenElementsC.forEach((el) => obsesrverC.observe(el))



// DARK THEME ANIMATION

let icon = document.getElementById('icon');

icon.onclick = function(){
  document.body.classList.toggle('dark-theme');

  if(document.body.classList.contains('dark-theme')){
    icon.src = 'imgs/sun.png';
  }else{
    icon.src = 'imgs/moon.png';
  }
}
  
//download cv
document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.btn-cv');

  button.addEventListener('click', function() {
      const link = document.createElement('a');
      link.href = '../CV_Gerome_Dimaranan.pdf'; // Replace with the actual path to your CV file
      link.download = 'CV_Gerome_Dimaranan.pdf'; // The name of the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  });
});
