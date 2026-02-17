function hideFilter(){
  this.document.getElementById("filterContent").style.display = "none";
}

window.onload = function(){hideFilter()};

function showFilter(){
  let showFilter = document.getElementById("filterContent");
  showFilter.style.display = "block";
}

function showAddNew(){
  let showArticle = document.getElementById("newContent");
  showArticle.style.display = "flex";
}

function addNewArticle(){
  let articleArr = getAttributes();

  let newArticle = document.createElement("article");
  let newTitle = document.createElement("h2");
  let newBody = document.createElement("p");
  let tempString = articleArr.tag;

  let spanString = tempString.charAt(0).toUpperCase() + tempString.slice(1);
  let newSpan = document.createElement("span");
  
  newSpan.classList.add("marker");
  newSpan.innerHTML = spanString;
  newArticle.classList.add(articleArr.tag);
  newTitle.innerHTML = articleArr.title;
  newBody.innerHTML = articleArr.body;

  newArticle.appendChild(newSpan);
  newArticle.appendChild(newTitle);
  newArticle.appendChild(newBody);

  document.getElementById("articleList").appendChild(newArticle);



}

function filterArticles(){
  let opinion = document.getElementById("opinionCheckbox").checked;
  let recipe = document.getElementById("recipeCheckbox").checked;
  let update = document.getElementById("updateCheckbox").checked;
  if(opinion){
    let opArr = document.getElementsByClassName("opinion");
    showArticle(opArr);
  }
  
  if(!opinion){
    let opArr = document.getElementsByClassName("opinion");
    hideArticle(opArr);
  } 

  if(recipe){
    let recipeArr = document.getElementsByClassName("recipe");
    showArticle(recipeArr);
  }
  if(!recipe){
    let recipeArr = document.getElementsByClassName("recipe");
    hideArticle(recipeArr);
  }

  if(update){
    let upArr = document.getElementsByClassName("update");
    showArticle(upArr);
  }
  if(!update){
    let upArr = document.getElementsByClassName("update");
    hideArticle(upArr);
  }
}

function showArticle(arr){
  for(let item of arr){
    item.style.display = "block";
  }
}

function hideArticle(arr){
  for(let item of arr){
    item.style.display = "none";
  }
}

function getAttributes(){
  let title = document.getElementById("inputHeader").value;
  let bodyText = document.getElementById("inputArticle").value;
  let articleType;
  let tag;
  let radGroup = document.getElementsByName("articleType");

  for(let item of radGroup){
    if(item.checked){
      articleType = item;
    }
  }
  
  switch(articleType.id){
    case "lifeRadio":
      tag = "update";
      break;
    case "recipeRadio":
      tag = "recipe";
      break;
    case "opinionRadio":
      tag = "opinion";
      break;
  }

  const arr = {
    tag: tag,
    title: title,
    body: bodyText
  }
  
  return arr;

}