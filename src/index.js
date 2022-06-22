// Импортируйте компоненты
import { doc } from "prettier";
import main from "./main";
main();

console.log('Hi!');

// Slider number three

let range = document.querySelector('.slider-three__input');
let rangeNum = document.querySelector('.slider-three__num');

range.oninput = function () {
    //console.log(this.value);
    rangeNum.style.left = this.value + 'px';
    rangeNum.innerHTML = this.value;
}