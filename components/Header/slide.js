function scrollDown(){
    window.scrollTo(0, document.body.scrollHeight);
}

var t = 0;

function headerAnimation(){
    var header_container = document.getElementsByClassName('header-slide-container');
    var header1 = document.getElementsByClassName('header-slide1');
    var header2 = document.getElementsByClassName('header-slide2');
    var slider_function = document.getElementsByClassName('slider-function-container');

    setInterval(function(){
        console.log(header1)
        if(t == 0){
            header1[0].classList.add('hide-header');

            header2[0].classList.remove('hide-header');
            slider_function[0].classList.add('slider-function-container-right');

            t += 1;
        }
        else{
            header1[0].classList.remove('hide-header');
            header2[0].classList.add('hide-header');
            slider_function[0].classList.remove('slider-function-container-right');

            t -= 1;
        }
    }, 5000)

}


setInterval(headerAnimation(), 3000);