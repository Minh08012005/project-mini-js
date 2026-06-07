# CHIẾN LƯỢC HỌC BACKEND NODE.JS

> Tập trung vào NHỮNG THỨ KHÔNG THAY ĐỔI, không chạy theo công nghệ mới.
> "Công nghệ thay đổi mỗi năm. Tư duy thì không."

---

## PHÂN BIỆT: Cái không đổi vs Cái thay đổi

### Cái KHÔNG ĐỔI (học một lần, dùng cả đời)

| Kỹ năng                   | Mô tả                                    |
| ------------------------- | ---------------------------------------- |
| Tư duy lập trình          | Chia nhỏ vấn đề, trừu tượng hóa, pattern |
| Debug                     | Đọc lỗi, console.log, tìm nguyên nhân    |
| Đọc document              | Đọc hiểu tài liệu kỹ thuật tiếng Anh     |
| Google search             | Biết cách search đúng từ khóa            |
| Cấu trúc dữ liệu cơ bản   | Array, Object, cách tổ chức dữ liệu      |
| HTTP & REST API           | Request/Response, method, status code    |
| Database fundamentals     | CRUD, relationship, index                |
| Git                       | Commit, push, pull, branch               |
| Logic & giải quyết vấn đề | Tự nghĩ ra giải pháp                     |

### Cái THAY ĐỔI (có thể học sau, không cần học sớm)

| Công nghệ                              | Ghi chú                                         |
| -------------------------------------- | ----------------------------------------------- |
| Framework cụ thể (Express, Nest.js...) | Express là ổn định nhất để bắt đầu              |
| Database cụ thể (MongoDB, MySQL...)    | Học 1 cái, hiểu nguyên lý là dùng được cái khác |
| Thư viện cụ thể (JWT, bcrypt...)       | Chỉ là công cụ, đọc doc là dùng được            |
| Cloud (AWS, GCP, Azure...)             | Render/Railway đủ cho ban đầu                   |
| Docker, Kubernetes                     | Học sau khi có việc                             |

---

## LỘ TRÌNH 4 THÁNG

Mỗi giai đoạn có:

- **Mục đích:** Tại sao làm giai đoạn này
- **Kiến thức cốt lõi:** Những thứ không đổi cần nắm
- **Sản phẩm:** Cái cụ thể để chứng minh
- **Thời gian:** Bao lâu

---

### GIAI ĐOẠN 0: NỀN TẢNG (đang làm — Tháng 6)

**Mục đích:** Xây dựng tư duy lập trình và phản xạ code JavaScript cơ bản. Đây là nền móng — không vững thì đổ.

**Thời gian:** 2 tuần

**Kiến thức cốt lõi (không đổi):**

- Biến, kiểu dữ liệu, toán tử
- If/else, vòng lặp (for, while)
- Array và các thao tác cơ bản (push, pop, duyệt)
- Object và thao tác
- Function: khai báo, gọi, tham số, return
- Array methods: map, filter, find, forEach
- Callback, Promise, async/await
- try/catch, error handling

**Sản phẩm đầu ra:**

- 10+ file bài tập JavaScript ✅ (đã có 4 bài)
- 1 project console nhỏ: Quản lý danh bạ (CRUD bằng mảng)

**Tiến độ hiện tại:**

```
Bài 1 ✅ → Bài 2 ✅ → Bài 3 ✅ → Bài 4 ✅ → Bài 5 ⬜ → ... → Bài 14 ⬜
```

---

### GIAI ĐOẠN 1: BACKEND CƠ BẢN (Tháng 7)

**Mục đích:** Hiểu cách web hoạt động phía server. Biết xây dựng API, xử lý request/response, kết nối database.

**Thời gian:** 4 tuần

**Kiến thức cốt lõi (không đổi):**

- HTTP là gì? Request/Response cycle
- REST API design (method, endpoint, status code)
- Server là gì? Cách hoạt động
- Database là gì? Tại sao cần?
- CRUD pattern (Create, Read, Update, Delete)
- JSON format
- Middleware pattern
- Error handling pattern
- Authentication pattern (JWT)

**Công nghệ cụ thể (có thể thay đổi):**

- Node.js + Express
- MongoDB + Mongoose
- Postman
- Git

**Sản phẩm đầu ra:**
| Project | Mô tả | Thời gian |
|---------|-------|-----------|
| Todo API | CRUD với file JSON | 3 ngày |
| Blog API | CRUD với MongoDB | 4 ngày |
| Auth API | Register + Login + JWT | 3 ngày |

**Mục tiêu cuối giai đoạn:**

- ✅ Tự tạo được API CRUD từ đầu
- ✅ Kết nối được database
- ✅ Test được API bằng Postman
- ✅ 3 project trên GitHub

---

### GIAI ĐOẠN 2: PROJECT THỰC TẾ (Tháng 8)

**Mục đích:** Áp dụng kiến thức vào bài toán thực tế. Học cách giải quyết vấn đề phức tạp, hiểu business logic.

**Thời gian:** 4 tuần

**Kiến thức cốt lõi (không đổi):**

- Database design (relationship, schema design)
- Business logic (xử lý nghiệp vụ thực tế)
- Pagination, search, filter
- File upload
- Validation
- Logging
- Rate limiting cơ bản
- CORS
- Environment variables

**Sản phẩm đầu ra:**
| Project | Mô tả | Thời gian |
|---------|-------|-----------|
| E-commerce API | Product, Cart, Order | 10 ngày |
| Deploy | Đưa API lên Render/Railway | 2 ngày |

**Mục tiêu cuối giai đoạn:**

- ✅ Hiểu được business logic
- ✅ Tự thiết kế database cho bài toán thực tế
- ✅ Có API deploy trên cloud
- ✅ Có README cho từng project

---

### GIAI ĐOẠN 3: CHUẨN BỊ PHỎNG VẤN (Tháng 9)

**Mục đích:** Chứng minh được giá trị với nhà tuyển dụng. Không chỉ "biết code" mà còn "biết giải quyết vấn đề".

**Thời gian:** 4 tuần

**Không phải học thêm kiến thức mới, mà là:**

- Ôn tập toàn bộ kiến thức cốt lõi
- Luyện trả lời câu hỏi phỏng vấn
- Làm project test (giả lập)
- Mock interview
- Chuẩn bị CV + Portfolio

**Sản phẩm đầu ra:**

- CV hoàn chỉnh
- Portfolio GitHub với 4-5 project
- Bài test phỏng vấn hoàn thành trong 2-3 ngày

---

## GIÁ TRỊ TẠI TỪNG MỐC THỜI GIAN

```
Hiện tại (0 tháng):
  └── Đọc hiểu code cơ bản, chưa tự code được

Sau Giai đoạn 0 (2 tuần):
  └── Tự viết được JavaScript cơ bản, tự debug lỗi đơn giản
  └── Giá trị: KHÔNG CẦN AI ĐỂ VIẾT CODE CƠ BẢN

Sau Giai đoạn 1 (6 tuần):
  └── Tự xây được API CRUD, kết nối database
  └── Giá trị: CÓ THỂ LÀM ĐƯỢC VIỆC ĐƠN GIẢN

Sau Giai đoạn 2 (10 tuần):
  └── Tự giải quyết bài toán thực tế, deploy lên cloud
  └── Giá trị: CÓ THỂ ĐÓNG GÓP VÀO DỰ ÁN THẬT

Sau Giai đoạn 3 (14 tuần = ~3.5 tháng):
  └── Tự tin phỏng vấn, có portfolio, có CV
  └── Giá trị: SẴN SÀNG ĐI LÀM INTERN
```

---

## NGUYÊN TẮC HỌC

### Mỗi ngày:

1. Code 1-2 tiếng (không bỏ ngày nào)
2. Tự gõ, không copy AI
3. Google trước khi hỏi
4. Ghi chép những gì đã học

### Mỗi tuần:

1. Hoàn thành 5-6 bài tập hoặc 1 project
2. Ôn lại kiến thức tuần trước
3. Commit lên GitHub

### Mỗi tháng:

1. Tự đánh giá: "Mình đã làm được gì mà tháng trước chưa làm được?"
2. Cập nhật CONTEXT.md
3. Điều chỉnh lộ trình nếu cần

---

## KIỂM TRA ĐỊNH KỲ

### Cuối Giai đoạn 0 (2 tuần):

- [ ] Tự viết được 5 bài tập JavaScript mà không cần nhìn code mẫu
- [ ] Tự làm được project console: Quản lý danh bạ
- [ ] Hiểu và dùng được: biến, if/else, loop, array, object, function
- [ ] Biết debug bằng console.log

### Cuối Giai đoạn 1 (6 tuần):

- [ ] Tự tạo được API CRUD từ file trắng
- [ ] Kết nối được MongoDB
- [ ] Test API bằng Postman
- [ ] Có 3 project trên GitHub (Todo, Blog, Auth)

### Cuối Giai đoạn 2 (10 tuần):

- [ ] Tự thiết kế database cho bài toán thực tế
- [ ] Có 1 project deploy lên cloud
- [ ] Viết được README cho project
- [ ] Hiểu business logic cơ bản

### Cuối Giai đoạn 3 (14 tuần):

- [ ] Trả lời được 10 câu hỏi phỏng vấn thường gặp
- [ ] Làm xong project test trong 2-3 ngày
- [ ] Có CV + Portfolio hoàn chỉnh
- [ ] Tự tin đi phỏng vấn

---

## TỔNG KẾT

> **"Đừng học công nghệ. Hãy học cách xây dựng giải pháp."**
>
> Công nghệ thay đổi mỗi năm. Nhưng cách bạn nghĩ, cách bạn debug, cách bạn giải quyết vấn đề — đó là thứ không bao giờ thay đổi.
