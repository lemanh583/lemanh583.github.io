export default function HeaderModule() {
    const header = document.querySelector(".header");
    const mobile = document.querySelector(".mobile");
    const mobileOverlay = document.querySelector(".mobile-overlay");
    const search = document.querySelector(".search-mona");
    const menuPage = document.querySelector(".menu-page");

    if (header && mobile && mobileOverlay) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 0) {
                header.classList.add("sticky");
                mobile.classList.add("sticky");
                mobileOverlay.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
                mobile.classList.remove("sticky");
                mobileOverlay.classList.remove("sticky");
            }
            // if (menuPage) {
            //     if ($(window).scrollTop() > menuPage.offsetTop - 200) {
            //         if (window.innerWidth <= 1200) {
            //             menuPage.classList.add("menu-fixed");
            //             menuPage.classList.remove("menu-none-fixed");
            //         }
            //     } else if ($(window).scrollTop() == 0) {
            //         if (window.innerWidth <= 1200) {
            //             menuPage.classList.remove("menu-fixed");
            //             menuPage.classList.add("menu-none-fixed");
            //         }
            //     }
            // }
        });
    }
    $(document).ready(function() {
        if (header && mobile && mobileOverlay) {
            window.addEventListener("scroll", function() {
                if (window.scrollY > 0) {
                    header.classList.add("sticky");
                } else {
                    header.classList.remove("sticky");
                }
            });
        }
    });

    // const toRegi = document.querySelector(".to-regis");
    // if (toRegi) {
    //     window.addEventListener("scroll", () => {
    //         if ($(window).scrollTop() > toRegi.offsetTop - 60) {
    //             console.log("run");
    //             toRegi.classList.add("toregi-fixed");
    //             toRegi.classList.remove("toregi-none-fixed");
    //         } else if ($(window).scrollTop() == 0) {
    //             toRegi.classList.remove("toregi-fixed");
    //             toRegi.classList.add("toregi-none-fixed");
    //         }
    //     });
    // }
}