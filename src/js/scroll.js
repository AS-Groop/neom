function activeSection() {
  activeHeader();
  let section = document.querySelectorAll('section');
  let menu = document.querySelectorAll('.h__link');
  let secLength = section.length
  while (--secLength && window.scrollY + 100 < section[secLength].offsetTop){}
  // console.log(section[secLength].id)
  menu.forEach(item => {
    item.classList.remove('active');
    if(item.dataset.url === section[secLength].id) {
      item.classList.add('active')
    }
  });
}

function activeHeader(){
  let header = document.getElementById('header');
  if (window.scrollY > 40)
    header.classList.add('active')
  else
    header.classList.remove('active')
}

window.addEventListener('scroll',activeSection)


window.addEventListener('load', () => {
  // setTimeout(()=>{
  //   document.body.style.overflow = 'auto';
  //   document.querySelector('.win-loader').classList.remove('active')
  // },3000)
});