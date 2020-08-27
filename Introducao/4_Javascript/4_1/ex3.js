let x = 10;
let y = 10;
let z = 10;

let xIsGreatest = (x > y && x > z);
let yIsGreatest = (y > x && y > z);
let allEqual = (x==y && x==z);

if (xIsGreatest) {
    console.log("X is greatest")
} else if (yIsGreatest) {
    console.log("Y is greatest")
} else if (allEqual) {
    console.log("Numbers are equal")
} else {
    console.log("Z is the greatest")
}