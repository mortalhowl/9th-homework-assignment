# Phân tích mô hình 3 khối cho 5 bài tập

*Note: Bài tập có sử dụng cú pháp DOM level 2 và một số các kiến thức mới chưa được học.*

## Bài 1: Tính tiền lương nhân viên

### Input:
- Lương 1 ngày làm việc (*value mặc định là 100.000*)
- Số ngày làm việc (*user tự nhập*)

### Proccess:
- **Công thức:** Tổng lương = Lương 1 ngày làm việc * Số ngày làm việc
- Lắng nghe sự kiện thay đổi trong ô input bằng sự kiện `input` (*test cách dùng sự kiện `input`*)
- Tạo 1 hàm để xử lý chung vì cả 2 ô input đều có sự kiện này

### Output:
- Render tổng lương 

---
## Bài 2: Tính giá trị trung bình
### Input:
- 5 số thực (*user tự nhập*)
- Không có validation data
### Proccess:
- **Công thức:** sum(num_1, num_2, num_3, num_4, num_5) / 5
- Lắng nghe sự kiện thay đổi trong ô input bằng sự kiện `click` (*test cách dùng sự kiện `click`*)
### Output:
- Render trung bình cộng của 5 số

---
## Bài 3: Chuyển đổi đơn vị tiền tệ từ USD sang VNĐ
### Input:
- Số tiền Dollars cần quy đổi (value mặc định là 1)
- Giá tiền Việt hiện nay (value mặc định là 23.500)
### Proccess:
- **Công thức:** Số tiền chuyển đổi = Số tiền Dollars cần quy đổi * Giá tiền Việt hiện nay
- Lắng nghe sự kiện thay đổi trong ô input bằng sự kiện `change` (*test cách dùng sự kiện `change`*)
- Tạo 1 hàm để xử lý chung vì cả 2 ô input đều có sự kiện này
### Output:
- Render số tiền chuyển đổi
---
## Bài :
### Input:
### Proccess:
### Output: