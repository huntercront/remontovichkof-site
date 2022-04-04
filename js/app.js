var Loader = function() {};
Loader.prototype = { require: function(a, b) { this.loadCount = 0, this.totalRequired = a.length, this.callback = b; for (var c = 0; c < a.length; c++) this.writeScript(a[c]) }, loaded: function() { this.loadCount++, this.loadCount == this.totalRequired && "function" == typeof this.callback && this.callback.call() }, writeScript: function(a) { var b = this,
            c = document.createElement("script");
        c.type = "text/javascript", c.defer = !0, c.src = a, c.addEventListener("load", function(a) { b.loaded(a) }, !1), document.getElementsByTagName("head")[0].appendChild(c) } };
let tabIndicator = document.querySelector(".tab-indicator");
setCurentTab(document.querySelector(".tab-btn.active"));

function setCurentTab(a) { tabIndicator.style.left = a.offsetLeft + "px", tabIndicator.style.width = a.offsetWidth + "px", a.classList.add("active") }
let tabs = document.querySelectorAll(".tab-btn");
tabs.forEach(function(a) { a.addEventListener("click", function() { let b = document.querySelector(".tab-btn.active"),
            c = document.querySelector(".tab-content.active-tab");
        b.classList.remove("active"), c.classList.remove("active-tab"); let d = document.querySelector("[ tab-content=\"" + a.getAttribute("data-tab") + "\"]");
        d.classList.add("active-tab"), setCurentTab(a), window.matchMedia("(max-width: 1024px)").matches && document.querySelector(".tab-btn.active").scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" }) }) });
let menu = document.querySelector(".m-menu"),
    header = document.querySelector(".header");
menu.addEventListener("click", function() { header.classList.contains("menu-show") ? header.classList.remove("menu-show") : header.classList.add("menu-show") });
var l = new Loader;
l.require(["./js/siema.min.js"], function() { const a = new Siema({ selector: ".slider-zone", duration: 300, easing: "ease-out", startIndex: 0, draggable: !0, multipleDrag: !0, threshold: 20, loop: !1, rtl: !1, perPage: { 300: 1 }, onChange: function() { let a = e[this.currentSlide];
            document.querySelector(".slide-active").classList.remove("slide-active"), a.classList.add("slide-active"), f.textContent = a.getAttribute("data-title"), g.textContent = this.currentSlide + 1, h.textContent = a.getAttribute("data-text") } }); let b = a.innerElements.length,
        c = document.querySelector(".how-works .next"),
        d = document.querySelector(".how-works .prew");
    d.addEventListener("click", () => a.prev()), c.addEventListener("click", () => a.next()); let e = document.querySelectorAll(".w-slide"),
        f = document.querySelector(".step-title .title-h4"),
        g = document.querySelector(".step-number span"),
        h = document.querySelector(".step-details p");
    e.forEach(function(b, c) { b.querySelector(".title-h6").addEventListener("click", function() { a.goTo(c) }) }), Siema.prototype.myltySlides = function() { let a = this.selector.closest(".tab-galery").querySelector(".prew"),
            b = this.selector.closest(".tab-galery").querySelector(".next");
        a.addEventListener("click", () => this.prev()), b.addEventListener("click", () => this.next()) }; let i = document.querySelectorAll(".galery-inner");
    i.forEach(function(a) { const b = new Siema({ selector: a, duration: 300, easing: "ease-out", startIndex: 0, draggable: !0, multipleDrag: !0, threshold: 20, loop: !1, rtl: !1, perPage: { 300: 1 } });
        b.myltySlides() }); let j = document.querySelector(".reviews-slider .slider-inner"); const k = new Siema({ selector: j, duration: 300, easing: "ease-out", startIndex: 0, draggable: !0, multipleDrag: !0, threshold: 20, loop: !1, rtl: !1, perPage: { 300: 1, 640: 2, 956: 3 } }); let l = document.querySelector(".reviews .next"),
        m = document.querySelector(".reviews .prew");
    m.addEventListener("click", () => k.prev()), l.addEventListener("click", () => k.next()); let n = document.querySelector(".ms-inner"); const o = new Siema({ selector: n, duration: 300, easing: "ease-out", startIndex: 0, draggable: !0, multipleDrag: !0, threshold: 20, loop: !1, rtl: !1, perPage: { 300: 1 } }); let p = document.querySelector(".sucses-modal .next"),
        q = document.querySelector(".sucses-modal .prew");
    q.addEventListener("click", () => o.prev()), p.addEventListener("click", () => o.next()); const r = new Siema({ selector: ".hero-slider", duration: 300, easing: "ease-out", startIndex: 0, draggable: !0, multipleDrag: !0, threshold: 20, loop: !0, rtl: !1, perPage: { 300: 1 } });
    setInterval(() => r.next(), 1e3 * document.querySelector(".hero-slider").getAttribute("data-slide")); let s = document.querySelector(".hero-form .next"),
        t = document.querySelector(".hero-form .prew");
    t.addEventListener("click", () => r.prev()), s.addEventListener("click", () => r.next()) });
var l = new Loader;
l.require(["./js/scroll.js"], function() {}), setTimeout(() => { var a = new Loader;
    a.require(["./js/galery.js"], function() {}) }, 2e3);
let last_known_scroll_position = 0,
    ticking = !1;

function doSomething(a) { a > 1.2 * header.offsetHeight ? header.classList.add("header-light") : header.classList.remove("header-light") }
window.addEventListener("scroll", function() { last_known_scroll_position = window.scrollY, ticking || (window.requestAnimationFrame(function() { doSomething(last_known_scroll_position), ticking = !1 }), ticking = !0) });
let showTexts = document.querySelectorAll(".read-review");
showTexts.forEach(function(a) { a.addEventListener("click", function() { let b = a.closest(".review-card"),
            c = b.querySelector(".croped-text"),
            d = a.querySelector("span");
        b.classList.contains("review-show") ? (b.classList.remove("review-show"), d.textContent = "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435") : (b.classList.add("review-show"), d.textContent = "\u0421\u043A\u0440\u044B\u0442\u044C") }) });
let map_container = document.getElementById("map"),
    options_map = { once: !0, passive: !0, capture: !0 },
    map_loaded = !1,
    holderClose = !1;
map_loaded || (map_container.addEventListener("click", start_lazy_map, options_map), map_container.addEventListener("mouseenter", start_lazy_map, options_map));
let coordinateX = document.querySelector(".c-adress").getAttribute("data-cordinate-x"),
    coordinateY = document.querySelector(".c-adress").getAttribute("data-cordinate-y"),
    compAddress = document.querySelector(".c-adress .title-h6").textContent;

function start_lazy_map() { if (!map_loaded) { map_loaded = !0; var a = new Loader;
        a.require(["https://api-maps.yandex.ru/2.1/?apikey=93fece7a-9fe4-47c6-80de-eaea41ec7d4a&lang=ru_RU"], function() { ymaps.ready(function() { var a = new ymaps.Map("map", { center: [coordinateX, coordinateY], zoom: 16, controls: ["zoomControl", "fullscreenControl"], behaviors: ["drag"] }, { suppressMapOpenBlock: !0 }),
                    b = ymaps.templateLayoutFactory.createClass("<div style=\"background-color: #414141; font-weight: bold;\">$[properties.iconContent]</div>"),
                    c = new ymaps.Placemark(a.getCenter(), { hintContent: "<div class=\"hint-map\">" + compAddress + "</div>" }, { iconLayout: "default#image", iconImageHref: "../img/map-pin.svg", iconImageSize: [60, 60], iconImageOffset: [-15, -15] });
                a.geoObjects.add(c) }) }) }
    document.querySelector(".map-holder").classList.contains("holder-hide") || document.querySelector(".map-holder").classList.add("holder-hide") }
let textInputs = document.querySelectorAll(".input.text input");
textInputs.forEach(function(a) { let b = a.closest(".input.text");
    a.addEventListener("click", function() { b.classList.add("focused") }), a.addEventListener("focus", function() { b.classList.add("focused") }), a.addEventListener("blur", function() { b.classList.remove("focused") }), a.addEventListener("input", function() { 0 < a.value.length ? b.classList.add("value-entered") : b.classList.remove("value-entered"), "text" == a.getAttribute("data-value") && (a.value = a.value.replace(/[^a-zа-яё\s]/gi, "")) }) });
let dropInputs = document.querySelectorAll(".input.drop input[type=text]");
dropInputs.forEach(function(a) { a.addEventListener("click", function() { document.querySelector(".input.drop.drop-active") && document.querySelector(".input.drop.drop-active").classList.remove("drop-active", "focused"), a.closest(".input").classList.add("drop-active", "focused") }) });
let dropValues = document.querySelectorAll(".drop-value");
dropValues.forEach(function(a) { a.addEventListener("click", function() { let b = a.closest(".input.drop"),
            c = b.querySelector("input");
        b.classList.remove("drop-active", "focused"), b.classList.add("value-entered"), c.value = a.textContent, a.getAttribute("data-k") ? recalc(c, a.getAttribute("data-k"), !1) : recalc(c, a.getAttribute("data-price"), !0, a.getAttribute("data-days")) }) }), document.body.addEventListener("click", function(a) { let b = a.target;!document.querySelector(".input.drop.drop-active") || b.closest(".input.drop") || b.classList.contains(".drop-value") || b.classList.contains(".drop-checkbox") || document.querySelector(".input.drop.drop-active").classList.remove("drop-active", "focused") });
let modalOverlay = document.querySelector(".overlay");
document.body.classList.remove("loading");
let calculate = document.querySelector(".hero-form .btn.main-btn"),
    place = document.querySelector("#for"),
    type = document.querySelector("#type"),
    view = document.querySelector("#view"),
    services = document.querySelector("#services"),
    placeSize = document.querySelector("#place-size"),
    discountText = document.querySelector(".discount-value .indicator-value"),
    discount = document.querySelector(".discount-value .indicator-line"),
    workTime = document.querySelector(".days-value .indicator-value"),
    workIndicator = document.querySelector(".days-value .indicator-line");
var curentK = 1,
    curentPrice = 0,
    curentPay = 0;
let dateModal = document.querySelector(".user-data"),
    dateForm = dateModal.querySelector("form"),
    sucsessModal = document.querySelector(".sucses-modal"),
    nextMadal = document.querySelector(".calc-modal .btn"),
    calcModal = document.querySelector(".calc-modal"),
    calcForm = calcModal.querySelector("form");
nextMadal.addEventListener("click", function() { calcModal.classList.remove("open"), dateModal.classList.add("open"), dateModal.setAttribute("from", "calculate"), header.classList.add("header-light") });
let modals = document.querySelectorAll(".modal-dialog,.modal");
console.log(modals), modals.forEach(function(a) { a.addEventListener("click", function(b) { b.target !== b.currentTarget || (a.closest(".modal").classList.remove("open"), modalOverlay.classList.remove("active")) }) });
let consult = document.querySelector(".steps-info .main-btn");
consult.addEventListener("click", function() { dateModal.classList.add("open"), modalOverlay.classList.add("active"), header.classList.add("header-light"), dateModal.setAttribute("from", "consult") }), dateForm.addEventListener("submit", function(a) { a.preventDefault(); let b = document.querySelector(".modal-form #name"),
        c = document.querySelector(".modal-form #tel"),
        d = dateForm.querySelector(".modal-form  #personal-data-modal"),
        e = place.closest(".input").getAttribute("curent-days") + " \u0434\u043D\u0435\u0439",
        f = YMaps.location.region + " ," + YMaps.location.city,
        g = dateForm.querySelector(".toast"); var h = { from: dateModal.getAttribute("from"), name: b.value, phone: c.value, place: place.value, type: type.value, view: view.value, services: services.value, placesize: placeSize.value + " m2", expectedprice: parseInt(curentPay), worktime: e, location: f };
    console.log(h); let i = [b, c, d]; if ("" == b.value || "" == c.value || !1 == d.checked) showToast(g, i);
    else { var j = "../api/mail.php?data=" + encodeURIComponent(JSON.stringify(h));
        xhttp = new XMLHttpRequest, xhttp.open("get", j, !0), xhttp.setRequestHeader("Content-Type", "application/json"), xhttp.onload = function() { 4 == xhttp.readyState && 200 === xhttp.status && xhttp.responseText ? (dateModal.classList.remove("open"), sucsessModal.classList.add("open"), cleanInputs(i)) : 200 !== xhttp.status || !xhttp.responseText }, xhttp.send() } }), String.prototype.allReplace = function(a) { var b = this; for (var c in a) b = b.replace(new RegExp(c, "g"), a[c]); return b };

function cleanInputs(a) { for (let b = 0; b < a.length; b++) a[b].closest(".input").classList.contains("checkbox") ? a[b].checked = !1 : (a[b].value = "", a[b].closest(".input").classList.remove("value-entered")) }

function showToast(a, b) { var c = "",
        d = a.querySelector(".error-text");
    d.textContent = ""; for (let d = 0; d < b.length; d++) "" == b[d].value ? "" == c ? c += b[d].closest(".input").querySelector(".label").textContent : c = c + ", " + b[d].closest(".input").querySelector(".label").textContent : !1 == b[d].checked && b[d].closest(".input").classList.contains("checkbox") && ("" == c ? c += b[d].closest(".input").querySelector("span").textContent : c = c + ", " + b[d].closest(".input").querySelector("span").textContent);
    d.textContent = c.allReplace({ "Введите имя": "\u0418\u043C\u044F", "Нажимая на кнопку вы даете согласие на обработку персональных данных": "C\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445" }), a.classList.add("error"), setTimeout(() => { a.classList.remove("error") }, a.getAttribute("data-time")) }
let inlineForm = document.querySelector(".inline-form"),
    inlineFormSubmit = document.querySelector(".inline-form .btn");
inlineForm.addEventListener("submit", function(a) { a.preventDefault(); let b = inlineForm.querySelector("#name-land"),
        c = inlineForm.querySelector("#tel-land"),
        d = inlineForm.querySelector("#personal-data-page"),
        e = YMaps.location.region + " ," + YMaps.location.city,
        f = inlineForm.querySelector(".toast"); var g = { from: "inline", name: b.value, phone: c.value, location: e }; let h = [b, c, d]; if ("" == b.value || "" == c.value || !1 == d.checked) showToast(f, h);
    else { var i = "../api/mail.php?data=" + encodeURIComponent(JSON.stringify(g));
        xhttp = new XMLHttpRequest, xhttp.open("get", i, !0), xhttp.setRequestHeader("Content-Type", "application/json"), xhttp.onload = function() { 4 == xhttp.readyState && 200 === xhttp.status && xhttp.responseText ? (sucsessModal.classList.add("open"), modalOverlay.classList.add("active"), cleanInputs(h)) : 200 !== xhttp.status || !xhttp.responseText }, xhttp.send() } }), calculate.addEventListener("click", function() { let a = calculate.closest(".btn-wrapper").querySelector(".toast"),
        b = a.querySelector(".error-text"); var c = ""; if ("" == place.value || "" == placeSize.value || "" == type.value || "" == view.value) { c = ""; let d = [place, placeSize, type, view]; for (let a = 0; a < d.length; a++) "" == d[a].value && ("" == c ? c += d[a].closest(".input").querySelector(".label").innerHTML : c = c + ", " + d[a].closest(".input").querySelector(".label").innerHTML), b.innerHTML = c;
        a.classList.add("error"), setTimeout(() => { a.classList.remove("error") }, a.getAttribute("data-time")) } else calcModal.classList.add("open"), header.classList.add("header-light"), modalOverlay.classList.add("active") });
let closeModals = document.querySelectorAll(".close-modal");
closeModals.forEach(function(a) { a.addEventListener("click", function() { a.closest(".modal").classList.remove("open"), window.scrollY < 1.2 * header.offsetHeight && header.classList.remove("header-light"), modalOverlay.classList.remove("active") }) }), placeSize.addEventListener("input", function() { updatePrice() });

function updatePrice() { let a = place.closest(".input"),
        b = a.getAttribute("curent-price"); if (0 != b && "" != placeSize.value) { curentPay = rounded(b * placeSize.value * curentK); let d = rounded(25 * (b * placeSize.value * curentK / 100));
        discountText.textContent = d + "\u0440\u0443\u0431.", discount.style.width = 25 * curentK + "%", document.querySelector(".start-price").textContent = curentPay - d, document.querySelector(".end-price").textContent = curentPay + d, document.querySelector(".discount-number").textContent = d, document.querySelector(".price-info .size").textContent = placeSize.value; let e = a.getAttribute("curent-days"),
            f = e.split("-")[0],
            g = e.split("-")[1];
        workTime.textContent = "\u043E\u0442 " + f + " \u0434\u043E " + g + " \u0434\u043D\u0435\u0439", workIndicator.style.width = f + "%", document.querySelector(".price-info .days").textContent = "\u043E\u0442 " + f + " \u0434\u043E " + g, document.querySelector(".r-type").textContent = view.value; let h = document.querySelector(".r-place"); var c = place.value.allReplace({ комнатная: "\u043A\u043E\u043C\u043D\u0430\u0442\u043D\u043E\u0439", квартира: "\u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B", Комната: "\u043A\u043E\u043C\u043D\u0430\u0442\u044B", Ванная: "\u0432\u0430\u043D\u043D\u043E\u0439", Туалет: "\u0442\u0443\u0430\u043B\u0435\u0442\u0430", Коридор: "\u043A\u043E\u0440\u0438\u0434\u043E\u0440\u0430", Загородный: "p\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u043E\u0433\u043E", дом: "\u0434\u043E\u043C\u0430", Кухня: "\u043A\u0443\u0445\u043D\u0438" });
        h.textContent = c } }

function rounded(a) { return +a.toFixed(2) }

function recalc(a, b, c, d) { let e = a.closest(".input");
    c ? (e.setAttribute("curent-price", b), e.setAttribute("curent-days", d)) : (curentK = rounded(curentK / e.getAttribute("curent-k") * b), e.setAttribute("curent-k", b), console.log(curentK)), updatePrice() }
let checkInputs = document.querySelectorAll(".drop-zone input[type=checkbox]");
checkInputs.forEach(function(a) { a.addEventListener("input", function() { let b = a.closest(".drop"),
            c = b.querySelector("input[type=text]"); var d = 0,
            e = ""; for (var f of checkInputs) f.checked && (d++, "" == e ? e += f.closest(".input-inner").querySelector("span").textContent : e = e + ", " + f.closest(".input-inner").querySelector("span").textContent);
        0 < d ? (c.value = e, b.classList.add("value-entered")) : (c.value = "", b.classList.remove("value-entered")), curentK = a.checked ? rounded(curentK * a.getAttribute("data-k")) : rounded(curentK / a.getAttribute("data-k")), updatePrice() }) }), window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call(document.querySelectorAll("input[type=tel]"), function(a) {
        function b(a, b) { if (b.focus(), b.setSelectionRange) b.setSelectionRange(a, a);
            else if (b.createTextRange) { var c = b.createTextRange();
                c.collapse(!0), c.moveEnd("character", a), c.moveStart("character", a), c.select() } }

        function c(a) { var c = 0,
                d = "+7 (___) ___ __-__".replace(/\D/g, ""),
                e = this.value.replace(/\D/g, "");
            d.length >= e.length && (e = d), this.value = "+7 (___) ___ __-__".replace(/./g, function(b) { return /[_\d]/.test(b) && c < e.length ? e.charAt(c++) : c >= e.length ? "" : b }), "blur" == a.type ? 2 == this.value.length && (this.value = "", this.closest(".input").classList.remove("value-entered")) : b(this.value.length, this) }
        a.addEventListener("input", c, !1), a.addEventListener("focus", c, !1), a.addEventListener("blur", c, !1), a.addEventListener("keydown", c, !1) }) });