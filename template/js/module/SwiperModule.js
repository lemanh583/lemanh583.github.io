export default function SwiperModule() {
    const bannerSlider = document.querySelectorAll('.banner-slider')
    if (bannerSlider) {
        bannerSlider.forEach(item => {
            const swiper = item.querySelector('.swiper');
            const pagi = item.querySelector('.swiper-pagination');
            const next = item.querySelector('.swiper-next');
            const prev = item.querySelector('.swiper-prev');
            let isLoop = true;
            if (swiper.classList.contains('loop-none')) {
                isLoop = false;
                item.querySelector(".swiper-next").style = "display: none";
                item.querySelector(".swiper-prev").style = "display: none";
            }
            var slider = new Swiper(swiper, {
                // freeMode: true,
                watchSlidesProgress: true,
                speed: 1200,
                autoplay: {
                    delay: 5000
                },
                pagination: {
                    el: pagi,
                    type: "bullets",
                    clickable: true
                },
                navigation: {
                    nextEl: next,
                    prevEl: prev
                },
                // slidesPerGroup: 2,
                loop: isLoop,
                spaceBetween: 0,
                effect: "fade",
                slidesPerView: 1,
                fadeEffect: {
                    crossFade: true
                }
            });
        })
    }

    const hdsSlider = document.querySelectorAll('.hds-slider')
    if (hdsSlider) {
        hdsSlider.forEach(item => {
            const swiper = item.querySelector('.swiper');
            const pagi = item.querySelector('.swiper-pagination');
            const next = item.querySelector('.swiper-next');
            const prev = item.querySelector('.swiper-prev');

            var sliders = new Swiper(swiper, {
                // freeMode: true,
                watchSlidesProgress: true,
                speed: 1200,
                // autoplay: {
                //     delay: 5000
                // },
                pagination: {
                    el: pagi,
                    type: "bullets",
                    clickable: true
                },
                navigation: {
                    nextEl: next,
                    prevEl: prev
                },
                // slidesPerGroup: 2,
                loop: false,
                spaceBetween: 0,
                effect: "slide",
                slidesPerView: 1,
                fadeEffect: {
                    crossFade: true
                }
            });
        })
    }
    const gvSlider = document.querySelectorAll('.gv-slider')
    console.log('gvSlider', gvSlider)
    if (gvSlider) {
        gvSlider.forEach(item => {
            const swiper = item.querySelector('.swiper');
            const pagi = item.querySelector('.swiper-pagination');
            const next = item.querySelector('.swiper-next');
            const prev = item.querySelector('.swiper-prev');
            let isLoop = true;
            if (swiper.classList.contains('loop-none')) {
                isLoop = false;
                item.querySelector(".swiper-next").style = "display: none";
                item.querySelector(".swiper-prev").style = "display: none";
            }
            var slider = new Swiper(swiper, {
                // freeMode: true,
                watchSlidesProgress: true,
                speed: 1200,
                autoplay: {
                    delay: 5000
                },
                pagination: {
                    el: pagi,
                    type: "bullets",
                    clickable: true
                },
                navigation: {
                    nextEl: next,
                    prevEl: prev
                },
                // slidesPerGroup: 2,
                loop: isLoop,
                spaceBetween: 24,
                effect: "slide",
                slidesPerView: 3,
                fadeEffect: {
                    crossFade: true
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1.2,
                        spaceBetween: 10,
                        centeredSlides: false
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 2.5
                    },
                    1200: {
                        slidesPerView: 3
                    }
                }
            });
        })
    }

    const progSlider = document.querySelectorAll('.prog-slider')
    if (progSlider) {
        progSlider.forEach(item => {
            const swiper = item.querySelector('.swiper');
            const pagi = item.querySelector('.swiper-pagination');
            const next = item.querySelector('.swiper-next');
            const prev = item.querySelector('.swiper-prev');
            let isLoop = true;
            if (swiper.classList.contains('loop-none')) {
                isLoop = false;
                item.querySelector(".swiper-next").style = "display: none";
                item.querySelector(".swiper-prev").style = "display: none";
            }
            var slider = new Swiper(swiper, {
                // freeMode: true,
                watchSlidesProgress: true,
                speed: 1200,
                autoplay: {
                    delay: 5000
                },
                pagination: {
                    el: pagi,
                    type: "bullets",
                    clickable: true
                },
                navigation: {
                    nextEl: next,
                    prevEl: prev
                },
                // slidesPerGroup: 2,
                loop: isLoop,
                spaceBetween: 0,
                effect: "fade",
                slidesPerView: 1,
                fadeEffect: {
                    crossFade: true
                }
            });
        })
    }


    const addSlider = document.querySelectorAll('.add-slider')
    if (addSlider) {
        addSlider.forEach(item => {
            const swiper = item.querySelector('.swiper');
            const pagi = item.querySelector('.swiper-pagination');
            const next = item.querySelector('.swiper-next');
            const prev = item.querySelector('.swiper-prev');
            let isLoop = true;
            if (swiper.classList.contains('loop-none')) {
                isLoop = false;
                item.querySelector(".swiper-next").style = "display: none";
                item.querySelector(".swiper-prev").style = "display: none";
            }
            var slider = new Swiper(swiper, {
                // freeMode: true,
                watchSlidesProgress: true,
                speed: 1200,
                autoplay: {
                    delay: 5000
                },
                pagination: {
                    el: pagi,
                    type: "bullets",
                    clickable: true
                },
                navigation: {
                    nextEl: next,
                    prevEl: prev
                },
                // slidesPerGroup: 2,
                loop: isLoop,
                spaceBetween: 0,
                effect: "slide",
                slidesPerView: 1,
                fadeEffect: {
                    crossFade: true
                }
            });
        })
    }


    const proSlider = document.querySelectorAll('.pro-slider')
    if (proSlider) {
        proSlider.forEach(item => {
            const swiper = item.querySelector('.swiper');
            const pagi = item.querySelector('.swiper-pagination');
            const next = item.querySelector('.swiper-next');
            const prev = item.querySelector('.swiper-prev');
            var slider = new Swiper(swiper, {
                // freeMode: true,
                watchSlidesProgress: true,
                speed: 1200,
                autoplay: {
                    delay: 5000
                },
                pagination: {
                    el: pagi,
                    type: "bullets",
                    clickable: true
                },
                navigation: {
                    nextEl: next,
                    prevEl: prev
                },
                // slidesPerGroup: 2,
                loop: false,
                spaceBetween: 24,
                effect: "slide",
                slidesPerView: 4,
                fadeEffect: {
                    crossFade: true
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1.2,
                        spaceBetween: 10,
                        centeredSlides: false
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 2.8
                    },
                    1200: {
                        slidesPerView: 4
                    }
                }
            });
        })
    }


    const hbSlider = document.querySelectorAll('.hb-slider')
    if (hbSlider) {
        hbSlider.forEach(item => {
            const swiper = item.querySelector('.swiper');
            const pagi = item.querySelector('.swiper-pagination');
            const next = item.querySelector('.swiper-next');
            const prev = item.querySelector('.swiper-prev');
            var slider = new Swiper(swiper, {
                // freeMode: true,
                watchSlidesProgress: true,
                speed: 1200,
                autoplay: {
                    delay: 5000
                },
                pagination: {
                    el: pagi,
                    type: "bullets",
                    clickable: true
                },
                navigation: {
                    nextEl: next,
                    prevEl: prev
                },
                // slidesPerGroup: 2,
                loop: false,
                spaceBetween: 24,
                effect: "slide",
                slidesPerView: 3,
                fadeEffect: {
                    crossFade: true
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1.2,
                        spaceBetween: 10,
                        centeredSlides: false
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 2.8
                    },
                    1200: {
                        slidesPerView: 3
                    }
                }
            });
        })
    }


    const valueSlider = document.querySelectorAll('.value-slider')
    if (valueSlider) {
        valueSlider.forEach(item => {
            const swiper = item.querySelector('.swiper');
            const pagi = item.querySelector('.swiper-pagination');
            const next = item.querySelector('.swiper-next');
            const prev = item.querySelector('.swiper-prev');
            var slider = new Swiper(swiper, {
                // freeMode: true,
                watchSlidesProgress: true,
                speed: 1200,
                autoplay: {
                    delay: 5000
                },
                pagination: {
                    el: pagi,
                    type: "bullets",
                    clickable: true
                },
                navigation: {
                    nextEl: next,
                    prevEl: prev
                },
                // slidesPerGroup: 2,
                loop: false,
                spaceBetween: 24,
                effect: "slide",
                slidesPerView: 6,
                fadeEffect: {
                    crossFade: true
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1.2,
                        spaceBetween: 10,
                        centeredSlides: false
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 2.8
                    },
                    1200: {
                        slidesPerView: 6
                    }
                }
            });
        })
    }

}