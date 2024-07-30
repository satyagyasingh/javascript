let buttons = document.querySelectorAll(".button");
let body = document.querySelector("body")

buttons.forEach(function(button){
    button.addEventListener("click",function(e){
        let idd = e.target.id;
        if(idd == "blue"){
            body.style.backgroundColor = "rgb(9, 9, 158)";
        }
        if (idd == "red") {
          body.style.backgroundColor = "red";
        }
        if (idd == "green") {
          body.style.backgroundColor = "green";
        }
        if (idd == "yellow") {
          body.style.backgroundColor = "rgb(154, 154, 64)";
        }
        if (idd == "default") {
          body.style.backgroundColor = "#3b494a";
        }
        if (idd == "black") {
          body.style.backgroundColor = "#000";
        }
    })
});
