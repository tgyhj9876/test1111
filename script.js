document.addEventListener("DOMContentLoaded", function () {
    const footnotes = document.querySelectorAll(".footnote");
    const footnotesList = document.querySelector(".footnotes");
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    document.body.appendChild(tooltip);

    footnotes.forEach(function (footnote) {
        footnote.addEventListener("mouseenter", function (e) {
            const tooltipText = footnote.getAttribute("data-tooltip");
            tooltip.innerHTML = tooltipText;
            tooltip.style.left = e.pageX + "px";
            tooltip.style.top = e.pageY + "px";
            tooltip.style.display = "block";
        });

        footnote.addEventListener("mouseleave", function () {
            tooltip.style.display = "none";
        });
    });

    footnotesList.addEventListener("mouseenter", function () {
        footnotesList.style.display = "block";
    });

    footnotesList.addEventListener("mouseleave", function () {
        footnotesList.style.display = "none";
    });
});
