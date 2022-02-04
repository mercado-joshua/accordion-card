document.addEventListener("readystatechange", function(event) {
    if(event.target.readyState === "complete") {
        console.log("readyState: complete");
        init();
    }
});

function init() {
    const accordionList = document.querySelectorAll("[data-js-accordion-collapsible]");
    if (!accordionList.length) return;

    accordionList.forEach(function(element) {
        element.addEventListener("click", function(event) {
            let clickedElem;

            if(event.target.classList.contains("header")) {
                clickedElem = event.target.parentElement;
            } else {
                clickedElem = event.target.parentElement.parentElement;
            }

            clickedElem.classList.toggle("-expand");
        });
    });
}