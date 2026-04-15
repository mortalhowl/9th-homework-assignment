// NOTE: phân tích xem ở file README.md

// Khai báo biến
const lenghRec = document.querySelector("#lenghRec");
const widthRec = document.querySelector("#widthRec");
const areaRec = document.querySelector("#areaRec");
const perimeterRec = document.querySelector("#perimeterRec");

// Function tính diện tích
const calculatorArea = () => {
    const area = lenghRec.value * widthRec.value;
    areaRec.innerText = area;
}

// Functiontính chu vi
const calculatorPerimeter = () => {
    const perimeter = (Number(lenghRec.value) + Number(widthRec.value)) * 2;
    perimeterRec.innerText = perimeter;
}

// Lắng nghe sự kiện change
lenghRec.addEventListener("change", calculatorArea);
lenghRec.addEventListener("change", calculatorPerimeter);
widthRec.addEventListener("change", calculatorArea);
widthRec.addEventListener("change", calculatorPerimeter);

// Khởi tạo ban đầu
calculatorPerimeter();
calculatorArea();