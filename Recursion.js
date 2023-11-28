
// Iterative versus recursive
function countDown1(num) {
    for(i = num; i > 0; i--) {
        console.log(i);
    }
    console.log("All done!");
}

function countDown2(num) {
    if(num <= 0) {
        return ("All done!");
    }
    num--;
    countDown2(num);
}

// Here you have a return statement
function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}

// most common
function factorial(num) {
    if(num === 1) return 1;
    return num * factorial(num - 1)
}