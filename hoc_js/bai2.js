// Kiểu dữ liệu
let soNguyen = 10; // number
let soThuc = 3.14; // number
let chuoi = "Hello"; // string
let dungSai = false; // boolean
let khongXacDinh; // undefined (chưa gán giá trị)
let rong = null; // null (cố tình để trống)

console.log("Kiểu dữ liệu:");
console.log(typeof soNguyen);
console.log(typeof chuoi);
console.log(typeof dungSai);
console.log(typeof khongXacDinh);
console.log(typeof rong);

// Toán tử số học
let a = 20;
let b = 15;

console.log("\nToán tử số học:");
console.log("a + b =", a + b); // Cộng
console.log("a - b =", a - b); // Trừ
console.log("a * b =", a * b); // Nhân
console.log("a / b =", a / b); // Chia
console.log("a % b =", a % b); // Chia lấy

let c = (a + b) * 2;
console.log("(a+b) * 2 =", c);
// Kiem tra so chan, so le
if (a % 2 === 0) {
  console.log("a là số chẵn");
} else {
  console.log("a là số lẻ");
}
