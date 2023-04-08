export default function SearchModule() {
    const searchBtn = document.querySelector(".header-search-icon");
    const searchMona = document.querySelector(".search-mona");
    const body = document.getElementsByTagName("body")[0];
    if (searchBtn) {
        searchBtn.addEventListener("click", () => {
            searchMona.classList.add("open");
            body.classList.add("no-scroll");
        });
    }
}