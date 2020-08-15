document.querySelector(".first-screen .navigation")
  .addEventListener('wheel', function(event) {
    if (event.deltaMode == event.DOM_DELTA_PIXEL) {
      var modifier = 1;
      // иные режимы возможны в Firefox
    } else if (event.deltaMode == event.DOM_DELTA_LINE) {
      var modifier = parseInt(getComputedStyle(this).lineHeight);
    } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
      var modifier = this.clientHeight;
    }
    if (event.deltaY != 0) {
      // замена вертикальной прокрутки горизонтальной
      this.scrollLeft += modifier * event.deltaY;
      event.preventDefault();
    }
  });
document.addEventListener('DOMContentLoaded',()=>{
  const objs = document.querySelector('.first-screen')
  showObj(objs,0)
})
function showObj(name,time){
  const elements = name.querySelectorAll('.obj')
  setTimeout(()=>{
    elements.forEach(obj=>{
      obj.classList.add('show')
    })
  },time)
}
document.addEventListener('scroll',e=>{
  const portfolio = document.querySelector('.portfolio')
  const advantages = document.querySelector('.advantages')
  let scroll = document.documentElement.scrollTop + window.innerHeight
  if (scroll > portfolio.offsetTop) {
    showObj(portfolio,0)
  }
  if (scroll > advantages.offsetTop) {
    showObj(advantages,0)
  }
})
// preloader()
function preloader() {
  const images = document.images,
        images_total_count = images.length,
        preloader = document.querySelector('.preloader'),
        perc_display = preloader.querySelectorAll('.preloader_percentage .perc')
  let images_loaded_count = 0
  for(let i=0; i<images_total_count; i++) {
    let image_clone = new Image()
    image_clone.onload = image_loaded
    image_clone.onerror = image_loaded
    image_clone.src = images[i].src
  }
  function image_loaded(){
    images_loaded_count++
    perc_display.innerHTML = `${(((100/images_loaded_count) * images_loaded_count) << 0)}%`
    if(images_loaded_count>=images_total_count) {
      setTimeout(() => {
        // !preloader.classList.contains('done') && preloader.classList.add('done')
      }, 1000);
    }
  }
  move()
  function move(){
    const back = document.querySelector('.preloader_back')
    let width = 1
    let id = setInterval(()=>{
      if (width >= 100) {
        clearInterval(id)
      } else {
        width++
        back.style.width = `${width}%`
        perc_display.forEach(display=>{
          display.innerHTML = addZero(width)
        })
      }
    }, 40);
  }
}
function addZero(number) {
    let perc = Math.trunc(number / 10)
    if (perc > 0 && perc < 10) return `0${number}`
    switch (perc) {
        case 0:
            return `00${number}`
        case 10:
            return number    
    }
}




