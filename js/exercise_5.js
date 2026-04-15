// NOTE: phân tích xem ở file README.md

// Khai báo biến
const twoDigit = document.querySelector("#twoDigit");
const sumTwoDigit = document.querySelector("#sumTwoDigit");

// function tính tổng 2 ký số
const calculatorTwoDigit = () => {
    const tens = Math.floor(twoDigit.value / 10);
    const units = twoDigit.value % 10;
    const sum = tens + units;
    sumTwoDigit.innerText = sum;
}

// Lắng nghe sự kiện input
twoDigit.addEventListener("input", calculatorTwoDigit);

//Khởi tạo đầu
calculatorTwoDigit();