function triangle(a, b, c) {
if (arguments.length != 3) return 'Введите ТРИ значения';
for (var i in arguments) {
   if (typeof arguments[i] != "number") return 'Вы ввели не число';
}
if (a + b > c && b + c > a && a + c > b) return "Существует";
else return "Не существует"
}
console.log(triangle(15,10,6))
