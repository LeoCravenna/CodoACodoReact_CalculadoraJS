const displayValorAnterior = document.getElementById("val-anterior");
const displayValorActual   = document.getElementById("val-actual");
const botonesNumeros       = document.querySelectorAll(".numero"); //Selecciono todos los números mediante una clase
const botonesOperadores    = document.querySelectorAll(".operador"); //Selecciono todos los operadores mediante una clase

const display = new Display(displayValorAnterior, displayValorActual);

//Cada vez que se haga click en un botón número, llama al evento y lo muestra en el display
botonesNumeros.forEach(boton => {
    boton.addEventListener("click", () => {
        display.agregarNumero(boton.innerHTML);
    });
});

botonesOperadores.forEach(boton => {
    boton.addEventListener("click", () => display.computar(boton.value));
});