// let fruits = ["Táo", "Cam", "Xoài", "Nho", "Dưa hấu"];

// console.log("Danh sách trái cây:", fruits);

// /// Truy Xuất phần tử theo chỉ số (index)
// console.log("Phần tử đầu tiên:", fruits[0]);
// console.log("Phần tử thứ 3:", fruits[2]);
// console.log("Phần tử cuối cùng:", fruits[fruits.length - 1]);

// // Độ dài mảng
// console.log("Số lượng trái cây: ", fruits.length);

// // Thêm phần tử vào cuối
// fruits.push("Bưởi");
// console.log("Sau khi thêm Bưởi:", fruits);

// // Xóa phần tử cuối
// let lastFruit = fruits.pop();
// console.log("Phần tử đã xóa:", lastFruit);
// console.log("Sau khi xóa:", fruits);

// // Duyệt mảng bằng vòng lặp for
// console.log("\nDuyệt mảng bằng for:");
// for (let i = 0; i < fruits.length; i++) {
//   console.log(i + 1 + ".", fruits[i]);
// }
let students = ["Nhật", "Nam", "Hiếu", "Phong", "Trường"];

// In ra tên đầu tiên và cuối cùng
console.log("Tên người đầu tiên:", students[0]);
console.log("Tên người cuối cùng: ", students[0]);

// Them 2 sinh vien moi
students.push("Thành");
students.push("Tuân");
// Danh sach moi
console.log("Danh sách tên bạn sau khi thêm: ", students);

console.log("\nDuyệt mảng bằng for:");
for (let i = 0; i < students.length; i++) {
  console.log(i + 1, ".", students[i]);
}
let num = [12, 5, 8, 20, 3];
let sum = 0;
for (let i = 0; i < num.length; i++) {
  sum += num[i];
}
console.log("Tổng của mảng:", sum);
