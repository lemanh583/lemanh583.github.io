export default function FaqsModule() {
    const faqsHeads = document.querySelectorAll(".faqs-head");
    if (faqsHeads) {
        faqsHeads.forEach((item) => {
            item.addEventListener("click", () => {
                const body = item.parentElement.querySelector(".faqs-body");
                $(body).slideToggle();
                $(item.parentElement).toggleClass("active");
            });
        });
    }
}