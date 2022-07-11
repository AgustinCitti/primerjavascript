//Ingreso Usuario
let nombreIngresado=prompt("Ingresar usuario")
let titulo = document.getElementById("Titulo")
titulo.innerHTML ="<h1>Bienvenido "+nombreIngresado+" </h1>"
console.log("Ingreso usuario: "+nombreIngresado);



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
let miFormulario = document.getElementById("form1");
let boton_Etiquetas = document.getElementById("btnEnviarEtiquetas");
boton_Etiquetas.addEventListener("click", validarFormulario1);


function validarFormulario1() {
    let pesoEtiqueta = document.getElementById("IngresarEtiquetas").value;
    if (pesoEtiqueta == ""){
        alert("completar");
        return false;
    }
    let mensaje =`Etiquetas: ${pesoEtiqueta}`;
function CalcularCant (mensaje){
        return ((pesoEtiqueta - 76)/5)
    }
    var cant = CalcularCant(pesoEtiqueta);
    cantM= cant.toFixed(2);
    console.log(cantM);
    alert(cantM);
    miFormulario.submit();
    document.write("<h4> La cantidad de etiquetas en stock es: "+cantM+"</h4>");
}
//-------------------------------
/*while(true){
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
document.write("<h4> La cantidad de etiquetas en stock es: "+cantM+"</h4>");*/




/*
let miFormulario = document.getElementById(form1);
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    let formulario =document.getElementById(form1)
    console.log(formulario);
    console.log("Valor 1: "+ formulario.children[0].value);

}*/



//ingreso cantidad de cajas
let miFormulario1 = document.getElementById("form2");
let boton_Latas = document.getElementById("btnEnviarLatas");
boton_Latas.addEventListener("click", validarFormulario2);


function validarFormulario2() {
    let cantCajas = document.getElementById("IngresarCajas").value;
    if (cantCajas == ""){
        alert("completar");
        return false;
    }
    let mensaje =`Etiquetas: ${cantCajas}`;
function CalcularCant (mensaje){
        return (cantCajas *24)
    }
    
    var cajas = CalcularCant(cantCajas);
    cajasM= cajas.toFixed(2);

    let sueltas = parseInt(document.getElementById("IngresarLatas").value) + cajas;
    console.log(cajasM);
    console.log(sueltas);
    
    miFormulario1.submit();
    document.write('<h3> CONTEO DE LATAS (SUELTAS Y EN CAJA) </h3>');
    document.write("<h4> La cantidad de latas en cajas es: "+cajasM+"</h4>");
    document.write("<h4> La cantidad de latas en total es: "+sueltas +"</h4>");
}


/*while(true){
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
document.write("<h4> La cantidad de latas en total es: "+parseInt(cantSueltas +parseInt(latasM))+"</h4>");*/


// Modificacion del DOM


for (const cerveza of cervezas) {
    let contenedor = document.createElement("div");

    contenedor.innerHTML= `<h3> ID: ${cerveza.id}</h3>
                            <p> Estilo: ${cerveza.estilo}</p>
                            <b> $ ${cerveza.precio}</b>`;
                            document.body.appendChild(contenedor);
 }
