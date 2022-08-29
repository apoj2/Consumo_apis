const URI = "https://swapi.dev/api/planets"

const PETICION = {
    method:"GET"
}

fetch(URI,PETICION)

.then(function(respuesta){

    return respuesta.json()
})

.then (function(respuesta){

    let table = document.getElementById("table")

    respuesta.results.forEach(function(planetas){
       
        let tbody = document.createElement("tbody")

        let tr1 = document.createElement("tr")
        let nombre =document.createElement("td")
        nombre.textContent=planetas.name

        let orbital = document.createElement("td")
        orbital.textContent=planetas.orbital_period
        
        let rotacion = document.createElement("td")
        rotacion.textContent=planetas.rotation_period

        tr1.appendChild(nombre)
        tr1.appendChild(orbital)
        tr1.appendChild(rotacion)
        tbody.appendChild(tr1)

        table.appendChild(tbody)

    })
})

.catch(function(respuestaError){

    console.log(respuestaError)
})

