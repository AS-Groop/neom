let facades = document.querySelectorAll('.facade .product__item');
let windows = document.querySelectorAll('.window .product__item');
let main_facade = document.querySelector('.main_facade');
let main_win = document.querySelector('.main_win');

facades.forEach(item=>{
  item.addEventListener('click',(e)=>{
    let old_active = document.querySelector('.facade .product__item.active');
    if(!!old_active) old_active.classList.remove('active');
    let data = item.getAttribute('data-facade');
    item.classList.add('active');
    main_facade.dataset.type === 'main'
      ? main_facade.src = `./images/facade-${data}.jpg`
      : main_facade.src = `../images/facade-${data}.jpg`
  })
})


windows.forEach(item=>{
  item.addEventListener('click',(e)=>{
    let old_active = document.querySelector('.window .product__item.active');
    if(!!old_active) old_active.classList.remove('active');
    let data = item.getAttribute('data-window');
    item.classList.add('active');
    main_win.dataset.type === 'main'
      ? main_win.src = `./images/win_${data}.png`
      : main_win.src = `../images/win_${data}.png`
  })
})