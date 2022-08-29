export function llenarspoty(canciones){
    let fila = document.getElementById("fila")
    fila.innerHTML=""
    canciones.tracks.forEach(function(cancion){
    

        let columna = document.createElement("div")
        columna.classList.add("col")
    
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card","shadow","h-100","my-2","p-4")
    
        let imagen = document.createElement("img")
        imagen.classList.add("img-fluid","w-100")
        imagen.src=cancion.album.images[0].url
    
        let nombre = document.createElement("h2")
        nombre.classList.add("text-center",)
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
}