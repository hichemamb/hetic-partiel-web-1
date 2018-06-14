var key = {
  burgerIcon : document.querySelector('.burgerIcon'),
  burgerExit : document.querySelector('.burgerExit'),
  mainNav : document.querySelector('#mainav'),
}

function showMenu(){
key.burgerIcon.addEventListener('click',function(){
  key.mainNav.style.display='block';
  key.mainNav.style.animationName='fadeIn';
  key.mainNav.style.animationDuration='2s';
  key.burgerIcon.style.display='none';
  key.burgerExit.style.display='block';
})

key.burgerExit.addEventListener('click',function(){
  setTimeout(function(){key.mainNav.style.display='none';},2000);
  key.mainNav.style.animationName='fadeOut';
  key.mainNav.style.animationDuration='2s';
  key.burgerIcon.style.display='block';
  key.burgerExit.style.display='none';
})
}

document.addEventListener("scroll", function(){
   var getScrollTop = document.documentElement.scrollTop;
   if (getScrollTop > 100){
     key.mainNav.style.display='block';
   } else{
     key.mainNav.style.position='fixed';
   }
});


window.addEventListener('load',function(){
  showMenu();
})
