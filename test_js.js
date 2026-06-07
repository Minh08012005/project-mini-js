// 1. Ham tinh tong
function sum(a, b) {
  return a + b;
}
console.log(sum(3, 5));
// 2. Ham Kiem tra tinh chan le
function isEven(n) {
  if (n % 2 == 0) return true;
  else return false;
}
console.log(isEven(7));
// Bài 3: Hàm đảo ngược chuỗi
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  console.log(result);
}
reverseString("vietnam");
// Bai 4: Ham tim so lon nhat
