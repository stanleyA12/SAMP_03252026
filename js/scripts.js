var variableVarPi =3.141592;

let variableLetEuler = 2.718281;

const contantePlank = 6.626070;

console.log(variableVarPi);
console.log(variableLetEuler);
console.log(contantePlank);

console.log({variableVarPi});
console.log({variableLetEuler});
console.log({contantePlank});

let variable;

variable = 1.234
console.log({variable});
variable = false;
console.log({variable});
variable = "hola";
console.log({variable});

let diaActual = new Date();
console.log(diaActual);

let fechahora = diaActual.getDate()+"/"+diaActual.getMonth()+"/"+diaActual.getFullYear()+" "+diaActual.
getHours()+":"+diaActual.getMinutes()+":"+diaActual.getSeconds();
console.log(fechahora);

let dia = diaActual.getDate();
let mes = (diaActual.getMonth() + 1).toString().padStart(2,"0");
let anio = diaActual.getFullYear();
let hora = diaActual.getHours();
let minuto = diaActual.getMinutes();
let segundo = diaActual.getSeconds();

let fechahora2 = `${dia}/${mes}/${anio} ${hora}:${minuto}:${segundo}`;

console.log(fechahora);
console.log(fechahora2);
//alert(fechahora);
//alert(fechahora2);

let mensajeEnHTML = document.getElementById("mensajito");
//alert(mensajeEnHTML.textContent);
//alert(mensajeEnHTML.innerHTML);

//esto es sin el id pero usamos el data
let parrafo = document.getElementById("mensajito").children[2].textContent;
//alert(parrafo);

let contenedor = document.getElementById("mensajito");
const parrafomensaje = contenedor.querySelector('[data-identificador="submensaje2"]');
//alert(parrafomensaje.textContent);

const height = window.innerHeight;
const width = window.innerWidth;

//alert("su pantalla posee "+width+" pixeles de ancho y "+height+" pixeles de alto");
console.log("su pantalla posee"+width+"pixeles de ancho y "+height+"pixeles de alto");
console.log("window.screen.avail.Width :"+window.screen.availWidth+"px","window.screen.availHeight:"+window.screen.availHeight+"px");

console.log("document.body.clientWidth:"+document.body.clientWidth+"px","document.body.clientHeight:"+document.body.clientHeight+"px");