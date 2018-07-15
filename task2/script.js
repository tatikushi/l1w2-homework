function recursionFunc(number) {
    console.log(number);
    --number;
    if (number !== 0) {
        recursionFunc(number);
    }
}

recursionFunc(10);