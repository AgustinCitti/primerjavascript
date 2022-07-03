
class Cerveza {

    constructor(estilo, precio) {
   
     this.estilo = estilo.toUpperCase();
   
     this.precio = parseFloat(precio);
   
     this.vendido = false;
   
    }
   
    impuestos() {
   
     this.precio = this.precio * 1.21;
   
    }
   
   }
   
   const cervezas = [
   
    { id: 1, cerveza: "Kolsch" },
   
    { id: 2, cerveza: "Honey" },
   
    { id: 3, cerveza: "Ipa" },
   
    { id: 4, cerveza: "Porter" },
   
   ]
   console.log(cervezas)
   
  const resultado = cervezas.find ( (el) => el.cerveza === "Kolsch")
  const resultado2 = cervezas.find ( (el) => el.cerveza === "Honey")
  const resultado3 = cervezas.find ( (el) => el.cerveza === "Ipa")
  const resultado4 = cervezas.find ( (el) => el.cerveza === "Porter")
  
  console.log(resultado);
  console.log(resultado2);
  console.log(resultado3);
  console.log(resultado4);














// Ingreso de peso de etiquetas

while(true){
    var pesoEtiqueta = parseFloat(prompt("Ingrese peso del rollo de etiquetas:"));

    if(!isNaN(pesoEtiqueta) && pesoEtiqueta != null && pesoEtiqueta != ""){
        break;
    }else{
        alert('no es numero');
        continue;
    }
}
pesoEtiquetaM= pesoEtiqueta.toFixed(2);
alert("El peso del rollo es: "+pesoEtiquetaM);
console.log("El peso del rollo es: "+pesoEtiquetaM);
document.write("<h4> El peso del rollo es: "+pesoEtiquetaM+"</h4>");

// Operacion calculo segun peso de etiquetas 
function CalcularCant (pesoEtiqueta){
    return ((pesoEtiqueta - 76)/5)
}
var cant = CalcularCant(pesoEtiqueta);
cantM= cant.toFixed(2);
alert("La cantidad de etiquetas en stock es: "+cantM);
console.log("La cantidad de etiquetas en stock es: "+cantM);
document.write("<h4> La cantidad de etiquetas en stock es: "+cantM+"</h4>");




//ingreso cantidad de cajas
while(true){
    var cantCajas = parseFloat(prompt("Ingrese cantidad de cajas:"));

    if(!isNaN(cantCajas) && cantCajas != null && cantCajas != ""){
        break;
    }else{
        alert('no es numero');
        continue;
    }
}
cantCajasM= cantCajas.toFixed(2);
alert("La cantidad de cajas: "+cantCajasM);
console.log("La cantidad de cajas: "+cantCajasM);
document.write("<h4> La cantidad de cajas: "+cantCajasM+"</h4>");

//latas por caja
function CalcularIva (cantCajas){
    return (cantCajas *24);
}
var latas = CalcularIva(cantCajas);
latasM= latas.toFixed(2);
alert("La cantidad de latas en cajas es: "+latasM);
console.log("La cantidad de latas en cajas es: "+latasM);
document.write("<h4> La cantidad de latas en cajas es: "+latasM+"</h4>");

//latas sueltas
while(true){
    var cantSueltas = parseFloat(prompt("Ingrese cantidad de latas sueltas:"));

    if(!isNaN(cantSueltas) && cantSueltas != null && cantSueltas != ""){
        break;
    }else{
        alert('no es numero');
        continue;
    }
}
cantSueltasM= cantSueltas.toFixed(2);
alert("La cantidad de latas sueltas es: "+cantSueltasM);
console.log("La cantidad de latas sueltas es: "+cantSueltasM);
document.write("<h4> La cantidad de latas sueltas es: "+cantSueltasM+"</h4>");
//latas en total
alert("La cantidad de latas en total es: "+ parseInt(cantSueltas +parseInt(latasM)));
console.log("La cantidad de latas en total es: "+parseInt(cantSueltas +parseInt(latasM)));
document.write("<h4> La cantidad de latas en total es: "+parseInt(cantSueltas +parseInt(latasM))+"</h4>");