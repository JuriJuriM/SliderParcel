// Импортируйте компоненты
import { doc } from "prettier";
import main from "./main";
main();

console.log('Hi!');

// Slider number three

let range = document.querySelector('.slider-three__input');
let rangeNum = document.querySelector('.slider-three__num');
let labelIn = document.querySelector('.slider-three__in');

range.oninput = function () {
    rangeNum.style.left = this.value + 'px';
    rangeNum.innerHTML = this.value;
    labelIn.value = this.value;
}

labelIn.oninput = function () {
    rangeNum.style.left = this.value + 'px';
    rangeNum.innerHTML = this.value;
    range.value = this.value;
}
