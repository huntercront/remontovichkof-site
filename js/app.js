var Loader = function() {};
Loader.prototype = {
    require: function(e, t) {
        this.loadCount = 0,
            this.totalRequired = e.length,
            this.callback = t;
        for (var o = 0; o < e.length; o++)
            this.writeScript(e[o])
    },
    loaded: function(e) {
        this.loadCount++,
            this.loadCount == this.totalRequired && "function" == typeof this.callback && this.callback.call()
    },
    writeScript: function(e) {
        var t = this,
            o = document.createElement("script");
        o.type = "text/javascript",
            o.defer = !0,
            o.src = e,
            o.addEventListener("load", function(e) {
                t.loaded(e)
            }, !1),
            document.getElementsByTagName("head")[0].appendChild(o)
    }
};


let tabIndicator = document.querySelector('.tab-indicator')
setCurentTab(document.querySelector('.tab-btn.active'));


function setCurentTab(tab) {
    tabIndicator.style.left = tab.offsetLeft + "px";
    tabIndicator.style.width = tab.offsetWidth + "px";
    tab.classList.add("active");





}

let tabs = document.querySelectorAll('.tab-btn')
tabs.forEach(function(tab) {
    tab.addEventListener('click', function(e) {
        let curentActive = document.querySelector('.tab-btn.active');
        let curentContent = document.querySelector('.tab-content.active-tab');

        curentActive.classList.remove('active');
        curentContent.classList.remove('active-tab');

        let newActive = document.querySelector('[ tab-content="' + tab.getAttribute('data-tab') + '"]');
        newActive.classList.add('active-tab')
        setCurentTab(tab);
        if (window.matchMedia("(max-width: 1024px)").matches) {
            document.querySelector('.tab-btn.active').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }


    })
})


let menu = document.querySelector('.m-menu');
let header = document.querySelector('.header');

menu.addEventListener('click', function(e) {
    if (!header.classList.contains('menu-show')) {
        header.classList.add('menu-show')
    } else {
        header.classList.remove('menu-show')
    }
})





var l = new Loader();
l.require([
        './js/siema.min.js'
    ],
    function() {

        const blogSlider = new Siema({
            selector: '.slider-zone',
            duration: 300,
            easing: 'ease-out',
            startIndex: 0,
            draggable: true,
            multipleDrag: true,
            threshold: 20,
            loop: false,
            rtl: false,
            perPage: {
                300: 1,
            },
            onChange: checkButton,
        });
        let blogLength = blogSlider.innerElements.length;
        let nextSlider = document.querySelector('.how-works .next');
        let prevSlider = document.querySelector('.how-works .prew');

        prevSlider.addEventListener('click', () => blogSlider.prev());
        nextSlider.addEventListener('click', () => blogSlider.next());

        let slides = document.querySelectorAll('.w-slide');
        let wTitle = document.querySelector('.step-title .title-h4');
        let wNumber = document.querySelector('.step-number span');
        let wDescr = document.querySelector('.step-details p');

        slides.forEach(function(slide, i) {
            slide.querySelector('.title-h6').addEventListener('click', function(e) {
                blogSlider.goTo(i)
            })
        })

        function checkButton() {
            let curentSlide = slides[this.currentSlide];
            document.querySelector('.slide-active').classList.remove('slide-active')
            curentSlide.classList.add('slide-active')
            wTitle.textContent = curentSlide.getAttribute('data-title');
            wNumber.textContent = this.currentSlide + 1;
            wDescr.textContent = curentSlide.getAttribute('data-text');
        }


        Siema.prototype.myltySlides = function() {
            let prevArrow = this.selector.closest('.tab-galery').querySelector('.prew');
            let nextArrow = this.selector.closest('.tab-galery').querySelector('.next');
            prevArrow.addEventListener('click', () => this.prev());
            nextArrow.addEventListener('click', () => this.next());
        }


        let siemas = document.querySelectorAll('.galery-inner')

        siemas.forEach(function(siema, i) {
            const instance = new Siema({
                selector: siema,
                duration: 300,
                easing: 'ease-out',
                startIndex: 0,
                draggable: true,
                multipleDrag: true,
                threshold: 20,
                loop: false,
                rtl: false,
                perPage: {
                    300: 1,
                },
            });
            instance.myltySlides();
        })

        let reviews = document.querySelector('.reviews-slider .slider-inner');

        const reviewSlider = new Siema({
            selector: reviews,
            duration: 300,
            easing: 'ease-out',
            startIndex: 0,
            draggable: true,
            multipleDrag: true,
            threshold: 20,
            loop: false,
            rtl: false,
            perPage: {
                300: 1,
                640: 2,
                956: 3,
            }
        });
        let nextreviewSlider = document.querySelector('.reviews .next');
        let prevreviewSlider = document.querySelector('.reviews .prew');

        prevreviewSlider.addEventListener('click', () => reviewSlider.prev());
        nextreviewSlider.addEventListener('click', () => reviewSlider.next());


        let msSlider = document.querySelector('.ms-inner');

        const modalSlider = new Siema({
            selector: msSlider,
            duration: 300,
            easing: 'ease-out',
            startIndex: 0,
            draggable: true,
            multipleDrag: true,
            threshold: 20,
            loop: false,
            rtl: false,
            perPage: {
                300: 1,
            }
        });
        let nextmodalSlider = document.querySelector('.sucses-modal .next');
        let prevmodalSlider = document.querySelector('.sucses-modal .prew');

        prevmodalSlider.addEventListener('click', () => modalSlider.prev());
        nextmodalSlider.addEventListener('click', () => modalSlider.next());

        const heroSlider = new Siema({
            selector: '.hero-slider',
            duration: 300,
            easing: 'ease-out',
            startIndex: 0,
            draggable: true,
            multipleDrag: true,
            threshold: 20,
            loop: true,
            rtl: false,
            perPage: {
                300: 1,
            }
        });
        setInterval(() => heroSlider.next(), document.querySelector('.hero-slider').getAttribute('data-slide') * 1000);

        let nextheroSlider = document.querySelector('.hero-form .next');
        let prevheroSlider = document.querySelector('.hero-form .prew');

        prevheroSlider.addEventListener('click', () => heroSlider.prev());
        nextheroSlider.addEventListener('click', () => heroSlider.next());
    }
);




var l = new Loader();
l.require([
        './js/scroll.js'
    ],
    function() {}
);

setTimeout(() => {
    var l = new Loader();
    l.require([
            "./js/galery.js"
        ],
        function() {});
}, 2000);


let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
    if (scroll_pos > header.offsetHeight * 1.2) {
        header.classList.add('header-light')
    } else {
        header.classList.remove('header-light')
    }
}

window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function() {
            doSomething(last_known_scroll_position);
            ticking = false;
        });

        ticking = true;
    }
});



let showTexts = document.querySelectorAll('.read-review')
showTexts.forEach(function(showText) {
    showText.addEventListener('click', function(e) {
        let reviewCart = showText.closest('.review-card');
        let cropedText = reviewCart.querySelector('.croped-text');
        let reviewtext = showText.querySelector('span');

        if (reviewCart.classList.contains('review-show')) {
            reviewCart.classList.remove('review-show');
            reviewtext.textContent = 'Подробнее';
        } else {
            reviewCart.classList.add('review-show');
            reviewtext.textContent = 'Скрыть';
        }
    })
})



let map_container = document.getElementById('map');
let options_map = {
    once: true,
    passive: true,
    capture: true
};

let map_loaded = false;
let holderClose = false;

if (!map_loaded) {
    map_container.addEventListener('click', start_lazy_map, options_map);
    map_container.addEventListener('mouseenter', start_lazy_map, options_map);
}

let coordinateX = document.querySelector('.c-adress').getAttribute('data-cordinate-x');
let coordinateY = document.querySelector('.c-adress').getAttribute('data-cordinate-y');
let compAddress = document.querySelector('.c-adress .title-h6').textContent;

function start_lazy_map() {
    if (!map_loaded) {
        map_loaded = true;
        var l = new Loader();
        l.require([
                "https://api-maps.yandex.ru/2.1/?apikey=93fece7a-9fe4-47c6-80de-eaea41ec7d4a&lang=ru_RU"
            ],
            function() {
                ymaps.ready(function() {
                    var myMap = new ymaps.Map('map', {
                            center: [coordinateX, coordinateY],
                            zoom: 16,
                            controls: ['zoomControl', 'fullscreenControl'],
                            behaviors: ['drag']
                        }, {
                            suppressMapOpenBlock: true,
                        }),
                        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                            '<div style="background-color: #414141; font-weight: bold;">$[properties.iconContent]</div>'
                        ),

                        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                            hintContent: '<div class="hint-map">' + compAddress + '</div>',
                        }, {
                            iconLayout: 'default#image',
                            iconImageHref: '../img/map-pin.svg',
                            iconImageSize: [60, 60],
                            iconImageOffset: [-15, -15]
                        });

                    myMap.geoObjects
                        .add(myPlacemark);
                });
            });
    }
    if (!document.querySelector('.map-holder').classList.contains('holder-hide')) {
        document.querySelector('.map-holder').classList.add('holder-hide')
    }
}

// inputs

let textInputs = document.querySelectorAll('.input.text input')
textInputs.forEach(function(textInput) {

    let inputWrapper = textInput.closest('.input.text');

    textInput.addEventListener('click', function(e) {
        inputWrapper.classList.add('focused');
    })
    textInput.addEventListener('focus', function(e) {
        inputWrapper.classList.add('focused');
    })
    textInput.addEventListener('blur', function(e) {
        inputWrapper.classList.remove('focused');
    })
    textInput.addEventListener('input', function(e) {
        if (textInput.value.length > 0) {
            inputWrapper.classList.add('value-entered');
        } else {
            inputWrapper.classList.remove('value-entered');
        }
        if (textInput.getAttribute('data-value') == 'text') {
            textInput.value = textInput.value.replace(/[^a-zа-яё\s]/gi, '');
        }
    })
})

let dropInputs = document.querySelectorAll('.input.drop input[type=text]');
dropInputs.forEach(function(dropInput) {
    dropInput.addEventListener('click', function(e) {
        if (document.querySelector('.input.drop.drop-active')) {
            document.querySelector('.input.drop.drop-active').classList.remove('drop-active', 'focused');
        }
        dropInput.closest('.input').classList.add('drop-active', 'focused');
    })
})

let dropValues = document.querySelectorAll('.drop-value')
dropValues.forEach(function(dropValue) {
    dropValue.addEventListener('click', function(e) {
        let dropWrapper = dropValue.closest('.input.drop');
        let dropInput = dropWrapper.querySelector('input');
        dropWrapper.classList.remove('drop-active', 'focused');
        dropWrapper.classList.add('value-entered');
        dropInput.value = dropValue.textContent;

        if (dropValue.getAttribute('data-k')) {
            recalc(dropInput, dropValue.getAttribute('data-k'), false);
        } else {
            recalc(dropInput, dropValue.getAttribute('data-price'), true, dropValue.getAttribute('data-days'));
        }

    })
})

document.body.addEventListener('click', function(e) {
    let target = e.target;
    if (document.querySelector('.input.drop.drop-active')) {
        if (!target.closest('.input.drop') && !target.classList.contains('.drop-value') && !target.classList.contains('.drop-checkbox')) {
            document.querySelector('.input.drop.drop-active').classList.remove('drop-active', 'focused');
        }
    }
})



let modalOverlay = document.querySelector('.overlay')
document.body.classList.remove('loading');
let calculate = document.querySelector('.hero-form .btn.main-btn');

let place = document.querySelector('#for');
let type = document.querySelector('#type');
let view = document.querySelector('#view');
let services = document.querySelector('#services');
let placeSize = document.querySelector('#place-size');

let discountText = document.querySelector('.discount-value .indicator-value')
let discount = document.querySelector('.discount-value .indicator-line')
let workTime = document.querySelector('.days-value .indicator-value')
let workIndicator = document.querySelector('.days-value .indicator-line')

var curentK = 1;
var curentPrice = 0;
var curentPay = 0;

let dateModal = document.querySelector('.user-data');
let dateForm = dateModal.querySelector('form')

let sucsessModal = document.querySelector('.sucses-modal')


let nextMadal = document.querySelector('.calc-modal .btn');
let calcModal = document.querySelector('.calc-modal');
let calcForm = calcModal.querySelector('form')

nextMadal.addEventListener('click', function(e) {
    calcModal.classList.remove('open');
    dateModal.classList.add('open');
    dateModal.setAttribute('from', 'calculate')
    header.classList.add('header-light');
})


let modals = document.querySelectorAll('.modal-dialog,.modal')
console.log(modals)
modals.forEach(function(modal) {
    modal.addEventListener('click', function(event) {
        if (event.target !== event.currentTarget) return;
        modal.closest('.modal').classList.remove('open');
        modalOverlay.classList.remove('active')
    })
})
let consult = document.querySelector('.steps-info .main-btn')
consult.addEventListener('click', function(e) {
    dateModal.classList.add('open');
    modalOverlay.classList.add('active');
    header.classList.add('header-light');
    dateModal.setAttribute('from', 'consult')
})

dateForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let userName = document.querySelector('.modal-form #name')
    let userPhone = document.querySelector('.modal-form #tel')
    let rightsAccept = dateForm.querySelector('.modal-form  #personal-data-modal')
    let workdays = place.closest('.input').getAttribute('curent-days') + ' дней';
    let userlocation = document.body.getAttribute('site-location');
    let mailtosend = userlocation;

    if (userlocation == 'spb') {
        userlocation = 'Санкт-Петербург'
    } else {
        userlocation = 'Москва'
    }

    let curentToast = dateForm.querySelector('.toast')

    var params = {
        from: dateModal.getAttribute('from'),
        name: userName.value,
        phone: userPhone.value,
        place: place.value,
        type: type.value,
        view: view.value,
        services: services.value,
        placesize: placeSize.value + ' m2',
        expectedprice: parseInt(curentPay),
        worktime: workdays,
        location: userlocation,
        mailto: mailtosend
    };

    console.log(params)
    let inputs = [userName, userPhone, rightsAccept]
    if (userName.value == '' || userPhone.value == '' || rightsAccept.checked == false) {
        showToast(curentToast, inputs)
    } else {

        var url = "../api/mail.php?data=" + encodeURIComponent(JSON.stringify(params));
        xhttp = new XMLHttpRequest();
        xhttp.open("get", url, true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.onload = function() {
            if (xhttp.readyState == 4 && xhttp.status === 200 && xhttp.responseText) {
                dateModal.classList.remove('open');
                sucsessModal.classList.add('open');
                cleanInputs(inputs);
            } else if (xhttp.status !== 200 || !xhttp.responseText) {

            }
        };
        xhttp.send();
    }
})


String.prototype.allReplace = function(obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};


function cleanInputs(inputs) {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].closest('.input').classList.contains('checkbox')) {
            inputs[i].checked = false;
        } else {
            inputs[i].value = '';
            inputs[i].closest('.input').classList.remove('value-entered')
        }
    }
}

function showToast(toast, arrInputs) {
    var errorText = '';
    var errorLabel = toast.querySelector('.error-text')

    errorLabel.textContent = '';
    for (let i = 0; i < arrInputs.length; i++) {
        if (arrInputs[i].value == '') {
            if (errorText != '') {
                errorText = errorText + ', ' + arrInputs[i].closest('.input').querySelector('.label').textContent;
            } else {
                errorText = errorText + arrInputs[i].closest('.input').querySelector('.label').textContent;
            }
        } else if (arrInputs[i].checked == false && arrInputs[i].closest('.input').classList.contains('checkbox')) {
            if (errorText != '') {
                errorText = errorText + ', ' + arrInputs[i].closest('.input').querySelector('span').textContent
            } else {
                errorText = errorText + arrInputs[i].closest('.input').querySelector('span').textContent
            }
        }
    }

    errorLabel.textContent = errorText.allReplace({ 'Введите имя': 'Имя', 'Нажимая на кнопку вы даете согласие на обработку персональных данных': 'Cогласие на обработку персональных данных' })

    toast.classList.add('error');
    setTimeout(() => {
        toast.classList.remove('error');
    }, toast.getAttribute('data-time'));
}

let inlineForm = document.querySelector('.inline-form');
let inlineFormSubmit = document.querySelector('.inline-form .btn')
inlineForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let userName = inlineForm.querySelector('#name-land');
    let userPhone = inlineForm.querySelector('#tel-land');
    let rightsAccept = inlineForm.querySelector('#personal-data-page')
    let userlocation = document.body.getAttribute('site-location')
    let mailtosend = userlocation;
    if (userlocation == 'spb') {
        userlocation = 'Санкт-Петербург'
    } else {
        userlocation = 'Москва'
    }

    let curentToast = inlineForm.querySelector('.toast')

    var params = {
        from: 'inline',
        name: userName.value,
        phone: userPhone.value,
        location: userlocation,
        mailto: mailtosend

    };

    let inputs = [userName, userPhone, rightsAccept]
    if (userName.value == '' || userPhone.value == '' || rightsAccept.checked == false) {
        showToast(curentToast, inputs)
    } else {
        var url = "../api/mail.php?data=" + encodeURIComponent(JSON.stringify(params));
        xhttp = new XMLHttpRequest();
        xhttp.open("get", url, true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.onload = function() {
            if (xhttp.readyState == 4 && xhttp.status === 200 && xhttp.responseText) {
                sucsessModal.classList.add('open');
                modalOverlay.classList.add('active');
                cleanInputs(inputs);
            } else if (xhttp.status !== 200 || !xhttp.responseText) {

            }
        };
        xhttp.send();
    }
})





calculate.addEventListener('click', function(e) {
    let curentToast = calculate.closest('.btn-wrapper').querySelector('.toast')
    let errorText = curentToast.querySelector('.error-text');
    var errorCompiled = '';
    if (place.value == '' || placeSize.value == '' || type.value == '' || view.value == '') {
        errorCompiled = '';
        let errorVulues = [place, placeSize, type, view]
        for (let i = 0; i < errorVulues.length; i++) {
            if (errorVulues[i].value == '') {
                if (errorCompiled != '') {
                    errorCompiled = errorCompiled + ', ' + errorVulues[i].closest('.input').querySelector('.label').innerHTML;
                } else {
                    errorCompiled = errorCompiled + errorVulues[i].closest('.input').querySelector('.label').innerHTML;
                }
            }
            errorText.innerHTML = errorCompiled;
        }
        curentToast.classList.add('error');
        setTimeout(() => {
            curentToast.classList.remove('error');
        }, curentToast.getAttribute('data-time'));
    } else {
        calcModal.classList.add('open')
        header.classList.add('header-light')
        modalOverlay.classList.add('active')

    }
})

let closeModals = document.querySelectorAll('.close-modal')
closeModals.forEach(function(closeModal) {
    closeModal.addEventListener('click', function(e) {
        closeModal.closest('.modal').classList.remove('open');
        if (window.scrollY < header.offsetHeight * 1.2) {
            header.classList.remove('header-light')
        }
        modalOverlay.classList.remove('active')
    })
})

placeSize.addEventListener('input', function(e) {
    updatePrice()
})





function updatePrice() {
    let selectedType = place.closest('.input');
    let curentPlaceSumm = selectedType.getAttribute('curent-price');
    if (curentPlaceSumm != 0 && placeSize.value != '') {
        curentPay = rounded(curentPlaceSumm * placeSize.value * curentK)
        let actualDiscount = rounded(curentPlaceSumm * placeSize.value * curentK / 100 * 25)
        discountText.textContent = actualDiscount + 'руб.';
        discount.style.width = curentK * 25 + '%';
        document.querySelector('.start-price').textContent = curentPay - actualDiscount;
        document.querySelector('.end-price').textContent = curentPay + actualDiscount;
        document.querySelector('.discount-number').textContent = actualDiscount;
        document.querySelector('.price-info .size').textContent = placeSize.value;

        let workPeriod = selectedType.getAttribute('curent-days');
        let workStart = workPeriod.split('-')[0];
        let workEnd = workPeriod.split('-')[1];
        workTime.textContent = 'от ' + workStart + ' до ' + workEnd + ' дней';
        workIndicator.style.width = workStart + '%';
        document.querySelector('.price-info .days').textContent = 'от ' + workStart + ' до ' + workEnd;
        document.querySelector('.r-type').textContent = view.value;

        let rPlace = document.querySelector('.r-place')

        var text = place.value.allReplace({ 'комнатная': 'комнатной', 'квартира': 'квартиры', 'Комната': 'комнаты', 'Ванная': 'ванной', 'Туалет': 'туалета', 'Коридор': 'коридора', 'Загородный': 'pагородного', 'дом': 'дома', 'Кухня': 'кухни' })

        rPlace.textContent = text;
        //  = place.value
    }

}

function rounded(number) {
    return +number.toFixed(2);
}

function recalc(input, value, isPrice, workDays) {
    let inputWrapper = input.closest('.input');
    if (!isPrice) {
        curentK = rounded(curentK / inputWrapper.getAttribute('curent-k') * value);
        inputWrapper.setAttribute('curent-k', value);
        console.log(curentK);
    } else {
        inputWrapper.setAttribute('curent-price', value);
        inputWrapper.setAttribute('curent-days', workDays);
    }
    updatePrice();
}

let checkInputs = document.querySelectorAll('.drop-zone input[type=checkbox]');
checkInputs.forEach(function(checkInput) {
    checkInput.addEventListener('input', function(e) {

        let mainInputWrapper = checkInput.closest('.drop');
        let mainInput = mainInputWrapper.querySelector('input[type=text]');
        var totalChecked = 0;
        var value = '';

        for (var checkbox of checkInputs) {
            if (checkbox.checked) {
                totalChecked++;
                if (value == '') {
                    value = value + checkbox.closest('.input-inner').querySelector('span').textContent;
                } else {
                    value = value + ', ' + checkbox.closest('.input-inner').querySelector('span').textContent;
                }

            }
        }
        if (totalChecked > 0) {
            mainInput.value = value
            mainInputWrapper.classList.add('value-entered')
        } else {
            mainInput.value = ''
            mainInputWrapper.classList.remove('value-entered')
        }
        if (checkInput.checked) {
            curentK = rounded(curentK * checkInput.getAttribute('data-k'))
        } else {
            curentK = rounded(curentK / checkInput.getAttribute('data-k'))
        }
        updatePrice()
    })
})



window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call(document.querySelectorAll('input[type=tel]'), function(input) {


        function setCursorPosition(pos, elem) {
            elem.focus();
            if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
            else if (elem.createTextRange) {
                var range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd("character", pos);
                range.moveStart("character", pos);
                range.select()
            }
        }

        function mask(event) {
            var matrix = "+7 (___) ___ __-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, "");
            if (def.length >= val.length) val = def;
            this.value = matrix.replace(/./g, function(a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
            });
            if (event.type == "blur") {
                if (this.value.length == 2) {
                    this.value = "";
                    this.closest('.input').classList.remove('value-entered')
                }
            } else setCursorPosition(this.value.length, this)
        };

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);
    });
});