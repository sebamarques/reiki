let servicios = document.getElementById("servicios");
let mostrar ="";
let nuevo_servicio ="";
let masajes ={
    tipo:"masaje",
    precio:1000,
    descripcion:"lorem ipsum lorem ipsum",
    duracion:"1 hora"
}
let reiki = {
    tipo:"reiki",
    precio:1500,
    descripcion:"lorem ipsum lorem ipsum",
    duracion:"1 hora"
}
function seleccion_masaje(){
    nuevo_servicio = `
    <section>
    <button onclick="seleccion_masaje()">Masajes</button>
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
    <button onclick="seleccion_masaje()">Masajes</button>
    <button onclick="seleccion_reiki()">Reiki</button>
    <section>
    <h3>${reiki.tipo}</h3>
    <p>${reiki.precio}</p>
    <p>${reiki.descripcion}</p>
    <p>${reiki.duracion}</p>
    </section>
    `
    servicios.innerHTML = nuevo_servicio
}