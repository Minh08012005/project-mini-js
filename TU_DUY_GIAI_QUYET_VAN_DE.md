# TƯ DUY GIẢI QUYẾT VẤN ĐỀ — Áp dụng cho từng bài tập

> File này là "kim chỉ nam" cho mọi bài tập. Trước khi làm bất kỳ bài nào, hãy đọc lại file này.

---

## PHẦN 1: 5 BƯỚC GIẢI QUYẾT VẤN ĐỀ

Áp dụng cho **mọi thứ**: bài tập, lỗi, project, phỏng vấn.

```
Bước 1: XÁC ĐỊNH VẤN ĐỀ
  "Cái gì đang không hoạt động?"
  "Kết quả mong đợi là gì?"
  "Kết quả thực tế là gì?"

Bước 2: TÌM NGUYÊN NHÂN
  "Tại sao nó không hoạt động?"
  "Dòng code nào gây lỗi?"
  "Dữ liệu đầu vào có đúng không?"

Bước 3: ĐỀ XUẤT GIẢI PHÁP
  "Có những cách nào để sửa?"
  "Cách nào đơn giản nhất?"
  "Cách nào an toàn nhất?"

Bước 4: THỰC HIỆN
  "Sửa code"
  "Chạy thử"
  "Kiểm tra kết quả"

Bước 5: RÚT KINH NGHIỆM
  "Mình đã học được gì?"
  "Lần sau gặp lại thì làm thế nào?"
  "Có cách nào để tránh lỗi này không?"
```

---

## PHẦN 2: ÁP DỤNG CHO TỪNG LOẠI BÀI TẬP

### Loại 1: Bài tập code mẫu (đang làm)

**Ví dụ:** Bài 4 — Array

**Cách áp dụng 5 bước:**

```
Bước 1: Xác định vấn đề
  "Bài này yêu cầu làm gì?"
  → Học về array: tạo, truy xuất, thêm, xóa, duyệt

Bước 2: Tìm hiểu
  "Array là gì?"
  "Có những thao tác nào?"
  "Cú pháp từng thao tác ra sao?"

Bước 3: Làm theo code mẫu
  "Gõ lại code mẫu"
  "Chạy thử"
  "Quan sát kết quả"

Bước 4: Sửa đổi + tự viết
  "Đổi tên biến, thay giá trị"
  "Thêm chức năng mới"
  "Tự viết lại từ đầu"

Bước 5: Rút kinh nghiệm
  "Mình đã hiểu array chưa?"
  "Còn thao tác nào chưa rõ?"
```

### Loại 2: Gặp lỗi khi chạy code

**Ví dụ:** Chạy `node bai4.js` bị lỗi

**Cách áp dụng 5 bước:**

```
Bước 1: Xác định vấn đề
  "Lỗi gì?" → Đọc dòng lỗi đầu tiên
  "Dòng nào?" → Nhìn số dòng trong lỗi

Bước 2: Tìm nguyên nhân
  "Lỗi cú pháp (syntax error)?" → Thiếu dấu ngoặc, dấu chấm phẩy
  "Lỗi tham chiếu (reference error)?" → Biến chưa khai báo
  "Lỗi kiểu dữ liệu (type error)?" → Sai kiểu dữ liệu

Bước 3: Đề xuất giải pháp
  "Google lỗi này"
  "Kiểm tra lại dòng đó"
  "Thêm console.log để debug"

Bước 4: Thực hiện
  "Sửa code"
  "Chạy lại"
  "Nếu vẫn lỗi → quay lại bước 2"

Bước 5: Rút kinh nghiệm
  "Ghi lại lỗi này vào sổ tay"
  "Lần sau tránh mắc lỗi tương tự"
```

### Loại 3: Bài tập tự làm (sửa đổi)

**Ví dụ:** "Thêm 2 sinh viên mới vào mảng"

**Cách áp dụng 5 bước:**

```
Bước 1: Xác định vấn đề
  "Yêu cầu: thêm 2 phần tử vào mảng students"
  "Kết quả mong đợi: mảng có thêm 2 tên"

Bước 2: Tìm giải pháp
  "Có method push() để thêm vào cuối"
  "Có method unshift() để thêm vào đầu"
  "Nên dùng push() vì không yêu cầu vị trí cụ thể"

Bước 3: Thực hiện
  "students.push('Thành')"
  "students.push('Tuân')"

Bước 4: Kiểm tra
  "console.log(students) → xem kết quả"

Bước 5: Rút kinh nghiệm
  "push() thêm vào cuối mảng"
  "Có thể thêm nhiều phần tử cùng lúc: push('a', 'b')"
```

### Loại 4: Khi không biết làm

**Ví dụ:** "Tính tổng mảng số"

**Cách áp dụng 5 bước:**

```
Bước 1: Xác định vấn đề
  "Cần tính tổng các số trong mảng [12, 5, 8, 20, 3]"

Bước 2: Tìm hướng giải quyết
  "Google: 'javascript sum array'"
  "Đọc kết quả: dùng vòng lặp for hoặc reduce"
  "Chọn vòng lặp for vì đã học"

Bước 3: Thực hiện
  let sum = 0
  for (let i = 0; i < num.length; i++) {
    sum += num[i]
  }

Bước 4: Kiểm tra
  "console.log(sum) → 48"

Bước 5: Rút kinh nghiệm
  "Có thể dùng for hoặc reduce"
  "Nhớ khởi tạo sum = 0 trước vòng lặp"
```

---

## PHẦN 3: CÂU HỎI TỰ VẤN — TRƯỚC KHI LÀM BÀI

### Trước khi code:

- [ ] Mình đã đọc kỹ yêu cầu chưa?
- [ ] Mình hiểu bài toán này làm gì?
- [ ] Nó gồm những bước nhỏ nào?
- [ ] Mình đã có kiến thức để làm chưa?

### Trong khi code:

- [ ] Mình đang làm đúng hướng không?
- [ ] Có cách nào đơn giản hơn không?
- [ ] Code này có thể chạy được không?

### Khi gặp lỗi:

- [ ] Lỗi này nói gì? (đọc kỹ dòng lỗi)
- [ ] Dòng nào gây lỗi? (nhìn số dòng)
- [ ] Mình đã Google chưa?
- [ ] Mình đã thử những cách nào?
- [ ] Có nên hỏi AI hướng không? (chỉ sau 3 lần tự thử)

### Sau khi xong:

- [ ] Code chạy đúng kết quả chưa?
- [ ] Mình hiểu từng dòng code không?
- [ ] Mình có thể tự viết lại từ đầu không?
- [ ] Mình đã học được gì từ bài này?

---

## PHẦN 4: KHI NÀO NÊN DÙNG AI?

### Được dùng AI:

- ✅ Hỏi khái niệm: "Callback là gì?"
- ✅ Hỏi cú pháp: "Cú pháp forEach viết thế nào?"
- ✅ Hỏi hướng: "Nên dùng for hay while?"
- ✅ Review code: "Code của tôi có vấn đề gì không?"

### Không được dùng AI:

- ❌ "Viết code cho tôi"
- ❌ "Sửa lỗi này hộ tôi"
- ❌ "Giải bài tập này hộ tôi"
- ❌ "Tối ưu code này hộ tôi"

### Quy tắc: 3 lần tự làm trước khi hỏi AI

1. Tự code lần 1
2. Tự sửa lần 2
3. Tự Google lần 3
4. Nếu vẫn bí → hỏi AI hướng (không hỏi code)

---

## PHẦN 5: VÍ DỤ ÁP DỤNG CHO BÀI 5 (Object)

### Trước khi làm:

```
Bước 1: Xác định vấn đề
  "Bài 5: Học về Object"
  "Object là gì? → tập hợp các cặp key:value"
  "Các thao tác: tạo, truy xuất, thêm, sửa, xóa"

Bước 2: Đọc code mẫu
  "Xem cấu trúc object"
  "Xem cách truy xuất thuộc tính"
  "Xem cách thêm/sửa/xóa"
```

### Trong khi làm:

```
Bước 3: Gõ lại code mẫu
  "Gõ từng dòng, không copy"
  "Chạy thử → xem kết quả"

Bước 4: Sửa đổi
  "Tạo object book"
  "Thêm rating"
  "Sửa year"
  "Tạo object library chứa mảng books"
```

### Sau khi làm:

```
Bước 5: Rút kinh nghiệm
  "Object dùng để nhóm dữ liệu liên quan"
  "Có thể lồng object trong object"
  "Có thể chứa mảng trong object"
```

---

## PHẦN 6: NHẮC NHỞ

> **"Đừng cố nhớ tất cả. Hãy hiểu cách giải quyết vấn đề."**

> **"Mỗi lỗi là một bài học. Mỗi bài tập là một bước tiến."**

> **"Không ai giỏi ngay từ đầu. Quan trọng là không bỏ cuộc."**

---

## CHECKLIST HÀNG NGÀY

Trước khi bắt đầu:

- [ ] Đã đọc file này chưa? (nếu cần nhắc lại)
- [ ] Đã xác định bài tập yêu cầu gì?
- [ ] Đã chia nhỏ vấn đề?

Trong khi làm:

- [ ] Đã tự gõ code (không copy)?
- [ ] Đã chạy thử?
- [ ] Đã tự sửa lỗi (nếu có)?

Sau khi xong:

- [ ] Code chạy đúng?
- [ ] Hiểu từng dòng?
- [ ] Có thể tự viết lại từ đầu?
- [ ] Đã rút ra bài học?
