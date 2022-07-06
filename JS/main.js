//Ingreso Usuario
let nombreIngresado=prompt("Ingresar nombre")
let titulo = document.getElementById("Titulo")
titulo.innerHTML ="<h1>Bienvenido "+nombreIngresado+" </h1>"



// cervezas, estilos y precios

  const cervezas= [{ id: 1, estilo: "Kolsch", precio:200},
                    {id: 2, estilo: "Honey", precio:200 },
                    {id: 3, estilo: "Porter", precio:170 },
                    {id: 4, estilo: "Ipa", precio:170 },
                    {id: 5, estilo: "Scottish", precio:170 }]

const buscado = cervezas.find(estilo => estilo.id === 1)
const buscado2 = cervezas.find(estilo => estilo.id === 2)
const buscado3 = cervezas.find(estilo => estilo.id === 3)
const buscado4 = cervezas.find(estilo => estilo.id === 4)
const buscado5 = cervezas.find(estilo => estilo.id === 5)

console.log(buscado);
console.log(buscado2);
console.log(buscado3);
console.log(buscado4);
console.log(buscado5);

const existe = cervezas.some(cervezas => cervezas.estilo === "Kolsch")
const existe2 = cervezas.some(cervezas => cervezas.estilo === "Honey")
const existe3 = cervezas.some(cervezas => cervezas.estilo === "Porter")
const existe4 = cervezas.some(cervezas => cervezas.estilo === "Ipa")
const existe5= cervezas.some(cervezas => cervezas.estilo === "Scottish")
console.log(existe);
console.log(existe2);
console.log(existe3);
console.log(existe4);
console.log(existe5);

const barata = cervezas.filter(estilo => estilo.precio < 180)
console.log(barata);
const cara = cervezas.filter(estilo => estilo.precio > 180)
console.log(cara);






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


// Modificacion del DOM


for (const cerveza of cervezas) {
    let contenedor = document.createElement("div");

    contenedor.innerHTML= `<h3> ID: ${cerveza.id}</h3>
                            <p> Estilo: ${cerveza.estilo}</p>
                            <b> $ ${cerveza.precio}</b>`;
                            document.body.appendChild(contenedor);
 }
