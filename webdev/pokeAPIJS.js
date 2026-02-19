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
  //console.log(moves[0].move.name);

  if(document.getElementById("pokeIMG") == null){
    addImage(image);
  }
  else{
    removeImage();
    addImage(image);
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


