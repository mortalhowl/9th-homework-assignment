// NOTE: phân tích xem ở file README.md

//Khai báo biến
const usdDollars = document.querySelector("#usdDollars");
const vietnameseDong = document.querySelector("#vietnameseDong");
const exchangeMoney = document.querySelector("#exchangeMoney");

// function dùng chung
const exchage = () => {
    const output = (usdDollars.value * vietnameseDong.value).toLocaleString("vi-VN");
    exchangeMoney.innerHTML = `${output} VND`;
}

// Lắng nghe sự kiện change
usdDollars.addEventListener("change", exchage);
vietnameseDong.addEventListener("change", exchage);

// Khởi tạo
exchage();