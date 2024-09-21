function fibonacciGenerator(n) {
    var output = [];
    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1]; //for n>2, new sequence start with [0, 1] automatically, using output.push, the new output is pushed into the constant array defined. 
        for (i = 2; i < n; i++) {
           var newOutput = output[output.length - 2] + output[output.length - 1];
           output.push(newOutput);
        }
    }
    return output
}