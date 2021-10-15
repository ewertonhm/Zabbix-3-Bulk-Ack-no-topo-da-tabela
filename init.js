function fnAddButtons() {    
  var div0 = document.createElement("div");
  div0.className = "filter-forms";

  var div1 = document.createElement("div");
  div1.id = "action_buttons";
  div1.className = "action_buttons right";

  var btn = document.createElement("button");
  btn.value = "acknowledge.edit";
  btn.className = "btn-link";
  btn.textContent = "Bulk acknowledge"; 
  btn.type = "submit";
  btn.name = "action";

  div1.appendChild(btn);
  div0.appendChild(div1);

  var table = document.getElementsByClassName("list-table")[0];
  var form = table.parentElement;


  form.prepend(div0);
}

function callback(){
  if (document.querySelector("#flickerfreescreen_problem > form > div.filter-forms") === null){
    fnAddButtons();
    //console.log('Mutation Ocurred!')
  }
}

function observe(){
  if (document.querySelector("#flickerfreescreen_problem > form > div.filter-forms") === null){
    fnAddButtons();
  }

  const observer = new MutationObserver(mutations => {
    //console.log(mutations);
    callback();
  });

  var article = document.querySelector("body > div.article");

  observer.observe(article, {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  });
}

document.querySelector("body > div.article > script:nth-child(8)").remove

observe();



