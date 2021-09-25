var locales = {
  en,
  fr,
};

var userLang = navigator.language || navigator.userLanguage;
console.log('Language : ', userLang)

var defaultActiveLocale = '';

var checkIfChoosed = localStorage.getItem('locale');
console.log('checkIfChoosed : ', checkIfChoosed)

if (checkIfChoosed) {
  defaultActiveLocale = checkIfChoosed;
} else {
  var checkUserLocale = Object.keys(locales)?.find(function (locale, index) {
    if (userLang?.indexOf(locale) !== -1) {
      return 1;
    }
    return 0
  })
  if (checkUserLocale) {
    defaultActiveLocale = checkUserLocale;
  } else {
    defaultActiveLocale = 'fr';
  }
}

var i18n = {
  locale: defaultActiveLocale,
  setLocale: function (locale) {
    var oldLocale = locales[i18n.locale];
    this.locale = locale;
    try {
      localStorage.setItem('locale', locale);
    } catch (error) {
      console.log(error);
    }
    function lookForDomTextNodeChild(element, deep = 0) {
      var domChild = element.childNodes;
      domChild?.forEach(function (child) {
        if (child?.nodeName === "#text") {
          var parentOfText = child?.parentNode;
          var textTo = child?.data;
          textTo = textTo?.replace(/\r\n|\n|\r/g, "");
          textTo = textTo?.replace(/\s+/g, " ").trim();
          if (!!textTo) {
            var checkTextPath = '';
            function lookForTextInLocale(obj, textToSearch, keyPath) {
              Object.keys(obj).map(function (oldKey, ind) {
                if (typeof obj[oldKey] === "object") {
                  keyPath += keyPath === "" ? oldKey : "." + oldKey;
                  lookForTextInLocale(obj[oldKey], textToSearch, keyPath);
                } else if (typeof obj[oldKey] === "string") {
                  if (textToSearch === obj[oldKey]) {
                    keyPath += keyPath === "" ? oldKey : "." + oldKey;
                    checkTextPath = keyPath;
                  }
                }
                return "";
              });
            }
            lookForTextInLocale(oldLocale, textTo, "");
            if (!!checkTextPath) {
              var trans = i18n.t(checkTextPath);
              child.data = trans;
            }
          } else {
            // TODO
          }
        } else if (child?.hasChildNodes()) {
          lookForDomTextNodeChild(child, deep + 1);
        }
      });
    }
    lookForDomTextNodeChild(document.querySelector("body"));
  },
  t: function (dataKey) {
    var keys = dataKey.split(".");
    return keys?.reduce(function (obj, i) {
      return obj[i];
    }, locales[this.locale]);
  },
};
