//1.1
var exchangeRate = 26;

function convert(element) {
    if (element.id === 'uah') {
        var usd = document.getElementById('usd');
        usd.value = exchangeRate * element.value;
    }
    if (element.id === 'usd') {
        var uah = document.getElementById('uah');
        uah.value = element.value / exchangeRate;
    }
}

//1.2
function getMaxMin(numbers) {
    var max = Math.max.apply(null, numbers);
    var min = Math.min.apply(null, numbers);
    return {max: max, min: min};
}

console.log(getMaxMin([-2, 32, -25, 144]));

//1.3
var arr = [23, 46, 37, 49, 51];

function average(arr) {
    var result = arr.reduce(function (sum, current) {
        return sum + current;
    }, 0);
    return result / arr.length;
}

console.log(average(arr));


