const faq_list = document.querySelectorAll(".faq-item");
faq_list.forEach((faq_item) => {
    const title = faq_item.querySelector(".faq-title");
    title.addEventListener("click", function () {
        faq_list.forEach((faq) => {
            faq.classList.remove('expand');
        });
        faq_item.classList.add('expand');
    });
});
