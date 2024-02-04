
var done = document.getElementsByClassName("btnDel");
var i;
for (i = 0; i < done.length; i++) {
  done[i].addEventListener("click",function(){
    
  })
}

function task(){
  const taskPhrase = prompt();
  if (taskPhrase == ""){
     window.alert("its null type something")
  }else{
  const tasks= document.createElement("li");
    const node = document.createTextNode(taskPhrase);
    tasks.appendChild(node);
    document.getElementById("toDo").appendChild(tasks);
    var del = document.createElement("SPAN");
    var txt = document.createElement("BUTTON");
    txt.className=("btnDel")
    var X = document.createTextNode("X");
    txt.appendChild(X);
    del.appendChild(txt);
    tasks.appendChild(del);

    for (i = 0; i < done.length; i++) {
      done[i].addEventListener("click",function(){
        var div = this.parentElement.parentElement;
        div.className="checked";
      })

 }
}
}

