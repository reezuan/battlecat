import "./style.css";

(() => {
    let div = document.createElement("div");
    let body = document.querySelector("body");

    console.log(body);

    body.appendChild(div);
})();