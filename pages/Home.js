function createHomePage() {
//   var num = 4;
//   var rotation = 0;
//   var maxw = 0;
//   var maxh = 0;
    var slide2 = createSlide2()
  var homePage = `<div id="homeContainer"
        <div class="header-container">Header</div>
        <div id="slide1" class="slide-1-container">Slide 1</div>
        `
        + slide2 +
        `
        <div id="slide3" class="slide-3-container">Slide 3</div>
    </div>`;
  document.getElementById("main").innerHTML = homePage;
  setupListner();
}

function setupListner() {
  var container = document.getElementById("homeContainer");
//   container.onwheel = function (event) {
//     if (event.deltaY < 0) {
//       console.log("scrolling up");
//     } else if (event.deltaY > 0) {
//       console.log("scrolling down");
//     }
//     document.querySelector(".slide-2-container").classList.add("rotateBTT");
//   };
}
