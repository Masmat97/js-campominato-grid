let griglia = document.getElementById("grid");

for(let i = 1; i <= 100; i++){
    
    // let square = document.createElement("div");
    // square.classList.add("square");
    // square.innerText = i;
    let elemento = creaQuadrato(i);
    griglia.append(elemento);
}

function creaQuadrato(contenuto){
    let square = document.createElement("div");
	square.classList.add("square");
    square.innerText = contenuto;


    square.addEventListener("click", function(){
        console.log(this);
        this.classList.add("cambio")
    });

    return square

}



