/* eslint-disable strict */
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
    return n;
  }
  return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(4));

function factorial(n){
  if (n === 0 ){
    return 1;
  }
  return n*factorial(n-1);
}

console.log(factorial(5));

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



function toBinary(dec) {
  if (dec === 0){
    return '';
  }
  const binary = Math.floor(dec%2);
  return  toBinary(Math.floor(dec/2)) + binary;
}

console.log(toBinary(56));

function mazeOut(maze, pos){
  // let paths = [];
  console.log(pos)
  console.log(maze)

    if(maze[pos[0]][pos[1]] === 'e') {
      return ""
    }

  if(maze[pos[0]][pos[1]+1] === ' '){
    let path = 'r';  
    return path + mazeOut(maze, [pos[0], pos[1] + 1]) ;
  }
  if(maze[pos[0]][pos[1]+1] === 'e'){
    let path = 'r';  
    return path + mazeOut(maze, [pos[0], pos[1] + 1]) ;
  }

  if(maze[pos[0]+1][pos[1]] === ' ' ) {
    let path = 'd';
    return path + mazeOut(maze, [pos[0] + 1, pos[1]]);
  }
  if(maze[pos[0]+1][pos[1]] === 'e' ) {
    let path = 'd';
    return path + mazeOut(maze, [pos[0] + 1, pos[1]]);
  }

  if(maze[pos[0]][pos[1]-1] === ' '){
    let path = 'l';  
    return path + mazeOut(maze, [pos[0], pos[1] - 1]) ;
  }
  if(maze[pos[0]][pos[1]-1] === 'e'){
    let path = 'l';  
    return path + mazeOut(maze, [pos[0], pos[1] - 1]) ;
  }
  if(maze[pos[0]-1][pos[1]] === ' ' ) {
    let path = 'd';
    return path + mazeOut(maze, [pos[0] - 1, pos[1]]);
  }
  if(maze[pos[0]-1][pos[1]] === 'e' ) {
    let path = 'd';
    return path + mazeOut(maze, [pos[0] - 1, pos[1]]);
  }

}

console.log(mazeOut(maze, [0,0]))

const PrintPath = function(path, startPos, endPos) {
  console.log('Found path to the exit: ');
  console.log(path);
};

function mazeRunnerAll(
  maze,
  position = 0,
  x = 0,
  y = 0,
  direction = 'S',
  path = []
) {
  if (y < 0 || x < 0) {
    return;
  }
  if (y >= maze[0].length || x >= maze.length) {
    return;
  }
  path[position] = direction;
  position++;

  if (maze[x][y] === 'e') {
    PrintPath(path, 1, position - 1);
    return;
  }
  if (maze[x][y] === ' ') {
    // The current cell is free. Mark it as visited
    maze[x][y] = 's';
    // Invoke recursion to explore all possible directions
    mazeRunnerAll(maze, position, x, y - 1, 'L', path); // left
    mazeRunnerAll(maze, position, x - 1, y, 'U', path); // up
    mazeRunnerAll(maze, position, x, y + 1, 'R', path); // right
    mazeRunnerAll(maze, position, x + 1, y, 'D', path); // down
    //remarks current position as unvisited so we can check back for all exits
    maze[x][y] = ' ';
  }
  // Remove the last direction from the path
  position--;
}

console.log(mazeRunnerAll(maze));