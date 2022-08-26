export function llenarSpoty(canciones){

  let fila = document.getElementById("fila")
  fila.innerHTML=""

  canciones.forEach(function(cancion){

    let columna = document.createElement("div")
    columna.classList.add("col","w-100")

    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card","shadow")

    let nombre = document.createElement("h2")
    nombre.textContent=cancion.name

    let preview = document.createElement("div")
    preview.textContent=cancion.preview_url

    let puntaje = document.createElement("div")
    puntaje.textContent=cancion.popularity


   
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(preview)
    tarjeta.appendChild(puntaje)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
  })
}