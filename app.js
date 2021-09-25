function importScript(script, callback) {
  var scriptElement = document.createElement("script");
  scriptElement.type = "text/javascript";
  scriptElement.src = script;
  scriptElement.onload = function () {
    callback();
  };
  document.body.appendChild(scriptElement);
}

function importCSS(css, callback) {
  var linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = css;
  linkElement.onload = function () {
    callback();
  };
  document.head.appendChild(linkElement);
}

var allCSS = [
  "assets/css/style.css",
  "components/Header/style.css",
  "components/Slide1/style.css",
  "components/Slide2/style.css",
  "components/Slide3/style.css",
];

var allScript = [
  "assets/assets.js",
  "locales/en.js",
  "locales/fr.js",
  "utils/i18n.js",
  "utils/domListener.js",
  "components/Header/Header.js",
  "components/Slide1/Slide1.js",
  "components/Slide2/Slide2.js",
  "components/Slide3/Slide3.js",
  "pages/Home.js",
];

var scriptLoad = {
  count: 0,
  addCount: function () {
    this.count++;
    if (this.count === allScript?.length) {
      setupView();
    }
  },
};

var cssLoad = {
  count: 0,
  addCount: function () {
    this.count++;
    if (this.count === allCSS?.length) {
      // TODO on CSS loaded
    }
  },
};

for (var c = 0; c < allCSS.length; c++) {
  importCSS(allCSS[c], function () {
    cssLoad.addCount();
  });
}

for (var c = 0; c < allScript.length; c++) {
  importScript(allScript[c], function () {
    scriptLoad.addCount();
  });
}

function setupView() {
  createHomePage();
}
