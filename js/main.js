// 1
document.querySelector(".btn_1").addEventListener("click", () => alert("Hello world!"));

// 2 
const min = 1;
const max = 101;

const randNum = Math.floor(Math.random() * (max - min) ) + min;

const input1 = document.querySelector(".inp_1");
const result = document.querySelector(".result");

document.querySelector(".btn_2").addEventListener("click", () => {
    if (Number(input1.value) === randNum) {
        result.textContent = "Ви вгадали!";
    } else {
        result.textContent = "Ви не вгадали(";
    }
});

// 3
let clicks = 0;
const clicksDesc = document.querySelector(".clicks");

document.querySelector(".btn_3").addEventListener("click", () => {
    clicks += 1;
    clicksDesc.textContent = `Кількість кліків: ${clicks}`;
});

// 4
console.log("4: \n")
const applyCallbackToEachElement = (arr, callback) => arr.map(callback);

const arr = [1, 2, 3, 4, 5];
const squareCallback = (el) => el ** 2;

const resultOfFunction = applyCallbackToEachElement(arr, squareCallback);
console.log(resultOfFunction);

// 5
console.log("\n5: \n")
const calculateDiscountedPrice = (price, discount, callback) => 
    console.log(callback(price, discount));

const showDiscountedPrice = (price, discount) => price - (price / 100 * discount);

calculateDiscountedPrice(250, 40, showDiscountedPrice);

