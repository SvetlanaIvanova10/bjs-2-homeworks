"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2-4*a*c;
  if (discriminant === 0) {
    let x = -b/(2*a);
    arr.push(x);
  } else if (discriminant > 0) {
    let x1 = (-b + Math.sqrt(discriminant) )/(2*a);
    let x2 = (-b - Math.sqrt(discriminant) )/(2*a);
    arr.push(x1, x2);
  }
  return arr;
}

function monthDiff(d1, d2) {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let check = {'Процентная ставка': percent, 'Начальный взнос': contribution, 'Общая стоимость': amount};
  for (let key in check) {
    if (isNaN(check[key])) {
      return `Параметр "${key}" содержит неправильное значение "${check[key]}"`;
    }
  }
  let now = new Date();
  let month = monthDiff(now, date);
  let credit = amount - contribution;
  percent = percent / 100 / 12;
  let totalAmount = (credit * (percent + (percent / (((1 + percent)**month) - 1))) * month);
  totalAmount = Number(totalAmount.toFixed(2));
  console.log(totalAmount);
  return totalAmount;
}
