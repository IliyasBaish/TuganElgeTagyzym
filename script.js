let start = Date.now(); // запомнить время начала

let times = 1

let timer = setInterval(function() {
  if (times == 21) {
    document.getElementById("place-bttn-1").style.opacity = "1";
    return
  }
  
  document.getElementById("map").src = "/map-img/map" + String(times) + ".png"

  times = times + 1

}, 500);

function onPlaceBttnClick() {
  console.log("test")
  let entry = document.getElementById("map-container")
  entry.style.animation = entry.dataset.animate;
}


