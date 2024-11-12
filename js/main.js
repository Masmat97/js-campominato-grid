let griglia = document.getElementById("grid");
let start = document.getElementById("start");
let select = document.getElementById("difficult");

start.addEventListener("click", function () {
    if (select.value == "easy") {

        for (let i = 1; i <= 100; i++) {
            console.log(i);
            let elemento = creaQuadrato(i);
            griglia.append(elemento);
        }
    } else if (select.value == "medium") {

        for (let i = 1; i <= 81; i++) {
            console.log(i);
            let elemento = creaQuadrato(i);
            elemento.classList.add("square-9");
            griglia.append(elemento);

        }

    } else if (select.value == "hard") {

        for (let i = 1; i <= 49; i++) {
            console.log(i);
            let elemento = creaQuadrato(i);
            elemento.classList.add("square-7");
            griglia.append(elemento);
        }
    }

})



function creaQuadrato(contenuto) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.innerText = contenuto;

    square.addEventListener("click", function () {
        console.log(this);

        if (this.classList.contains("cambio")) {
            this.classList.remove("cambio");
        } else {
            this.classList.add("cambio");
        }


    });

    return square

}



