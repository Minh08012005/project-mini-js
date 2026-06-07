# BÀI TẬP MỞ RỘNG — Giai đoạn 0

> Làm sau khi hoàn thành bài chính trong BAI_TAP_GIAI_DOAN_0.md.
> Không cần làm hết trong 1 ngày. Làm từ từ, mỗi ngày 2-3 yêu cầu.

---

## BÀI 1: BIẾN VÀ CONSOLE.LOG

### Mở rộng:

1. Tạo các biến: `firstName`, `lastName`, `fullName` (ghép từ firstName + lastName). In ra fullName.
2. Tạo biến `birthYear`. Tính tuổi (2026 - birthYear) và in ra.
3. Tạo biến `height` (chiều cao mét) và `weight` (cân nặng kg). Tính BMI = weight/(height\*height), in ra.
4. Tạo 3 biến số. Tính tổng, trung bình cộng. In ra kết quả.
5. Tạo biến `x = 1`, `y = 2`. Hoán đổi giá trị 2 biến này (không dùng biến thứ 3).
6. Tạo biến `message = "hello"`. In ra `message` viết hoa (HELLO).
7. Tạo biến `soLuong = prompt("Nhập số lượng:")` (chạy trên browser), nhưng dùng Node thì tạo biến trực tiếp. In ra giá trị.
8. Tạo biến `hoten`, `tuoi`, `diachi`. In ra theo mẫu: "Tôi tên là [hoten], năm nay tôi [tuoi] tuổi, tôi sống ở [diachi]".
9. Tạo biến `giaGoc = 200000`, `giamGia = 15`. Tính giá sau giảm, in ra.
10. Kiểm tra kiểu dữ liệu của các giá trị: `"123"`, `123`, `true`, `["a", "b"]`. Dùng typeof, in ra.

---

## BÀI 2: KIỂU DỮ LIỆU VÀ TOÁN TỬ

### Mở rộng:

1. Tạo 2 số bất kỳ. So sánh: số nào lớn hơn, bằng nhau, nhỏ hơn. In ra kết quả.
2. Viết chương trình đổi độ C sang độ F: F = C \* 9/5 + 32.
3. Tạo biến `giay`. Đổi ra dạng: giờ:phút:giây. In ra.
4. Viết chương trình tính diện tích và chu vi hình tròn (bán kính r cho trước, PI = 3.14).
5. Tạo biến `n`. Kiểm tra n có chia hết cho 3 và 5 không? In ra true/false.
6. Tính lãi suất: gửi 10 triệu, lãi 5%/năm. Sau 3 năm có bao nhiêu tiền? (lãi kép: tien \* (1 + lai)^nam).
7. Tạo number từ string: `"100"` + `"200"` = ? → `"100200"`. Làm sao để ra 300?
8. Tạo biến `a = "5"`, `b = 5`. So sánh `a == b` và `a === b`. Giải thích kết quả.
9. Dùng toán tử `++` và `--`: tạo `x = 10`. In ra `x++`, `++x`, `x--`, `--x`. Giải thích sự khác biệt.
10. Tạo chuỗi `"javascript"`. Lấy ký tự đầu tiên, ký tự cuối cùng. In ra.

---

## BÀI 3: IF/ELSE VÀ VÒNG LẶP FOR

### Mở rộng:

1. Nhập vào 3 số a, b, c. Tìm số lớn nhất (dùng if/else). In ra.
2. Nhập vào 1 tháng (1-12). In ra tháng đó có bao nhiêu ngày (bỏ qua năm nhuận).
3. Viết chương trình tính tiền điện: 0-50 kWh: 1678đ/kWh, 51-100: 1734đ, 101-200: 2014đ, >200: 2536đ.
4. In ra bảng cửu chương từ 1 đến 9 (dùng 2 vòng lặp lồng nhau).
5. In tam giác sao:

   ```
   *
   **
   ***
   ****
   *****
   ```

6. In tam giác ngược:
   ```
   *****
   ****
   ***
   **
   *
   ```
7. Tính tổng các số từ 1 đến 100.
8. Tính tổng các số LẺ từ 1 đến 100.
9. Đếm số chẵn và số lẻ từ 1 đến 50. In ra số lượng mỗi loại.
10. In ra tất cả các số nguyên tố từ 1 đến 100 (số nguyên tố: chỉ chia hết cho 1 và chính nó).
11. Nhập số n. In ra giai thừa của n (n! = 1*2*3*...*n).
12. Viết chương trình in dãy Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13,... (10 số đầu tiên).

---

## BÀI 4: ARRAY CƠ BẢN

### Mở rộng:

1. Tạo mảng `[5, 12, 8, 20, 3, 15]`. Tìm số lớn nhất, nhỏ nhất.
2. Tạo mảng `[2, 4, 6, 8, 10]`. Tính tổng các phần tử.
3. Tạo mảng `[7, 3, 9, 2, 8]`. Sắp xếp tăng dần, giảm dần.
4. Tạo mảng `[1, 2, 3, 4, 5]`. Đảo ngược mảng.
5. Tạo mảng `[1, 2, 2, 3, 2, 4, 5, 2]`. Đếm số lần xuất hiện của số 2.
6. Tạo mảng `["Hà Nội", "HCM", "Đà Nẵng", "Hải Phòng"]`. Duyệt và in ra tên thành phố có chữ "H".
7. Tạo 2 mảng: `[1, 2, 3]` và `[4, 5, 6]`. Nối 2 mảng lại thành 1.
8. Tạo mảng `[1, 2, 3, 4, 5]`. Thêm số 0 vào đầu mảng.
9. Tạo mảng `[1, 2, 3, 4, 5]`. Xóa phần tử đầu tiên, xóa phần tử cuối cùng.
10. Tạo mảng `[1, 2, 2, 3, 1, 4, 3, 5]`. Loại bỏ các phần tử trùng lặp (kết quả: [1, 2, 3, 4, 5]).
11. Tạo mảng `["a", "b", "c", "d"]`. Chèn "x" vào vị trí thứ 2 (giữa "a" và "b").
12. Tạo mảng `[3, 7, 1, 9, 4]`. Tìm vị trí của số 9 trong mảng.

---

## BÀI 5: OBJECT CƠ BẢN

### Mở rộng:

1. Tạo object `student` với: name, age, scores (mảng điểm 3 môn). In ra điểm trung bình.
2. Tạo object `phone` với: brand, model, price, specs (object con: ram, rom, battery). In ra dung lượng RAM.
3. Tạo object `movie` với: title, year, director, cast (mảng tên diễn viên). In ra số lượng diễn viên.
4. Tạo mảng `students` chứa 3 object student. Duyệt và in ra tên từng sinh viên.
5. Tạo object `restaurant` với: name, address, menu (mảng object món ăn: name, price). In ra menu.
6. Tạo object `weather` với: city, temp, humidity, forecast (mảng 3 object: day, high, low). In ra nhiệt độ cao nhất ngày mai.
7. Tạo object `user`. Thêm thuộc tính `address` (là object con: street, city). In ra city.
8. Tạo object `product`. Sao chép object này sang object mới (dùng spread operator: `{...product}`) và thay đổi price. In cả 2 ra, chứng minh chúng khác nhau.
9. Tạo object `config` với theme, language. Viết hàm `updateConfig` nhận key và value, cập nhật config[key] = value.
10. Tạo object có thuộc tính là function (method): `calculator` với 2 số, có các method: add, subtract, multiply, divide.
11. Dùng `Object.keys()` để in ra tất cả key của 1 object. Dùng `Object.values()` để in ra tất cả value.
12. Tạo object `school` với: name, classes (mảng object: name, students (mảng object student)). Duyệt hết và in ra tất cả tên học sinh.

---

## BÀI 6: FUNCTION

### Mở rộng:

1. Viết hàm `isPrime(n)` — kiểm tra số nguyên tố, trả về true/false.
2. Viết hàm `factorial(n)` — tính giai thừa của n, trả về kết quả.
3. Viết hàm `reverseString(str)` — đảo ngược chuỗi, trả về chuỗi mới.
4. Viết hàm `countVowels(str)` — đếm số nguyên âm (a, e, i, o, u) trong chuỗi.
5. Viết hàm `sumArray(arr)` — tính tổng mảng số, trả về tổng.
6. Viết hàm `findLongestWord(str)` — tìm từ dài nhất trong câu, trả về từ đó.
7. Viết hàm `generatePassword(length)` — tạo mật khẩu ngẫu nhiên với độ dài cho trước (chứa chữ và số).
8. Viết hàm `capitalize(str)` — viết hoa chữ cái đầu của mỗi từ, trả về chuỗi mới.
9. Viết hàm `uniqueArray(arr)` — loại bỏ phần tử trùng trong mảng, trả về mảng mới chỉ chứa giá trị duy nhất.
10. Viết hàm `mergeObjects(obj1, obj2)` — gộp 2 object thành 1, trả về object mới.
11. Viết hàm `flatten(arr)` — làm phẳng mảng: `[1, [2, 3], [4, [5, 6]]]` → `[1, 2, 3, 4, 5, 6]`.
12. Viết hàm `sortByKey(arr, key)` — sắp xếp mảng object theo 1 key cho trước. VD: sortByKey(students, "score").

---

## BÀI 7: ÔN TẬP + KIỂM TRA

### Mở rộng (cho project Quản lý danh bạ):

1. Thêm chức năng: sắp xếp danh bạ theo tên (A-Z).
2. Thêm chức năng: hiển thị danh bạ theo nhóm chữ cái đầu (A, B, C...).
3. Thêm chức năng: đếm số lượng contact trong danh bạ.
4. Thêm chức năng: xuất danh bạ ra định dạng JSON string.
5. Thêm validation: số điện thoại phải đủ 10 số, email phải chứa "@".
6. Thêm chức năng: đánh dấu contact yêu thích (thêm thuộc tính favorite).
7. Thêm chức năng: lọc contact yêu thích.
8. Thêm chức năng: kiểm tra trùng số điện thoại trước khi thêm.
9. Thêm chức năng: xóa tất cả contact (reset).
10. Thêm chức năng: tìm kiếm nâng cao (tìm theo tên HOẶC số điện thoại HOẶC email).

---

## BÀI 8: ARRAY METHODS — forEach, map

### Mở rộng:

1. Cho mảng `[1, 2, 3, 4, 5]`. Dùng map tạo mảng mới với mỗi phần tử nhân 3.
2. Cho mảng `["hello", "world"]`. Dùng map tạo mảng chữ hoa: `["HELLO", "WORLD"]`.
3. Cho mảng `[{name:"A", score:5}, {name:"B", score:8}]`. Dùng map tạo mảng `["A:5", "B:8"]`.
4. Dùng map để thêm trường `passed: true/false` vào mỗi object (passed nếu score >= 5).
5. Cho mảng `[100, 200, 300]`. Dùng map chuyển thành `["100đ", "200đ", "300đ"]`.
6. Dùng forEach tính tổng doanh thu từ mảng `[100, -50, 200, -30, 50]` (bỏ qua số âm).
7. Dùng map kết hợp với Object: chuyển mảng user `[{firstName:"Minh", lastName:"Nguyen"}]` thành mảng fullName.
8. Dùng map: từ mảng ngày tháng `["2024-01-15", "2024-12-25"]` tạo mảng `["15/01/2024", "25/12/2024"]`.
9. Dùng map: từ mảng số `[1, 2, null, 4, undefined, 6]` tạo mảng số (bỏ qua null/undefined, giữ lại số).
10. Dùng map: nhân đôi giá trị, nhưng nếu giá trị > 10 thì giữ nguyên. `[5, 12, 3, 8]` → `[10, 12, 6, 16]`.

---

## BÀI 9: ARRAY METHODS — filter, find

### Mở rộng:

1. Lọc số dương từ mảng `[-5, 3, -1, 8, -2, 7]`.
2. Lọc các chuỗi có độ dài > 3 từ mảng `["a", "abc", "abcd", "ab"]`.
3. Cho mảng products. Lọc sản phẩm có giá từ 100k đến 300k.
4. Cho mảng students. Lọc sinh viên có điểm trung bình >= 8 VÀ không có môn nào dưới 5.
5. Lọc email hợp lệ (chứa "@" và ".") từ mảng các chuỗi.
6. Tìm phần tử đầu tiên có giá trị âm trong mảng.
7. Tìm user đầu tiên có role là "admin" từ mảng users.
8. Cho mảng orders. Lọc đơn hàng có trạng thái "pending" VÀ tổng tiền > 500k.
9. Tìm sản phẩm đắt nhất trong mảng (dùng find kết hợp với tìm max).
10. Dùng filter để loại bỏ falsy values (null, undefined, 0, "", false) khỏi mảng `[0, "hello", false, 42, "", null, "world"]`.

---

## BÀI 10: XỬ LÝ CHUỖI

### Mở rộng:

1. Viết hàm `truncate(str, maxLength)` — cắt chuỗi và thêm "..." nếu dài hơn maxLength.
2. Viết hàm `slugify(str)` — chuyển chuỗi thành dạng slug (chữ thường, gạch ngang thay dấu cách, bỏ dấu tiếng Việt nếu có thể).
3. Viết hàm `maskEmail(email)` — ẩn một phần email. VD: "minhnguyen@gmail.com" → "min**\*\*\***@gmail.com".
4. Viết hàm `extractNumbers(str)` — trích xuất tất cả số từ chuỗi. VD: "Giá 100k và 200k" → [100, 200].
5. Viết hàm `countChar(str, char)` — đếm số lần xuất hiện của ký tự trong chuỗi.
6. Viết hàm `removeDuplicateWords(str)` — xóa từ trùng trong câu. VD: "xin xin chào" → "xin chào".
7. Viết hàm `longestPalindrome(str)` — tìm chuỗi con đối xứng dài nhất trong chuỗi.
8. Viết hàm `camelToSnake(str)` — chuyển camelCase thành snake_case. VD: "myVariable" → "my_variable".
9. Viết hàm `snakeToCamel(str)` — chuyển snake_case thành camelCase. VD: "my_variable" → "myVariable".
10. Viết hàm `formatNumber(n)` — định dạng số có dấu phẩy ngăn cách hàng nghìn. VD: 1000000 → "1,000,000".

---

## BÀI 11: CALLBACK VÀ setTimeout

### Mở rộng:

1. Viết hàm `delayLog(msg, delay)` — sau delay giây, in ra msg. Dùng setTimeout.
2. Viết hàm `runInSequence(tasks)` — chạy lần lượt các hàm callback trong mảng tasks.
3. Mô phỏng đèn giao thông: đỏ 3s → vàng 1s → xanh 2s → lặp lại (dùng setInterval + setTimeout lồng).
4. Viết hàm `retry(fn, times, delay)` — thử gọi fn, nếu lỗi thì thử lại sau delay giây, tối đa times lần.
5. Viết callback hell: in ra "Bắt đầu" → sau 1s "Bước 1" → sau 1s "Bước 2" → sau 1s "Bước 3" → sau 1s "Hoàn thành".
6. Viết hàm `debounce(fn, delay)` — trả về hàm mới, chỉ gọi fn sau khi không được gọi trong delay ms (mô phỏng debounce).
7. Viết hàm `throttle(fn, limit)` — trả về hàm mới, chỉ gọi fn tối đa 1 lần trong limit ms.
8. Dùng setTimeout để tạo hiệu ứng loading: cứ 500ms in ra 1 dấu chấm, dừng sau 3s.
9. Viết hàm `schedule(task, time)` — lên lịch chạy task vào 1 thời điểm trong tương lai (time là timestamp).
10. Mô phỏng tải dữ liệu từng bước: tải users (1s) → tải posts (1s) → tải comments (1s) → in ra tất cả. Dùng callback.

---

## BÀI 12: PROMISE VÀ ASYNC/AWAIT

### Mở rộng:

1. Viết hàm `fetchData(url)` mô phỏng gọi API: resolve sau 1-3s ngẫu nhiên, 20% reject. Dùng Promise.
2. Gọi 3 Promise song song và chờ tất cả hoàn thành. Dùng `Promise.all`.
3. Gọi 3 Promise song song, lấy kết quả của Promise nào hoàn thành đầu tiên. Dùng `Promise.race`.
4. Gọi 3 Promise, hiển thị kết quả của từng cái ngay khi nó hoàn thành (không cần đợi cái kia). Dùng `Promise.race` từng cái hoặc `.then()` riêng.
5. Viết hàm `retryPromise(fn, times)` — thử gọi fn (trả về Promise), nếu reject thì thử lại tối đa times lần.
6. Mô phỏng đăng nhập: gọi API login → lấy token → gọi API profile với token. Dùng async/await.
7. Mô phỏng tải dữ liệu với progress: gọi API trả về từng phần, hiển thị % hoàn thành.
8. Viết hàm `timeout(promise, ms)` — nếu promise không resolve sau ms giây thì reject với lỗi "Timeout".
9. Gọi API lấy danh sách users → với mỗi user, gọi API lấy posts của user đó. Dùng Promise.all với map.
10. Thực hiện 10 request tuần tự (mỗi request xong mới gọi request tiếp theo). Dùng async/await trong vòng lặp.

---

## BÀI 13: TRY/CATCH VÀ ERROR HANDLING

### Mở rộng:

1. Viết hàm `safeDiv(a, b)` — tính a/b, ném lỗi nếu b = 0, bắt lỗi và trả về "Không thể chia cho 0".
2. Viết hàm `parseJSON(str)` — thử parse JSON, nếu lỗi trả về giá trị mặc định `{ error: "Invalid JSON" }`.
3. Viết hàm `getProperty(obj, path)` — lấy giá trị từ object theo đường dẫn (VD: "user.address.city"), ném lỗi nếu không tồn tại.
4. Tạo custom error class `ValidationError` kế thừa từ Error, thêm trường `field`. Sử dụng trong validate.
5. Viết hàm `validateUser(user)` — kiểm tra name không rỗng, age >= 18, email hợp lệ. Ném lỗi cụ thể cho từng trường lỗi.
6. Viết middleware giả lập: try/catch bọc quanh 1 hàm async, nếu lỗi thì log và trả về response lỗi.
7. Viết hàm `safeExecute(fn)` — wrapper nhận 1 hàm, thực thi hàm đó trong try/catch, trả về `{ success: true, data }` hoặc `{ success: false, error }`.
8. Viết chương trình đọc file (dùng fs.readFileSync giả lập): bắt lỗi file không tồn tại, lỗi không có quyền đọc.
9. Viết hàm `retryWithExponentialBackoff(fn, times)` — thử gọi fn, nếu lỗi đợi 1s, 2s, 4s, 8s... trước khi thử lại.
10. Kết hợp try/catch + async/await: gọi API, bắt lỗi network, lỗi server 500, lỗi 404 — mỗi loại lỗi xử lý khác nhau.

---

## BÀI 14: KIỂM TRA CUỐI GIAI ĐOẠN

### Mở rộng (cho project Thư viện sách):

1. Thêm chức năng: hiển thị sách theo thể loại (thêm trường genre vào object book).
2. Thêm chức năng: thống kê số lượng sách theo từng thể loại.
3. Thêm chức năng: hiển thị sách được mượn nhiều nhất (thêm trường borrowCount).
4. Thêm chức năng: lịch sử mượn/trả sách (mảng log: ai mượn, lúc nào, trả lúc nào).
5. Thêm chức năng: tính phí phạt nếu trả trễ (thêm trường dueDate, phí 1000đ/ngày).
6. Thêm chức năng: tìm sách theo khoảng năm xuất bản (VD: từ 2020 đến 2024).
7. Thêm chức năng: hiển thị top 5 tác giả có nhiều sách nhất.
8. Thêm chức năng: tự động gợi ý sách liên quan (cùng tác giả hoặc cùng thể loại).
9. Thêm validation nâng cao: title không được trùng, year không được > năm hiện tại.
10. Lưu dữ liệu library vào file JSON (dùng fs.writeFileSync). Khi khởi động chương trình, đọc từ file (fs.readFileSync).
