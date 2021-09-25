function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}

window.onscroll = function () {
    var slide2 = document.querySelector('.slide-2-container');
    console.log(isScrolledIntoView(slide2));
    var isAnimatedSlide2 = document.querySelector('.noOp');
    if (isAnimatedSlide2) {
        // 
    } else if (isScrolledIntoView(slide2)) {
        slide2.classList.add('noOp');
        document.querySelector('.text-left-1').classList.add('animeToShow');
    }
}