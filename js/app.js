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


document.addEventListener("DOMContentLoaded", function(event) {

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
            loop: false,
            rtl: false,
            perPage: {
                300: 1,
            }
        });
    }
);




var l = new Loader();
l.require([
        './js/scroll.js'
    ],
    function() {


    }
);



let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
    if (scroll_pos > header.offsetHeight * 2) {
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




let map_container = document.getElementById('map');
let options_map = {
    once: true,
    passive: true,
    capture: true
};
map_container.addEventListener('click', start_lazy_map, options_map);

let map_loaded = false;
let holderClose = false;

function start_lazy_map() {
    if (!map_loaded) {

        var l = new Loader();
        l.require([
                "https://api-maps.yandex.ru/2.1/?apikey=93fece7a-9fe4-47c6-80de-eaea41ec7d4a&lang=ru_RU"
            ],
            function() {
                ymaps.ready(function() {
                    map_loaded = true;
                    var myMap = new ymaps.Map('map', {
                            center: [59.91313956420063, 30.369578499999943],
                            zoom: 16,
                            controls: ['zoomControl'],
                            behaviors: ['drag']
                        }),
                        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                            '<div style="background-color: #414141; font-weight: bold;">$[properties.iconContent]</div>'
                        ),

                        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                            hintContent: '<div class="hint-map">наб. Обводного канала, д.24 Д, БЦ «Амилен» 1 этаж, офис 28-29</div>',
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
    })
})

let dropInputs = document.querySelectorAll('.drop input');
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
            recalc(dropInput, dropValue.getAttribute('data-price'), true);
        }

    })
})

document.body.addEventListener('click', function(e) {
    let target = e.target;
    if (document.querySelector('.input.drop.drop-active')) {
        if (!target.closest('.input.drop') && !target.classList.contains('.drop-value')) {
            document.querySelector('.input.drop.drop-active').classList.remove('drop-active', 'focused');
        }
    }
})


document.body.classList.remove('loading');
let calculate = document.querySelector('.hero-form .btn.main-btn');
let toast = document.querySelector('.toast');

let place = document.querySelector('#for');
let type = document.querySelector('#type');
let view = document.querySelector('#view');
let services = document.querySelector('#services');
let placeSize = document.querySelector('#place-size');

let discountText = document.querySelector('.discount-value .indicator-value')
let discount = document.querySelector('.discount-value .indicator-line')

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


let consult = document.querySelector('.steps-info .main-btn')
consult.addEventListener('click', function(e) {
    dateModal.classList.add('open');
    header.classList.add('header-light');
    dateModal.setAttribute('from', 'consult')
})

dateForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let userName = document.querySelector('.modal-form #name')
    let userPhone = document.querySelector('.modal-form #tel')

    var params = {
        from: dateModal.getAttribute('from'),
        name: userName.value,
        phone: userPhone.value,
        place: place.value,
        type: type.value,
        view: view.value,
        services: services.value,
        placesize: parseInt(placeSize.value),
        expectedprice: parseInt(curentPay)
    };
    var url = "../api/mail.php?data=" + encodeURIComponent(JSON.stringify(params));;
    xhttp = new XMLHttpRequest();
    xhttp.open("get", url, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.onload = function() {
        if (xhttp.readyState == 4 && xhttp.status === 200 && xhttp.responseText) {
            dateModal.classList.remove('open');
            sucsessModal.classList.add('open');
        } else if (xhttp.status !== 200 || !xhttp.responseText) {

        }
    };
    xhttp.send();
})

let inlineForm = document.querySelector('.inline-form');
let inlineFormSubmit = document.querySelector('.inline-form .btn')
inlineForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let userName = inlineForm.querySelector('#name-land')
    let userPhone = inlineForm.querySelector('#tel-land')

    var params = {
        from: 'inline',
        name: userName.value,
        phone: userPhone.value
    };
    var url = "../api/mail.php?data=" + encodeURIComponent(JSON.stringify(params));;
    xhttp = new XMLHttpRequest();
    xhttp.open("get", url, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.onload = function() {
        if (xhttp.readyState == 4 && xhttp.status === 200 && xhttp.responseText) {
            sucsessModal.classList.add('open');
        } else if (xhttp.status !== 200 || !xhttp.responseText) {

        }
    };
    xhttp.send();
})





calculate.addEventListener('click', function(e) {

    if (place.value == '' || placeSize.value == '') {
        toast.classList.add('error');
        setTimeout(() => {
            toast.classList.remove('error');
        }, 1500);
    } else {
        calcModal.classList.add('open')
        header.classList.add('header-light')
    }
})

let closeModals = document.querySelectorAll('.close-modal')
closeModals.forEach(function(closeModal) {
    closeModal.addEventListener('click', function(e) {
        closeModal.closest('.modal').classList.remove('open');
        header.classList.remove('header-light')
    })
})


placeSize.addEventListener('input', function(e) {

    updatePrice()

})

function updatePrice() {
    let selectedType = place.closest('.input');
    let curentPlaceSumm = selectedType.getAttribute('curent-price');
    if (curentPlaceSumm != 0 && placeSize.value != '') {
        console.log(rounded(curentPlaceSumm * placeSize.value * curentK));
        curentPay = rounded(curentPlaceSumm * placeSize.value * curentK)
        let actualDiscount = rounded(curentPlaceSumm * placeSize.value * curentK / 100 * 25)
        discountText.textContent = actualDiscount + 'руб.';
        discount.style.width = curentK * 25 + '%';

        document.querySelector('.start-price').textContent = curentPay - actualDiscount;
        document.querySelector('.end-price').textContent = curentPay + actualDiscount;
        document.querySelector('.discount-number').textContent = actualDiscount
    }

}

function rounded(number) {
    return +number.toFixed(2);
}

function recalc(input, value, isPrice) {
    console.log(input, value, isPrice)
    let inputWrapper = input.closest('.input');

    if (!isPrice) {

        curentK = rounded(curentK / inputWrapper.getAttribute('curent-k') * value);
        inputWrapper.setAttribute('curent-k', value)
        console.log(curentK);
    } else {
        inputWrapper.setAttribute('curent-price', value)
    }
    updatePrice()
}

// от 120 дней до 240 дней