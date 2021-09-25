function createHeader() {
    var header = `
    <div class="header-content">
        <div class="header-black">
            <div class="header-black-container">
                <div class="logo">
                    <div>the</div>
                    <div class="skyline">skyline</div>
                </div>
            </div>
            <div class="loading">
                <div class="loading-container">
                    <div class=""></div>
                </div>
            </div>
        </div>
        <div onclick="scrollDown()" class="btn-scroll-down">
            <p>scroll down</p>
            <div class="loading-horizontaly">
                <div class="loading-horizontaly-container">
                    <div class=""></div>
                </div>
            </div>
        </div>
        <div class="header-slide">
            <div class="header-slide-text">
                <div class="header-slide-black-container">
                    <div class="logo">
                        <div>the</div>
                        <div class="skyline">skyline</div>
                        <div class="skyline-txt">
                            <p>Movie-inspired Cinematic Openers</p>
                            <p>Excluvely for Final Cut Pro</p>
                        </div>
                    </div>
                </div>
                <div class="slider-header">
                    <div>
                        01 / 03
                    </div>
                    <div class="slider-function">
                        <div class="slider-function-container">
                            <div class=""></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-slide-container" id="header-slide-container">
                <div class="header-slide1" id="header-slide1">
                </div>
                <div class="header-slide2 hide-header" id="header-slide2">
                </div>
            </div>
        </div>
    </div>`;
    return header;
  }
  
  function renderHeader() {
    var header = createHeader()
    document.getElementById("homeContainer").innerHTML += header
  }
  