// Импортируйте компоненты
import { doc } from "prettier";
import main from "./main";
main();

console.log('Hi!');

// Slider number three

let range = document.querySelector('.slider-three__input');
let rangeNum = document.querySelector('.slider-three__num');
let labelCount = document.querySelector('.slider-three__count');

range.oninput = function () {
    //console.log(this.value);
    rangeNum.style.left = this.value + 'px';
    rangeNum.innerHTML = this.value;
    //labelCount.innerHTML = this.value;
    labelIn.value = this.value;
}

let labelIn = document.querySelector('.slider-three__in');

labelIn.oninput = function () {
    rangeNum.style.left = this.value + 'px';
    rangeNum.innerHTML = this.value;
    range.value = this.value;
}
