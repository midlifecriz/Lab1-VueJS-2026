function printMonth() {
    let num = Number(prompt("Введите номер месяца"));
    let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август","Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    if (num >= 1 && num <= 12) alert(months[num - 1]);
    else alert("Некорректный номер месяца");
}


function printPrimeNumbers() {
    let n = Number(prompt("Введите число n"));
    if (n <= 0 || !Number.isInteger(n)) {
        alert("Некорректное число");
        return;
    }
    let num = 2;
    let prime_numbers = [];
    while (prime_numbers.length < n) {
        if (isPrime(num)) prime_numbers.push(num);
        num++;
    }
    alert(prime_numbers.join(" "));
}


function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < Math.sqrt(num); i++)
        if (num % i == 0)
            return false;
    return true;
}


let Counter = {
    count: 0,

    add: function(value) {
        let num = Number(value);
        if (!Number.isInteger(num)) {
            alert("Некорректное число");
            return;
        }
        this.count += num;
        alert("count = " + this.count);
    },

    sub: function(value) {
        let num = Number(value);
        if (!Number.isInteger(num)) {
            alert("Некорректное число");
            return;
        }
        this.count -= num;
        alert("count = " + this.count);
    }
};


function changeCounter() {
    let action = prompt("Введите действие: увеличить или уменьшить");
    if (action !== "увеличить" && action !== "уменьшить") {
        alert("Некорректное действие");
        return;
    }
    let value = Number(prompt("Введите целое число"));
    if (action === "увеличить") Counter.add(value);
    if (action === "уменьшить") Counter.sub(value);
}


function changeCommaToPoint() {
    let input = prompt("Введите слова через запятую:");
    if (!input) {
        alert("Ввод пустой");
        return;
    }
    let result = input.replace(/,/g, ".");
    alert(result);
}


function isPalindrom() {
    let input = prompt("Введите строку для проверки:");
    if (input == null) {
        return;
    }

    let str = input.toLowerCase().replace(/\s+/g, "");
    let reversed = str.split("").reverse().join("");
    if (str === reversed) {
        alert("ДА");
    } else {
        alert("НЕТ");
    }
}
