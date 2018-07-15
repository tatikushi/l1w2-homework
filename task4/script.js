// for
console.log('with for');

function sharp() {
    for (var i = 1; i < 9; i++) {
        console.log('#'.repeat(i));
    }
}

sharp();


//recursion
console.log('with recursion');

function recursionFunc(number, sharp) {
    console.log('#'.repeat(sharp));
    if (number > 1) {
        recursionFunc(--number, ++sharp);
    }
}

recursionFunc(8, 1);
