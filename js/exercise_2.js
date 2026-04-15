// NOTE: phân tích xem ở file README.md

// Khai báo biến
const num_1 = document.querySelector("#number_1");
const num_2 = document.querySelector("#number_2");
const num_3 = document.querySelector("#number_3");
const num_4 = document.querySelector("#number_4");
const num_5 = document.querySelector("#number_5");
const averageValue = document.querySelector("#averageValue");
const btn_calAvg = document.querySelector("#btn-calAvg");

// Hàm tính trung bình cộng của 5 số
const calculatorAverange = () => {
    const average = (Number(num_1.value) + Number(num_2.value) + Number(num_3.value) + Number(num_4.value) + Number(num_5.value)) / 5;
    averageValue.innerHTML = average;
}

// Lắng nghe sự kiện click
btn_calAvg.addEventListener("click", calculatorAverange);
