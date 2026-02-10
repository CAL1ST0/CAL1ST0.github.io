function getCounter(){
  let counter = document.getElementById("counter");
  return counter;
}

function tickUp(){
  let temp = getCounter();
  temp+=1;
  document.getElementById("counter").innerHTML=temp;
  
}