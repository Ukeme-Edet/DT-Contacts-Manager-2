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
    dailDown.addEventListener("click", dailDownClick)
}

function dailpadClick(e) {
    bounceOut(e.target);
    dail.classList.add("dail-up");
    mainView.classList.add("main-view-dail");
}

function dailDownClick() {
    ripple();
    dail.classList.remove("dail-up");
    mainView.classList.remove("main-view-dail");
}

function bounceOut(target) {

}

function ripple() {

}