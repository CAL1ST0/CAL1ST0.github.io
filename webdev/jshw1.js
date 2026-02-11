function getCounterVal(){
  let counter = parseInt(document.getElementById("counter").innerHTML);
  return counter;
}

function tickUp(){
  let counter = getCounterVal();
  counter += 1;
  document.getElementById("counter").innerHTML = counter;
}

function tickDown(){
  let counter = getCounterVal();
  counter -= 1;
  document.getElementById("counter").innerHTML = counter;
}

function runForLoop(){
  let counter = getCounterVal();
  let arr = [];
  for(let i = 0; i<=counter; i++){
    arr[i] = i;
  }
  document.getElementById("forLoopResult").innerHTML = arr.join(" ");
}

function showOddNumbers(){
  let counter = getCounterVal();
  let arr = [];
  let j = 1;

  while(j<=counter){
    arr.push(j);
    j+=2;
  }

  document.getElementById("oddNumberResult").innerHTML = arr.join(" ");
}

function addMultiplesToArray(){
  let counter = getCounterVal();
  let arr = [];
  let j = 5;
  while(j<counter){
    arr.unshift(j);
    j+=5;
  }

  console.log(arr); 
}

