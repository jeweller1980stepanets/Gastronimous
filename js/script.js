(function(){
  moveleft.addEventListener("click", moveLeft);
  moveright.addEventListener("click", moveRight);
  video.addEventListener("click", displ_of);

})();

function moveLeft(){
  var marginLeft = parseInt(sliderUl.style.marginLeft);
  
  if(isNaN(marginLeft))
  {
     marginLeft = 0;
   }

 
  if(marginLeft>-4670){
    marginLeft -= 938;
  }
  
  sliderUl.style.marginLeft = marginLeft+"px";
  slider.style.marginTop = marginT + "px";  
  
}

function moveRight(){
  var marginLeft = parseInt(sliderUl.style.marginLeft);
  if(isNaN(marginLeft))
  {
     marginLeft = 0;
   }

 
  if (marginLeft<0) {
    marginLeft += 938;
 
}
  sliderUl.style.marginLeft = marginLeft+"px";
}
function displ_of () {
   video_img.style.display = 'none';
   video.style.display = 'none'; 
   vd.style.display = 'block'; 

}