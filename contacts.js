let dailpad = document.querySelector(".dail-pad"), dail = document.querySelector(".dail"), mainView = document.querySelector(".main-view"), dailDown = document.querySelector(".dail-down");

function elt(type, classes, props, ...childern) {
    let dom = document.createElement(type);
    for (let clas of classes) dom.classList.add(clas);
    if (props) dom = {dom, ...props}
    for (let child of childern) {
        if (typeof child != "string") dom.appendChild(child);
        else dom.appendChild(document.createTextNode(child));
    }
    return dom;
}

function main() {
    dailpad.addEventListener("click", dailpadClick);
    dailDown.addEventListener("click", dailDownClick);
}

function dailpadClick() {
    setTimeout(() => {
        dailpad.style.display = "none";
    }, 500);
    bounceOut(dailpad);
    dailpad.classList.add("transparent");
    dail.style.display = "flex";
    setTimeout(() => {
        dail.classList.add("dail-up");
    }, 1);
    mainView.classList.add("main-view-dail");
}

function dailDownClick() {
    ripple();
    dailpad.style.display = "flex";
    setTimeout(() => {
        dailpad.style.bottom = "0vh";
        dailpad.classList.remove("transparent");
    }, 1);
    setTimeout(() => {
        dailpad.style.bottom = "";
    }, 100)
    dail.classList.remove("dail-up");
    mainView.classList.remove("main-view-dail");
}

function bounceOut(target) {
    target.style.animation = "bounceOut .25s ease-in 0s";
    setTimeout(() => {
        target.style.animation = "";
    }, 250);
}

function ripple() {

}