function sortList() {
    let input = prompt("Введите список чисел через пробел:");
    if (!input) return;
    let array = input.split(" ").map(Number);
    array.sort((a,b) => a - b);
    alert(array.join(" "));
}


function getModFive() {
    let input = prompt("Введите список чисел через пробел:");
    if (!input) return;
    let array = input.split(" ").map(Number);
    let result = array.map(x => x % 5);
    alert(result.join(" "));
}


function median(...numbers) {
    numbers.sort((a, b) => a - b);
    let mid = Math.floor(numbers.length / 2);

    if (numbers.length % 2 === 0) return (numbers[mid - 1] + numbers[mid]) / 2;
    else return numbers[mid];
}

function testMedian() {
    //обычная передача аргументов
    let input1 = prompt("Введите числа через пробел");
    if (!input1) return;

    let args = input1.split(" ").map(Number);
    let result1 = median.apply(null, args);

    //распаковка массива
    let input2 = prompt("Введите числа через пробел:");
    if (!input2) return;

    let array = input2.split(" ").map(Number);
    let result2 = median(...array);
    alert(
        "Медиана (обычная передача аргументов): " + result1 +
        "\nМедиана (распаковка массива): " + result2
    );
}


function checkBracket() {
    let input = prompt("Введите строку, состоящую из скобок");
    if (!input) return;
    let stack = [];

    for (let x of input) {
        if (x === "(") stack.push(char);

        if (x === ")") {
            if (stack.length === 0) {
                alert("НЕПРАВИЛЬНАЯ СТРОКА"); 
                return;
            }
            stack.pop();
        }
    }

    if (stack.length === 0) alert("ПРАВИЛЬНАЯ");
    else alert("НЕПРАВИЛЬНАЯ");
}


function createCopy(object) {
    if (object === null || typeof object !== "object")
        return object;

    if (Array.isArray(object)) {
        let result = [];
        for (let x of object)
            result.push(createCopy(x));
        return result;
    }

    let result = {};

    for (let i in object)
        result[i] = createCopy(object[i]);

    return result;
}


function testCopy() {
    let object = {
        a: 1,
        b: { c: 2 },
        d: [3, 4]
    };

    let newObj = createCopy(object);
    alert("Объект скопирован");
}
