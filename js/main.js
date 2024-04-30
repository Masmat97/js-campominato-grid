let griglia = document.getElementById("grid");

for(let i = 1; i <= 100; i++){
    
    let square = document.createElement("div");
    square.classList.add("square");
    square.innerText = i;
    

    square.addEventListener("click", function(){
        console.log();
    });

    griglia.append(square);
}

