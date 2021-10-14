(function () {
  function fnAddButtons() {

    var div0 = document.createElement("div");
    div0.className = "filter-forms left";


    var div1 = document.createElement("div");
    div1.id = "action_buttons";
    div1.className = "action_buttons";

    var btn = document.createElement("button");
    btn.value = "acknowledge.edit";
    btn.className = "btn-alt";
    btn.textContent = "Bulk acknowledge"; 
    btn.type = "submit";
    btn.name = "action";

    div1.appendChild(btn);
    div0.appendChild(div1);

    document.querySelector("#flickerfreescreen_problem > form").prepend(div0);
  }
  

  fnAddButtons();
})();

