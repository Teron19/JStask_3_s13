/*1. Создать главную самозапускающуюся функцию run() в которой будет выполняться основной код (цикл)
Также эта функция должна содержать в себе вызовы всех остальных функций.

2. Сделать функцию для получения случайных чисел (getRndNumber).
Значение каждой переменной, в которую мы записываем, какая выпала кость получать с помощью вызова этой функции

3. Сделать одну функцию которая будет склеивать все строки в одну (setResult). Она должна принимать только один аргумент. Строку текста, которую надо склеить.
(если вы выводите данные не только в div с id result, а возможно еще в какой то другой div, тогда функция должна принимать 2 аргумента: id и Строку)

4. Сделать функцию для определения совпадений. (isNumbersEqual). Она должна содержать в себе проверку на совпадение и внутри себя вызывать функцию для сохранения данных в общую строку (setResult).

5. Сделать функцию для определения разницы. (isBigDifference). Она должна содержать в себе соответствующую проверку и внутри себя вызывать функцию для сохранения данных в общую строку (setResult).

6. Сделать функцию для вычисления результата total. Функция должна вычислять результат и сохранять его в переменную total.

7. Сделать функцию, которая напечатает полученные с помощью функции setResult данные в HTML (printResult).*/

'use strict'
let elemResult = document.getElementById('result');


function getRndNumber() {
    var first = Math.floor((Math.random() * 6) + 1);
    var second = Math.floor((Math.random() * 6) + 1);
}

var result = function setResult() {
    writeResult += "Первая кость: " + first + "Вторая кость: " + second + '<br>' +
        "Выпал дубль. Число" + i + '<br>' + "Большой разброс между костями. Разница составляет" + difecence + '<br>';
}
result();

function isNumbersEqual() { // проверка на совпадение
    if (first === second || second === first) {
        elemResult += "Выпал дубль. Число" + i + '<br>';
    }
    return isNumbersEqual() + result();
}

function isBigDifference() { // определение разницы
    if (first < 3 & second > 4 || first > 4 & second < 3) {
        var difecence = Math.abs(second - first);
        result();
    }
    return isBigDifference;
}

function isTotal() {
    var total = 0;
    (total < 100) ?
    result("Победа, вы набрали: " + total +" очков"):
        result('Вы проиграли, у вас' + total + 'очков');
    //розпечатьть с помощью result
}

function printResult() {
    elemResult += result;
}

function run() {
    for (let i = 1; i <= 15; i++) {
        if (i === 8 || i === 13) {
            continue;
        }
        getRndNumber();
        result();
        isNumbersEqual();
        isBigDifference();
        isTotal();
    }
}
run();