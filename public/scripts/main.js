const burgerIcon = document.querySelector(".navigation-bar__burger-icon");
const burgerIconComponents = document.querySelectorAll(".navigation-bar__burger-icon div");
const navigationMenu = document.querySelector(".navigation-menu");
const menuElements = document.querySelectorAll(".navigation-menu__main-link, .navigation-menu__line-break, .navigation-menu__social-links");

burgerIcon.addEventListener("click", async() => {
    // burgerIcon.classList.toggle("unclickable");
    navigationMenu.classList.toggle("active");
    console.log(burgerIconComponents);
    burgerIconComponents.forEach(component => {
        component.classList.toggle("active");
    });
    // setTimeout(async() => {
    for (let element of menuElements) {
        await fadeInLink(element);
    };
    // }, 250);
    // setTimeout(() => {
    //     burgerIcon.classList.toggle("unclickable");
    // }, 1000);
});

const fadeInLink = link => {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            link.classList.toggle("fadeFromBottom");
            res();
        }, 100);
    });
    return promise;
};