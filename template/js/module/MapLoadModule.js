export default function MapLoadModule() {
    const locationMaps = document.querySelectorAll(".location-map iframe");
    if (locationMaps) {
        locationMaps.forEach((item) => {
            item.addEventListener("load", () => {
                const loader = item.parentElement.querySelector(".loader-wrapper");
                $(loader).fadeOut();
            });
        });
    }
}