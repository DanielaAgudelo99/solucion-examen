var nombre = "Piñas";
var cantidad = 20;
var precio = 2200;

var total = precio * cantidad;

console.log("Precio: " +total);

if(cantidad >10){
    total = total * 0.8
}else{
    total = total * 0.9

}

console.log("El nuevo precio es: " +total);