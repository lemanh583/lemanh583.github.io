export default function PopupModule() {
    // $(document).ready(function() {
    //     $(".prog-play, .visit-video-btn, .hds-play").magnificPopup({
    //         // disableOn: 500,
    //         type: "iframe",
    //         mainClass: "mfp-fade",
    //         removalDelay: 160,
    //         preloader: false,
    //         fixedContentPos: false
    //     });
    // });
    const popupClose = document.querySelectorAll(".popup-close");
    const popupOverlay = document.querySelectorAll(".popup-overlay");
    const body = document.getElementsByTagName("body")[0];
    const popup = document.querySelectorAll(".popup");
    const popupOpen = document.querySelectorAll(".popup-open");
    if (popupOpen) {
        for (let i = 0; i < popupOpen.length; i++) {
            const item = popupOpen[i];
            item.addEventListener("click", (e) => {
                e.preventDefault();
                popup[i].classList.add("open");
            });
        }
    }
    if (popupClose) {
        popupClose.forEach((item) => {
            item.addEventListener("click", () => {
                popup.forEach((item) => {
                    item.classList.remove("open");
                    body.classList.remove("no-scroll");
                });
            });
        });
    }
    if (popupOverlay) {
        popupOverlay.forEach((item) => {
            item.addEventListener("click", () => {
                popup.forEach((item) => {
                    item.classList.remove("open");
                    body.classList.remove("no-scroll");
                });
            });
        });
    }
}