function fixedOnResize(){var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;e<=768&&(header.classList.add("fixed-header"),nav.style.display="block"),e>768&&(header.classList.remove("fixed-header"),nav.style.display="none")}function fixedHeader(){var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,d=document.documentElement.scrollTop||document.body.scrollTop,o=document.getElementById("header");console.log(d),e>768&&(d>230?o.classList.add("fixed-header"):o.classList.remove("fixed-header"))}function initMap(){var e={lat:52.229852,lng:21.011723},d=new google.maps.Map(document.getElementById("map"),{zoom:14,center:e});new google.maps.Marker({position:e,map:d})}function openModal(){document.getElementById("myModal").style.display="block",document.querySelector("body").classList.add("no-scroll"),document.getElementById("moments-page-wrap").classList.add("blur")}function closeModal(){document.getElementById("myModal").style.display="none",document.querySelector("body").classList.remove("no-scroll"),document.getElementById("moments-page-wrap").classList.remove("blur")}function changeModSlide(e){showModSlides(modSlideIndex+=e)}function currentModSlide(e){showModSlides(modSlideIndex=e-1)}function showModSlides(e){for(e+1>slides.length&&(modSlideIndex=0),e<0&&(modSlideIndex=slides.length-1),i=0;i<slides.length;i++)slides[i].style.display="none";for(slides[modSlideIndex].style.display="block",i=0;i<dots.length;i++)dots[i].classList.remove("active");dots[modSlideIndex].classList.add("active")}function scrollDown(){window.scrollBy({top:window.innerHeight,left:0,behavior:"smooth"})}function showSlides(){var e,d=document.getElementsByClassName("mySlides"),o=document.getElementsByClassName("dot");for(e=0;e<d.length;e++)d[e].style.display="none";for(++slideIndex>d.length&&(slideIndex=1),e=0;e<o.length;e++)o[e].className=o[e].className.replace(" active","");d[slideIndex-1].style.display="block",o[slideIndex-1].className+=" active",setTimeout(showSlides,1e4)}var body=document.getElementsByTagName("body")[0],nav=document.getElementsByTagName("nav")[0];window.onscroll=function(){fixedHeader()},body.onresize=function(){fixedOnResize()},fixedOnResize();var loader=document.getElementById("loader"),mainSlideShow=document.getElementById("slideShow"),modalpage=document.getElementById("myModal");if(modalpage){var modSlideIndex=0,slides=document.getElementsByClassName("myModSlides"),slidesLength=slides.length,dots=document.getElementsByClassName("mod-img");showModSlides(modSlideIndex),document.addEventListener("keydown",function(e){switch(e.key){case"ArrowRight":case" ":changeModSlide(1);break;case"ArrowLeft":changeModSlide(-1);break;case"Escape":closeModal()}})}var btnScroll=document.getElementsByClassName("btn-scroll")[0];btnScroll.addEventListener("click",scrollDown);if(mainSlideShow=document.getElementById("slideShow")){var slideIndex=0;showSlides()}