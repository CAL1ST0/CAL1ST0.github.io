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
  while(j<=counter){
    arr.unshift(j);
    j+=5;
  }

  console.log(arr); 
}

function printCarObject(){
  let carObject = {cType: document.getElementById("carType").value, cMPG: document.getElementById("carMPG").value, cColor: document.getElementById("carColor").value};
  console.log(carObject);
}

function loadCar(x){
  switch(x){
    case 1:
      document.getElementById("carType").value = carObject1.cType;
      document.getElementById("carMPG").value = carObject1.cMPG;
      document.getElementById("carColor").value = carObject1.cColor;
      break;

    case 2:
      document.getElementById("carType").value = carObject2.cType;
      document.getElementById("carMPG").value = carObject2.cMPG;
      document.getElementById("carColor").value = carObject2.cColor;
      break;

    case 3:
      document.getElementById("carType").value = carObject3.cType;
      document.getElementById("carMPG").value = carObject3.cMPG;
      document.getElementById("carColor").value = carObject3.cColor;
      break;
  }
  
}

function changeColor(x){
  switch(x){
    case 1:
      document.getElementById("styleParagraph").style.color = 'red';
      break;
    
    case 2:
      document.getElementById("styleParagraph").style.color = 'green';
      break;

    case 3:
      document.getElementById("styleParagraph").style.color = 'blue';
      break;
  }
}