const about_button = document.getElementById("about-button");

function handleLayoutButton()
{
    about_button.addEventListener("click", () => {
        window.donut.loadPage("/about/about.html");
    });
}

handleLayoutButton();