const pokeAPI = "https://pokeapi.co/api/v2/pokemon/";
let imgConst;

function findPokemon(){
  let pokemon = document.getElementById("inputArea").value;
  let data = localStorage.getItem(pokemon);

  if(data==null){
    fetch(pokeAPI+pokemon)

      .then(response=>response.json())
      .then(data=> {
        console.log(data); 
        parseObject(data);
        localStorage.setItem(pokemon, JSON.stringify(data))
      })

      .catch(error=>console.error("Error"));
  }
  
  else{
    let obj = JSON.parse(data);
    parseObject(obj);
    console.log(obj);
  }
}

function addToTeam(){

}


function parseObject(data){
  let moves = data.moves;
  let image = data.sprites.front_default;
  let sound = data.cries.latest;

  imgConst = image;
  console.log(imgConst);
  //console.log(sound);
  //console.log(moves);

  if(document.getElementById("pokeIMG") == null){
    addImage(image);
  }
  else{
    removeImage();
    addImage(image);
  }

  if(document.getElementById("SOURCE") == null ){
    loadSound(sound);
  }

  else{
    removeSound();
    loadSound(sound);
  }

  if(document.getElementById("option") == null){
    addMoves(moves, document.getElementById("select1"));
    addMoves(moves, document.getElementById("select2"));
    addMoves(moves, document.getElementById("select3"));
    addMoves(moves, document.getElementById("select4"));
  }

  else{
    removeMoves();
    addMoves(moves, document.getElementById("select1"));
    addMoves(moves, document.getElementById("select2"));
    addMoves(moves, document.getElementById("select3"));
    addMoves(moves, document.getElementById("select4"));
  }

  


}

function addImage(image){
  let newImage = document.createElement("img");
  newImage.setAttribute("src", image);
  newImage.setAttribute("alt", "POKEMON");
  newImage.setAttribute("width", "500");
  newImage.setAttribute("height", "500");
  newImage.setAttribute("id", "pokeIMG");
  document.getElementById("IMAGE").appendChild(newImage);
  
}

function removeImage(){
  let image = document.getElementById("pokeIMG");
  image.parentNode.removeChild(image);
}

function removeSound(){
  let source = document.getElementById("SOURCE");
  source.parentNode.removeChild(source);
}

function loadSound(sound){
  let div = document.getElementById("player");
  div.style.display = "flex";
  let audio = document.getElementById("audio");
  audio.controls = true;
  let source = document.createElement("source");
  source.src = sound;
  source.setAttribute("id", "SOURCE");
  audio.appendChild(source);
}

function addMoves(moves, select){

  for(let item of moves){ 
    let option = document.createElement("option");
    option.setAttribute("id", "option");
    option.setAttribute("name", "option");
    option.setAttribute("value", item.move.name);
    option.innerHTML = item.move.name;
    select.appendChild(option);
  }
}

function removeMoves(){
  let select1 = document.getElementById("select1");
  let select2 = document.getElementById("select2");
  let select3 = document.getElementById("select3");
  let select4 = document.getElementById("select4");

  let option = document.getElementsByName("option");
  console.log(option);
  for(item of option){
    option.removeChild(item);
  }

}

function addToTeam(){
  let img = createTeamImage();
  let list = createList();
 

  let div = document.createElement("div");
  div.setAttribute("width", "100%");

  div.appendChild(img);
  div.appendChild(list);

  let team = document.getElementById("team");
  team.appendChild(div);


}

function createList(){
  let item1 = document.getElementById("select1").value;
  let item2 = document.getElementById("select2").value;
  let item3 = document.getElementById("select3").value;
  let item4 = document.getElementById("select4").value;

  let listItem1 = document.createElement("li");
  let listItem2 = document.createElement("li");
  let listItem3 = document.createElement("li");
  let listItem4 = document.createElement("li");

  listItem1.innerHTML = item1;
  listItem2.innerHTML = item2;
  listItem3.innerHTML = item3;
  listItem4.innerHTML = item4;

  let list = document.createElement("ul");
  list.appendChild(listItem1);
  list.appendChild(listItem2);
  list.appendChild(listItem3);
  list.appendChild(listItem4);

  return list;
}

function createTeamImage(){
  let img = document.createElement("img");
  img.setAttribute("src", imgConst);
  img.setAttribute("alt", "member");
  img.setAttribute("id", "pokeIMGMember");
  return img;
}


