/*1. Создать главную самозапускающуюся функцию run() в которой будет выполняться основной код (цикл)
Также эта функция должна содержать в себе вызовы всех остальных функций.

2. Сделать функцию для получения случайных чисел (getRndNumber).
Значение каждой переменной, в которую мы записываем, какая выпала кость получать с помощью вызова этой функции

3. Сделать одну функцию которая будет склеивать все строки в одну (setResult). Она должна принимать только один аргумент. Строку текста, которую надо склеить.
(если вы выводите данные не только в div с id result, а возможно еще в какой то другой div, тогда функция должна принимать 2 аргумента: id и Строку)

4. Сделать функцию для определения совпадений. (isNumbersEqual). Она должна содержать в себе проверку на совпадение и внутри себя вызывать функцию для сохранения данных в общую строку (setResult).

5. Сделать функцию для определения разницы. (isBigDifference). 
Она должна содержать в себе соответствующую проверку и внутри себя вызывать функцию для сохранения данных в общую строку (setResult).

6. Сделать функцию для вычисления результата total. Функция должна вычислять результат и сохранять его в переменную total.

7. Сделать функцию, которая напечатает полученные с помощью функции setResult данные в HTML (printResult).*/

'use strict';

//let elemResult = document.getElementById('result');
let writeResult = '';
let total = 0,
    first = 0,
    second = 0;

//получения случайных чисел
let getRndNumber = () => (Math.floor((Math.random() * 6) + 1));



const result = function setResult(str) { //склеивать все строки в одну
    writeResult += str;
    // writeResult += "Первая кость: " + first + "Вторая кость: " + second + '<br>';
    //"Выпал дубль. Число" + i + '<br>' + "Большой разброс между костями. Разница составляет" + difecence + '<br>';
}

function isNumbersEqual(firstPar, secondPar) { // проверка на совпадение
    if ((firstPar === secondPar) || (secondPar === firstPar)) {
        writeResult += "Выпал дубль. Число" + first + '<br>';
    }
}

function isBigDifference(firstPar, secondPar) { // определение разницы
    if ((firstPar < 3 & secondPar > 4) || (firstPar > 4 & secondPar < 3)) {
        var difecence = Math.abs(secondPar - firstPar);
        result("Большой разброс между костями. Разница составляет" + difecence + '<br>');
    }
}

function isTotal() {
    (total > 100) ?
    result("Победа, вы набрали: " + total + " очков"): result('Вы проиграли, у вас' + total + 'очков');
    //розпечатьть с помощью result
}

function setTotal(firstPar, secondPar) { // принимать можно любое слово не обязательно тоже самое сто передаем "first is second"
    total += firstPar + secondPar;
}

function printResult() {
    document.getElementById('result').innerHTML += writeResult;
}

(function run() {
    for (let i = 1; i <= 15; i++) {
        if (i === 8 || i === 13) {
            continue;
        }
        let first = getRndNumber();
        let second = getRndNumber();
        result("Первая кость: " + first + "Вторая кость: " + second + '<br>');
        isNumbersEqual(first, second);
        isBigDifference(first, second);
        setTotal(first, second); // тут передаем параметрыв функфию setTotal 
    }

    isTotal();
    
    printResult();
}());
