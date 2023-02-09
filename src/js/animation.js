// Text Typing Start

function typingStart(selector){
  let element = document.querySelector(selector);
  let text = '';
  if(element){
    text = element.innerText;
    let n = 0;
    typingText(text, n, element)
  }
}
let typingText = (text, n, element)=>{
  let interval = setInterval(()=>{
    if(n>=text.length) n = 0;
    if(n===0) element.innerText = '';
    if(text[n] === ' ') {
      element.innerText = element.innerText + text[n] + text[n + 1];
      n++
    } else element.innerText = element.innerText + text[n];
    n++;
    if(n===text.length) {
      clearInterval(interval);
      setTimeout(()=>{
        typingStart('.typing-home');
      },3000)
    }
  },100);
}

typingStart('.typing-home');

// Text Typing End


// Popup Slider Start
function sliderElements(selector){
  let elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    element.style.cursor = 'pointer';
    element.addEventListener('click', openImgPopup)
  });
}

function openImgPopup(e){
  let src = e.target.src;
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `<img src="${src}" alt="">`;
  document.body.appendChild(popup);
  popup.addEventListener('click',()=>{
    document.body.removeChild(popup)
  })
}

sliderElements('.comfort__slider-item')
// Popup Slider End

// Dropdown

function toggle(selector, classList){
  document.querySelector(selector).classList.toggle(classList)
}

document.querySelector('.h__lang-content').addEventListener('click',()=>toggle('.h__lang','active'))
document.querySelector('.h__lang-list').addEventListener('click',()=>toggle('.h__lang','active'))
document.querySelector('.h__toggle').addEventListener('click',()=> {
  toggle('.h__toggle', 'close');
  toggle('.h__content-mobile', 'open');
})
document.querySelector('.h__content-mobile').addEventListener('click',()=> {
  toggle('.h__toggle', 'close');
  toggle('.h__content-mobile', 'open');
})