let servicios = document.getElementById("servicios");
let mostrar ="";
let nuevo_servicio ="";
let masajes ={
    img:"",
    alt_img:"",
    tipo:"masaje",
    precio:1000,
    descripcion:"lorem ipsum lorem ipsum",
    duracion:"1 hora"
}
let reiki = {
    img:"",
    alt_img:"",
    tipo:"reiki",
    precio:1500,
    descripcion:"lorem ipsum lorem ipsum",
    duracion:"1 hora"
}
function seleccion_masaje(){
    nuevo_servicio = `
    <section class="servicios">
    <button onclick="seleccion_reiki()">Reiki</button>
    <h3>${masajes.tipo}</h3>
    <p>${masajes.precio}</p>
    <p>${masajes.descripcion}</p>
    <p>${masajes.duracion}</p>
    </section>
    `
    servicios.innerHTML = nuevo_servicio
}

function seleccion_reiki(){
    nuevo_servicio = `
    <section class="servicios">
    <button onclick="seleccion_masaje()">Masajes</button>
    <h3>${reiki.tipo}</h3>
    <p>${reiki.precio}</p>
    <p>${reiki.descripcion}</p>
    <p>${reiki.duracion}</p>
    </section>
    `
    servicios.innerHTML = nuevo_servicio
}

function enviar_formulario(){
    console.log("sexxo")
}