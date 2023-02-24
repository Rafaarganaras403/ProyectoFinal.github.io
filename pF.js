
function CambiarDatos(dato) {
    switch(dato){
        case "email":
            document.getElementById("texto1").innerHTML = "Mi email es";
            document.getElementById("texto2").innerHTML = "jesse.ferguson@gmail.com";
            break;

        case "telefono":
            document.getElementById("texto1").innerHTML = "Mi telefono es";
            document.getElementById("texto2").innerHTML = "(768) 480-2058";
            break;

        case "direccion":
            document.getElementById("texto1").innerHTML = "Mi direccion es";
            document.getElementById("texto2").innerHTML = "7899 Rolling Green Rd";
            break;

        case "instagram":
            document.getElementById("texto1").innerHTML = "Mi instagram es";
            document.getElementById("texto2").innerHTML = "jes_ferguson65";
            break;
    }
}
/*function Click(buttonId) {
    if(buttonId = "email"){
        //document.getElementById("texto1").innerHTML = "Mi email es";
        //document.getElementById("texto2").innerHTML = "jesse.ferguson@gmail.com";
        console.log("email");
    }else if(buttonId = "telefono"){
        //document.getElementById("texto1").innerHTML = "Mi telefono es";
        //document.getElementById("texto2").innerHTML = "(768) 480-2058";
        console.log("telefono");
    }else if(buttonId = "direccion"){
        //document.getElementById("texto1").innerHTML = "Mi dirección es";
        //document.getElementById("texto2").innerHTML = "7899 Rolling Green Rd";
        console.log("direccion");
    }else if(buttonId = "instagram"){
        //document.getElementById("texto1").innerHTML = "Mi instagram es";
        //document.getElementById("texto2").innerHTML = "jes_ferguson65";
        console.log("instagram");
    }
}

//let boton = document.getElementsByClassName("boton_datos");
let boton = document.getElementsByTagName("button");
boton.addEventListener("click", function(){

    Click (boton.id);

})*/

/*
document.getElementById("email").onclick = function() {
    document.getElementById("texto1").innerHTML = "Mi email es";
    document.getElementById("texto2").innerHTML = "jesse.ferguson@gmail.com";
}

document.getElementById("telefono").onclick = function() {
    document.getElementById("texto1").innerHTML = "Mi telefono es";
    document.getElementById("texto2").innerHTML = "(768) 480-2058";
}

document.getElementById("direccion").onclick = function() {
    document.getElementById("texto1").innerHTML = "Mi direccion es";
    document.getElementById("texto2").innerHTML = "7899 Rolling Green Rd";
}

document.getElementById("instagram").onclick = function() {
    document.getElementById("texto1").innerHTML = "Mi instagram es";
    document.getElementById("texto2").innerHTML = "jes_ferguson65";
}*/