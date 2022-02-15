let toggle = document.getElementById("theme-toggle");

toggle.onclick = function () {

    let currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "dark";

    if (currentTheme === "dark") {
        targetTheme = "light";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
};