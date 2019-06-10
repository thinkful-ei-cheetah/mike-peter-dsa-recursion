function countSheep(num) {
  if (num === 0) {
    console.log('All sheep jumped over the fence');
    return '';
  }
  console.log(`${num}: Another sheep jumped over the fence`);
  countSheep(num - 1);
}
// countSheep(3);


function powerCalculator(base, exp) {
  if (exp === 0) {
    return 1;
  }
  const exponent = base * powerCalculator(base, exp - 1);
  return exponent;
}
// console.log(powerCalculator(2, 7));


function revString(str) {
  if (str === '') {
    return '';
  }
  const newChar = str[str.length - 1];
  return newChar + revString(str.slice(0, str.length - 1));
}
// console.log(revString('hello'));


function triangularNumber(base) {
  if (base === 1) {
    return 1;
  }
  return base + triangularNumber(base - 1);
}
// console.log(triangularNumber(4));
// console.log(triangularNumber(5));


function stringSplitter(str, limit) {
  if (str === '') {
    return '';
  }
  const newChar = str[0];
  if (str[0] === limit) {
    return stringSplitter(str.slice(1), limit);
  } else {
    return newChar + stringSplitter(str.slice(1), limit);
  }
}
console.log(stringSplitter('0/2/2/0/20/2/0', '/'));

function fibonacci(n){
  if (n < 2 ){
    return n
  }
  return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(4))

function factorial(n){
  if (n === 0 ){
    return 1
  }
  return n*factorial(n-1)
}

console.log(factorial(5))

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function mazeOut(maze, start){
  return mazeOut(maze, )
}

function toBinary(dec) {
  if (dec === 0){
    return '';
  }
  const binary = Math.floor(dec%2)
  return  toBinary(Math.floor(dec/2)) + binary;
}

console.log(toBinary(56))