const pokeAPI = "https://pokeapi.co/api/v2/pokemon/";


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

  addMoves(moves);


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

function addMoves(moves){
  let select1 = document.getElementById("select1");
  let select2 = document.getElementById("select2");
  let select3 = document.getElementById("select3");
  let select4 = document.getElementById("select4");

  for(let item of moves){ 
    let option = document.createElement("option");
    option.setAttribute("value", item);
    option.innerHTML = item;
    select1.appendChild(option);
    select2.appendChild(option);
    select3.appendChild(option);
    select4.appendChild(option);
  }
}


