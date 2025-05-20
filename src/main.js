var Language;
(function (Language) {
    Language["uzbek"] = "salom";
    Language["english"] = "hello";
    Language["russian"] = "privet";
})(Language || (Language = {}));
var sayHello = function (str) {
    console.log(str);
};
sayHello(Language.uzbek);
