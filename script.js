var headerText = document.getElementById("header-text");
var headerCover = document.getElementById("text-cover");
//document.getElementById("text-cover").textContent = headerText.offsetWidth + " " + headerText.offsetHeight;
headerCover.style.width = headerText.offsetWidth + "px";
headerCover.style.height = headerText.offsetHeight + "px";
headerCover.style.marginTop = headerText.offsetHeight + "px";

const newspaperSpinning = [
    { marginTop: '0px' },
    { marginTop: headerText.offsetHeight + "px" }
  ];
  
const newspaperTiming = {
    duration: 2000,
    iterations: 1,
    easing: 'ease-in-out'
  }

headerCover.animate(newspaperSpinning, newspaperTiming);

document.addEventListener("resize", function(){
    headerCover.style.width = headerText.offsetWidth + "px";
    headerCover.style.height = headerText.offsetHeight + "px";
    headerCover.style.marginTop = headerText.offsetHeight + "px";
})