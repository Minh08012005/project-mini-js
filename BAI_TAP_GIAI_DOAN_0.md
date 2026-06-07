# BÀI TẬP GIAI ĐOẠN 0 — JavaScript Nền Tảng

> Mục tiêu: Hình thành phản xạ code và tư duy lập trình.
> Mỗi bài: Gõ code mẫu → Sửa đổi → Tự viết lại → Rút kinh nghiệm.

---

## CẤU TRÚC MỖI BÀI

1. **Gõ lại code mẫu** (tự gõ, không copy)
2. **Chạy thử** — xem kết quả
3. **Sửa đổi** — làm theo yêu cầu trong phần "Bài tập sửa đổi"
4. **Tự viết lại từ đầu** — đóng file, tự viết lại không nhìn
5. **Rút kinh nghiệm** — trả lời câu hỏi trong phần "Tự vấn"

---

## BÀI 1: BIẾN VÀ CONSOLE.LOG ✅ (ĐÃ XONG)

### Code mẫu:

```javascript
let name = "Minh";
let age = 20;
let isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);
console.log("Tên:", name, "Tuổi:", age);
```

### Bài tập sửa đổi:

- [ ] Đổi `name` thành tên thật của bạn
- [ ] Đổi `age` thành tuổi thật
- [ ] Thêm biến `hometown` (quê quán)
- [ ] In thêm dòng: `"Tôi đến từ [quê]"`

### Tự vấn:

- [ ] `let` dùng để làm gì?
- [ ] `console.log()` dùng để làm gì?
- [ ] Dấu `=` có nghĩa là gì?
- [ ] Phân biệt: `name` (không ngoặc) và `"name"` (có ngoặc)?

---

## BÀI 2: KIỂU DỮ LIỆU VÀ TOÁN TỬ ✅ (ĐÃ XONG)

### Code mẫu:

```javascript
let soNguyen = 10;
let soThuc = 3.14;
let chuoi = "Hello";
let dungSai = false;
let khongXacDinh;
let rong = null;

console.log(typeof soNguyen);
console.log(typeof chuoi);
console.log(typeof dungSai);
console.log(typeof khongXacDinh);
console.log(typeof rong);

let a = 15;
let b = 4;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
```

### Bài tập sửa đổi:

- [ ] Thêm 2 biến số khác, tính tổng, hiệu, tích, thương
- [ ] Tính `(a + b) * 2` và in ra
- [ ] Kiểm tra `a % 2 === 0` — in ra `"a là số chẵn"` hay `"a là số lẻ"`

### Tự vấn:

- [ ] `typeof` dùng để làm gì?
- [ ] `%` (chia lấy dư) dùng để làm gì?
- [ ] `undefined` khác `null` thế nào?
- [ ] Tại sao `typeof null` lại ra "object"?

---

## BÀI 3: IF/ELSE VÀ VÒNG LẶP FOR ✅ (ĐÃ XONG)

### Code mẫu:

```javascript
let diem = 75;
if (diem >= 90) {
  console.log("A");
} else if (diem >= 80) {
  console.log("B");
} else if (diem >= 70) {
  console.log("C");
} else if (diem >= 60) {
  console.log("D");
} else {
  console.log("F");
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 5; i >= 1; i--) {
  console.log(i);
}

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
```

### Bài tập sửa đổi:

- [ ] Thêm biến `nhietDo`, in ra: >=35 "rất nóng", >=25 "ấm áp", >=15 "mát mẻ", <15 "lạnh"
- [ ] In các số lẻ từ 1 đến 15 bằng vòng lặp
- [ ] In bảng cửu chương 5 (5x1=5, 5x2=10, ..., 5x10=50)

### Tự vấn:

- [ ] `if/else if/else` hoạt động thế nào?
- [ ] Vòng lặp `for` gồm mấy phần? (khởi tạo, điều kiện, bước nhảy)
- [ ] `i++` khác `i += 2` thế nào?
- [ ] Làm sao để vòng lặp chạy mãi mãi?

---

## BÀI 4: ARRAY CƠ BẢN ✅ (ĐÃ XONG)

### Code mẫu:

```javascript
let fruits = ["Táo", "Cam", "Xoài", "Nho", "Dưa hấu"];
console.log("Danh sách trái cây:", fruits);
console.log("Phần tử đầu tiên:", fruits[0]);
console.log("Phần tử thứ 3:", fruits[2]);
console.log("Phần tử cuối cùng:", fruits[fruits.length - 1]);
console.log("Số lượng trái cây:", fruits.length);

fruits.push("Bưởi");
console.log("Sau khi thêm Bưởi:", fruits);

let lastFruit = fruits.pop();
console.log("Phần tử đã xóa:", lastFruit);
console.log("Sau khi xóa:", fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(i + 1 + ".", fruits[i]);
}
```

### Bài tập sửa đổi:

- [ ] Tạo mảng `students` chứa tên 5 người bạn
- [ ] In ra tên đầu tiên và cuối cùng
- [ ] Thêm 2 sinh viên mới vào mảng
- [ ] Dùng vòng lặp in danh sách với số thứ tự
- [ ] Tạo mảng số `[12, 5, 8, 20, 3]`, tính tổng bằng vòng lặp

### Tự vấn:

- [ ] `fruits[0]` lấy phần tử thứ mấy?
- [ ] `fruits.length` trả về gì?
- [ ] `push()` và `pop()` làm gì?
- [ ] Tại sao `fruits[fruits.length - 1]` là phần tử cuối?

---

## BÀI 5: OBJECT CƠ BẢN ⬜ (CHUẨN BỊ LÀM)

### Code mẫu:

```javascript
let person = {
  name: "Minh",
  age: 21,
  isStudent: true,
  hobbies: ["Đọc sách", "Code", "Chơi game"],
};

console.log("Tên:", person.name);
console.log("Tuổi:", person["age"]);
console.log("Sở thích:", person.hobbies);

person.email = "minh@email.com";
console.log("Sau khi thêm email:", person);

person.age = 22;
console.log("Sau khi sửa tuổi:", person);

delete person.isStudent;
console.log("Sau khi xóa isStudent:", person);

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2024,
  owner: {
    name: "Minh",
    license: "B2",
  },
};
console.log("Tên chủ xe:", car.owner.name);
console.log("Hãng xe:", car.brand);
```

### Bài tập sửa đổi:

- [ ] Tạo object `book` với: title, author, year, genres (mảng)
- [ ] In ra tên sách và tác giả
- [ ] Thêm thuộc tính `rating`
- [ ] Sửa `year` thành năm mới hơn
- [ ] Tạo object `library` chứa: name, address, books (mảng chứa 2-3 object sách)
- [ ] In ra tên thư viện và danh sách sách

### Tự vấn:

- [ ] Object dùng để làm gì?
- [ ] `person.name` và `person["name"]` khác gì nhau?
- [ ] Làm sao để thêm thuộc tính mới?
- [ ] Làm sao để xóa thuộc tính?
- [ ] Object lồng nhau là gì?

---

## BÀI 6: FUNCTION ⬜

### Code mẫu:

```javascript
// Hàm không tham số
function sayHello() {
  console.log("Xin chào!");
}
sayHello();

// Hàm có tham số
function greet(name) {
  console.log("Xin chào,", name);
}
greet("Minh");
greet("Nam");

// Hàm có return
function add(a, b) {
  return a + b;
}
let result = add(5, 3);
console.log("5 + 3 =", result);

// Hàm với nhiều tham số
function introduce(name, age, hometown) {
  console.log("Tôi tên là", name);
  console.log("Tôi", age, "tuổi");
  console.log("Tôi đến từ", hometown);
}
introduce("Minh", 21, "Nam Định");

// Arrow function
const multiply = (a, b) => a * b;
console.log("5 * 3 =", multiply(5, 3));
```

### Bài tập sửa đổi:

- [ ] Viết hàm `tinhDiemTrungBinh(toan, van, anh)` — in ra điểm trung bình
- [ ] Viết hàm `kiemTraChanLe(n)` — in ra "chẵn" hoặc "lẻ"
- [ ] Viết hàm `timMax(a, b, c)` — trả về số lớn nhất
- [ ] Viết hàm `hienThiDanhSach(arr)` — in ra từng phần tử kèm số thứ tự
- [ ] Chuyển các hàm trên thành arrow function

### Tự vấn:

- [ ] Function dùng để làm gì?
- [ ] Tham số (parameter) khác đối số (argument) thế nào?
- [ ] `return` dùng để làm gì? Nếu không có return thì sao?
- [ ] Arrow function khác function thường thế nào?

---

## BÀI 7: ÔN TẬP + KIỂM TRA ⬜

### Bài tập tổng hợp: Quản lý danh bạ

**Yêu cầu:** Viết chương trình console quản lý danh bạ.

```javascript
// Dữ liệu mẫu
let contacts = [
  { name: "Minh", phone: "0123456789", email: "minh@email.com" },
  { name: "Nam", phone: "0987654321", email: "nam@email.com" },
  { name: "Hoa", phone: "0369852147", email: "hoa@email.com" },
];

// Yêu cầu:
// 1. Viết hàm hienThiDanhBa() — in ra tất cả contact
// 2. Viết hàm themContact(name, phone, email) — thêm contact mới
// 3. Viết hàm xoaContact(name) — xóa contact theo tên
// 4. Viết hàm timKiem(keyword) — tìm contact theo tên hoặc số điện thoại
// 5. Viết hàm capNhat(name, phone, email) — sửa thông tin contact
```

### Tự vấn:

- [ ] Mảng chứa object — cách truy xuất thế nào?
- [ ] Dùng method nào để xóa phần tử theo điều kiện?
- [ ] Dùng method nào để tìm phần tử?
- [ ] Có thể tự viết lại toàn bộ chương trình không?

---

## BÀI 8: ARRAY METHODS — forEach, map ⬜

### Code mẫu:

```javascript
let numbers = [1, 2, 3, 4, 5];

// forEach - duyệt mảng
console.log("forEach:");
numbers.forEach(function (num) {
  console.log(num);
});

// forEach với arrow function
console.log("forEach (arrow):");
numbers.forEach((num) => console.log(num));

// map - tạo mảng mới
let doubled = numbers.map((num) => num * 2);
console.log("Mảng gốc:", numbers);
console.log("Mảng nhân đôi:", doubled);

// map với object
let students = [
  { name: "Minh", score: 8 },
  { name: "Nam", score: 9 },
  { name: "Hoa", score: 7 },
];
let names = students.map((student) => student.name);
console.log("Danh sách tên:", names);
```

### Bài tập sửa đổi:

- [ ] Dùng forEach in ra "Số thứ i là x"
- [ ] Dùng map tạo mảng `[2, 4, 6, 8, 10]` từ mảng `[1, 2, 3, 4, 5]`
- [ ] Dùng map tạo mảng chứa tên sản phẩm từ mảng object products
- [ ] So sánh forEach và map — khi nào dùng cái nào?

### Tự vấn:

- [ ] `forEach` khác `for` thế nào?
- [ ] `map` trả về gì?
- [ ] `forEach` có trả về gì không?
- [ ] Khi nào dùng forEach? Khi nào dùng map?

---

## BÀI 9: ARRAY METHODS — filter, find ⬜

### Code mẫu:

```javascript
let numbers = [10, 15, 20, 25, 30, 35];

// filter - lọc mảng
let soLonHon20 = numbers.filter((num) => num > 20);
console.log("Số > 20:", soLonHon20);

let soChan = numbers.filter((num) => num % 2 === 0);
console.log("Số chẵn:", soChan);

// find - tìm phần tử đầu tiên
let firstLonHon20 = numbers.find((num) => num > 20);
console.log("Số đầu tiên > 20:", firstLonHon20);

// filter với object
let products = [
  { name: "Áo", price: 150000 },
  { name: "Quần", price: 200000 },
  { name: "Mũ", price: 50000 },
  { name: "Giày", price: 300000 },
];

let giaRe = products.filter((p) => p.price < 100000);
console.log("Sản phẩm giá rẻ:", giaRe);

let ao = products.find((p) => p.name === "Áo");
console.log("Tìm áo:", ao);
```

### Bài tập sửa đổi:

- [ ] Lọc số lẻ từ mảng `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`
- [ ] Tìm sản phẩm có giá cao nhất
- [ ] Lọc sinh viên có điểm >= 8 từ mảng students
- [ ] Tìm sinh viên tên "Minh" từ mảng students

### Tự vấn:

- [ ] `filter` trả về mảng hay một phần tử?
- [ ] `find` trả về mảng hay một phần tử?
- [ ] Nếu không tìm thấy, `find` trả về gì?
- [ ] `filter` khác `find` thế nào?

---

## BÀI 10: XỬ LÝ CHUỖI ⬜

### Code mẫu:

```javascript
let str = "  Xin chào, tôi là Minh!  ";

// Độ dài chuỗi
console.log("Độ dài:", str.length);

// Loại bỏ khoảng trắng đầu cuối
console.log("Trim:", str.trim());

// Chuyển hoa/thường
console.log("In hoa:", str.toUpperCase());
console.log("In thường:", str.toLowerCase());

// Cắt chuỗi
console.log("Cắt từ vị trí 4:", str.slice(4));
console.log("Cắt từ 4 đến 9:", str.slice(4, 9));

// Tách chuỗi thành mảng
let words = str.trim().split(" ");
console.log("Mảng từ:", words);

// Nối mảng thành chuỗi
let joined = words.join(" - ");
console.log("Nối lại:", joined);

// Kiểm tra chứa
console.log("Có chứa 'Minh'?", str.includes("Minh"));
console.log("Bắt đầu bằng 'Xin'?", str.trim().startsWith("Xin"));
console.log("Kết thúc bằng '!'?", str.trim().endsWith("!"));
```

### Bài tập sửa đổi:

- [ ] Viết hàm `demSoTu(str)` — đếm số từ trong chuỗi
- [ ] Viết hàm `daoNguocChuoi(str)` — đảo ngược chuỗi
- [ ] Viết hàm `kiemTraPalindrome(str)` — kiểm tra chuỗi đối xứng
- [ ] Viết hàm `vietHoaChuCaiDau(str)` — viết hoa chữ cái đầu mỗi từ

### Tự vấn:

- [ ] `split("")` và `split(" ")` khác nhau thế nào?
- [ ] `slice` và `substring` khác gì nhau?
- [ ] `includes` trả về kiểu dữ liệu gì?
- [ ] Làm sao để đảo ngược chuỗi?

---

## BÀI 11: CALLBACK VÀ setTimeout ⬜

### Code mẫu:

```javascript
// Callback là hàm truyền vào hàm khác
function greet(name, callback) {
  console.log("Xin chào,", name);
  callback();
}

function sayGoodbye() {
  console.log("Tạm biệt!");
}

greet("Minh", sayGoodbye);

// Callback với arrow function
greet("Nam", () => {
  console.log("Hẹn gặp lại!");
});

// setTimeout - chạy sau 1 khoảng thời gian
console.log("Bắt đầu...");
setTimeout(() => {
  console.log("3 giây sau mới in ra dòng này");
}, 3000);
console.log("Kết thúc?"); // Dòng này in ra ngay, không đợi

// setInterval - chạy lặp lại
let count = 0;
let interval = setInterval(() => {
  count++;
  console.log("Lần thứ", count);
  if (count === 5) {
    clearInterval(interval);
    console.log("Đã dừng!");
  }
}, 1000);
```

### Bài tập sửa đổi:

- [ ] Viết hàm `tinhToan(a, b, callback)` — callback nhận 2 số và thực hiện phép tính
- [ ] Dùng setTimeout để in ra "Bắt đầu" → sau 2s in "Đang xử lý" → sau 2s nữa in "Hoàn thành"
- [ ] Dùng setInterval đếm ngược từ 10 về 0, khi về 0 thì dừng

### Tự vấn:

- [ ] Callback là gì? Tại sao cần callback?
- [ ] `setTimeout` và `setInterval` khác nhau thế nào?
- [ ] `clearInterval` dùng để làm gì?
- [ ] Tại sao "Kết thúc?" in ra trước khi setTimeout chạy?

---

## BÀI 12: PROMISE VÀ ASYNC/AWAIT ⬜

### Code mẫu:

```javascript
// Promise
let promise = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) {
      resolve("Thành công!");
    } else {
      reject("Thất bại!");
    }
  }, 2000);
});

// Xử lý Promise
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// async/await
async function fetchData() {
  try {
    let result = await promise;
    console.log("Kết quả:", result);
  } catch (error) {
    console.log("Lỗi:", error);
  }
}
fetchData();

// Ví dụ thực tế: mô phỏng gọi API
function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "Minh", age: 21 });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Bài viết 1", "Bài viết 2", "Bài viết 3"]);
    }, 1000);
  });
}

async function showUserData() {
  console.log("Đang tải...");
  let user = await getUser(1);
  console.log("User:", user);
  let posts = await getPosts(user.id);
  console.log("Bài viết:", posts);
}
showUserData();
```

### Bài tập sửa đổi:

- [ ] Tạo Promise mô phỏng kiểm tra mật khẩu (đúng/sai)
- [ ] Dùng async/await gọi 2 Promise nối tiếp
- [ ] Thêm try/catch để bắt lỗi
- [ ] So sánh callback vs Promise vs async/await

### Tự vấn:

- [ ] Promise có mấy trạng thái? (pending, fulfilled, rejected)
- [ ] `then` và `catch` dùng để làm gì?
- [ ] `async` và `await` dùng để làm gì?
- [ ] `try/catch` trong async/await khác `.catch()` thế nào?

---

## BÀI 13: TRY/CATCH VÀ ERROR HANDLING ⬜

### Code mẫu:

```javascript
// try/catch cơ bản
try {
  let result = 10 / 0;
  console.log("Kết quả:", result);
  console.log("Dòng này chạy bình thường");
} catch (error) {
  console.log("Có lỗi:", error.message);
}

// try/catch với lỗi thực tế
try {
  let data = JSON.parse("không phải JSON");
  console.log(data);
} catch (error) {
  console.log("Lỗi parse JSON:", error.message);
}

// finally - luôn chạy dù có lỗi hay không
try {
  console.log("Đang xử lý...");
  throw new Error("Lỗi gì đó");
} catch (error) {
  console.log("Bắt lỗi:", error.message);
} finally {
  console.log("Finally: luôn chạy dù có lỗi hay không");
}

// Tự tạo lỗi
function divide(a, b) {
  if (b === 0) {
    throw new Error("Không thể chia cho 0");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("Lỗi:", error.message);
}
```

### Bài tập sửa đổi:

- [ ] Viết hàm `parseJSON(str)` — thử parse JSON, nếu lỗi trả về null
- [ ] Viết hàm `validateEmail(email)` — ném lỗi nếu email không hợp lệ
- [ ] Viết hàm `getUser(id)` — ném lỗi nếu id không tồn tại
- [ ] Thêm finally để log "Đã kiểm tra xong"

### Tự vấn:

- [ ] `try/catch` dùng để làm gì?
- [ ] `finally` có chạy khi không có lỗi không?
- [ ] `throw new Error()` dùng để làm gì?
- [ ] Khi nào nên dùng try/catch?

---

## BÀI 14: KIỂM TRA CUỐI GIAI ĐOẠN ⬜

### Project: Quản lý thư viện sách

**Yêu cầu:** Xây dựng chương trình console quản lý thư viện.

```javascript
// Dữ liệu mẫu
let library = {
  name: "Thư viện Công nghệ",
  address: "Hà Nội",
  books: [
    {
      id: 1,
      title: "JavaScript Cơ Bản",
      author: "Minh",
      year: 2024,
      available: true,
    },
    {
      id: 2,
      title: "Node.js Từ Đầu",
      author: "Nam",
      year: 2025,
      available: true,
    },
    {
      id: 3,
      title: "React Cho Người Mới",
      author: "Hoa",
      year: 2024,
      available: false,
    },
  ],
};

// Yêu cầu:
// 1. hienThiSach() — in ra tất cả sách
// 2. themSach(title, author, year) — thêm sách mới
// 3. xoaSach(id) — xóa sách theo id
// 4. timSach(keyword) — tìm sách theo tên hoặc tác giả
// 5. muonSach(id) — mượn sách (available = false)
// 6. traSach(id) — trả sách (available = true)
// 7. locSachTheoTrangThai(available) — lọc sách theo trạng thái
// 8. thongKe() — in ra tổng số sách, số sách có sẵn, số sách đã mượn
```

### Yêu cầu kỹ thuật:

- [ ] Sử dụng array methods (forEach, map, filter, find)
- [ ] Sử dụng function (có tham số, có return)
- [ ] Sử dụng try/catch để xử lý lỗi
- [ ] Code sạch, đặt tên biến rõ ràng

### Tự vấn:

- [ ] Có thể tự viết toàn bộ chương trình không cần nhìn code mẫu?
- [ ] Có hiểu từng dòng code không?
- [ ] Có thể giải thích cho người khác không?
- [ ] Đã sẵn sàng sang Giai đoạn 1 (Backend) chưa?

---

## TỔNG KẾT GIAI ĐOẠN 0

| Bài | Chủ đề                      | Trạng thái |
| --- | --------------------------- | ---------- |
| 1   | Biến, console.log           | ✅         |
| 2   | Kiểu dữ liệu, toán tử       | ✅         |
| 3   | If/else, vòng lặp for       | ✅         |
| 4   | Array cơ bản                | ✅         |
| 5   | Object cơ bản               | ⬜         |
| 6   | Function                    | ⬜         |
| 7   | Ôn tập + Kiểm tra           | ⬜         |
| 8   | Array methods: forEach, map | ⬜         |
| 9   | Array methods: filter, find | ⬜         |
| 10  | Xử lý chuỗi                 | ⬜         |
| 11  | Callback, setTimeout        | ⬜         |
| 12  | Promise, async/await        | ⬜         |
| 13  | try/catch, error handling   | ⬜         |
| 14  | Kiểm tra cuối giai đoạn     | ⬜         |

### Mục tiêu:

- ✅ Tự viết được JavaScript cơ bản không cần AI
- ✅ Tự debug được lỗi đơn giản
- ✅ Hiểu và áp dụng được 5 bước giải quyết vấn đề
- ✅ Sẵn sàng học Backend (Node.js + Express)
