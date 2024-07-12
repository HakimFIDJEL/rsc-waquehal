document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form.input__container");
    const formInput = form.querySelector("input");
    const formButton = form.querySelector("button");
    const formList = form.querySelector("ul");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let content = formInput.value;
        console.log(content.length);
        if (content.length == 0) {
            formList.classList.remove('active');
            return;
        } else {
            formList.classList.add('active');
        }

        // On ajoute un écouteur de clic, si on clique autre part, on retire la class active
        const clickOutsideHandler = function(e) {
            if (!form.contains(e.target)) {
                formList.classList.remove('active');
                document.removeEventListener('click', clickOutsideHandler);
            }
        };

        document.addEventListener('click', clickOutsideHandler);
    });
});
