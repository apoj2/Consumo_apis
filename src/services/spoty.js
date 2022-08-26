//consumiendo apis 

//1.Para donde voy
const URI = "https://api.spotify.com/v1/artists/7x5Slu7yTE5icZjNsc3OzW/top-tracks?market=US"

//2.configurar la peticion

const PETICION = {
  method:"GET",
  headers:{
    Authorization:"Bearer BQCW5OnHtFC0OnovMygX3thmlnt0Xf3WHbZALPnPqLLt-wqncHAhs6Rnzq5PBmfY6y8BPHPy7MTjFZs6ss1QvOQyyDATgDc4OF16mrTddyJUHIAE-9BM3jSdPy5uFJVtYMwj-xY_JQAIA9p70JtMCbV9np_XuZ-xOgK71bo8dZP0VdeRsDQhz7rkDOwgNKM"
  }
}

fetch(URI,PETICION)

.then(function(respuesta){

  return respuesta.json()
})

.then(function(respuesta){

  console.log(respuesta)
  console.log(respuesta.tracks)
  let fila = document.getElementById("fila")

  respuesta.tracks.forEach(function(cancion){
    

    console.log(cancion.name)
    console.log(cancion.preview_url)
    console.log(cancion.popularity)
    console.log(cancion.album)
    console.log(cancion.album.images)

    let columna = document.createElement("div")
    columna.classList.add("col")

    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card","shadow","h-100","my-2","p-4")

    let imagen = document.createElement("img")
    imagen.classList.add("img-fluid","w-100")
    imagen.src=cancion.album.images[0].url

    let nombre = document.createElement("h2")
    nombre.classList.add("text-center")
    nombre.textContent=cancion.name

    let preview = document.createElement("audio")
    preview.classList.add("mx-auto","m-xxl-auto","d-block","my-4","w-100")
    preview.setAttribute("controls","controls")
    preview.src=cancion.preview_url

    let puntaje = document.createElement("div")
    puntaje.classList.add("text-center","my-4","rounded-pill","bg-light","w-25","mx-auto","m-xxl-auto","d-block","fw-bold")
    puntaje.textContent=cancion.popularity


    tarjeta.appendChild(imagen)
    tarjeta.appendChild(preview)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(puntaje)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
  })
  console.log(respuesta.tracks[0])
  console.log(respuesta.tracks[0].name)
  console.log(respuesta.tracks[0].preview_url)
  console.log(respuesta.tracks[0].popularity)
  console.log(respuesta.tracks[0].album)
  console.log(respuesta.tracks[0].album.images)
  
 



})

.catch(function(respuestaError){

  console.log(respuestaError)
})