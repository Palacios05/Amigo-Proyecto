// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para almacenar los nombres

let amigos = [];

//Funcion para agregar un nombre a la lista

function agregarAmigo (){

    //Obtener el valor ingresado en el campo de texto desde el html

    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    //Verificar si el campo esta vacio

    if (nombreAmigo == ""){
        alert("Por favor ingresar un nombre valido");
    }else{
        
        amigos.push(nombreAmigo);

        inputAmigo.value = "";

        mostrarListaAmigos();
    }
}

// Funcion para mostrar la lista de amigos en el HTML

function mostrarListaAmigos (){

    const listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo(){

    if(amigos.length === 0){
        alert("No hay amigos para sortear");
        return
    }


    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `¡El amigo secreto es: ${amigoSorteado}!`;
}