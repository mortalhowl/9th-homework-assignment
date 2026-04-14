// NOTE: phân tích xem ở file README.md

// Khai báo biến
const dailyWage = document.querySelector("#dailyWage");
const workdays = document.querySelector("#workdays");
const totalSalary = document.querySelector("#totalSalary");

// console.log(dailyWage.value, workdays.value);

// Hàm tính lương
const calculatorSalary = () => {
    const total = (dailyWage.value * workdays.value).toLocaleString("vi-VN");
    totalSalary.innerText = `${total} VND`;
};


// Gắn sự kiện
workdays.addEventListener("input", calculatorSalary);
dailyWage.addEventListener("input", calculatorSalary);

// Chạy khởi tạo
calculatorSalary();