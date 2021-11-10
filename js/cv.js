let education = document.querySelectorAll(".education");
education.forEach((acc) =>
    acc.addEventListener("click", () => {
        acc.classList.toggle("active");
        let education_text = acc.nextElementSibling;
        education_text.classList.toggle("activeP");
        if (education_text.style.maxHeight) {
            education_text.style.maxHeight = null;
        } else {
            education_text.style.maxHeight = education_text.scrollHeight + "px";
        }
    })
);
