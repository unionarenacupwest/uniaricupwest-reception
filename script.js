
titleInputs.forEach(item => {
    const input = document.getElementById(item.input);
    const options = document.getElementById(item.options);
    const toggle = document.getElementById(item.toggle);

    function showOptions(showAll = false) {
        const keyword = showAll ? "" : input.value.trim().toLowerCase();

        const filteredTitles = allTitles.filter(title =>
            title.toLowerCase().includes(keyword)
        );

        options.innerHTML = "";

        filteredTitles.forEach(title => {
            const option = document.createElement("button");
            option.type = "button";
            option.textContent = title;
            option.className = "title-option";

            option.addEventListener("click", event => {
                event.stopPropagation();
                input.value = title;
                options.style.display = "none";
            });

            options.appendChild(option);
        });

        options.style.display =
            filteredTitles.length > 0 ? "block" : "none";
    }

    input.addEventListener("focus", () => showOptions());
    input.addEventListener("input", () => showOptions());

    toggle.addEventListener("click", event => {
        event.stopPropagation();
        showOptions(true);
    });

    document.addEventListener("click", event => {
        if (!input.contains(event.target) &&
            !options.contains(event.target) &&
            !toggle.contains(event.target)) {
            options.style.display = "none";
        }
    });
});
