import {generarUri} from '../helpers/functionGenerarArtista.js'
import {consultarCanciones} from '../services/servicioConsultarCanciones.js'
import {PETICION} from '../helpers/datosPeticionGet.js'
import {llenarspoty} from './controladorPintarCanciones.js'


let botonBuscar = document.getElementById("btnBuscar")


botonBuscar.addEventListener("click",function(evento){

    let artista = document.getElementById("artista")
    const URI = generarUri(artista.value)

    activarServicio()

    async function activarServicio(){
        var CANCIONES = await consultarCanciones(URI,PETICION)
        console.log(CANCIONES)
        llenarspoty(CANCIONES.tracks)
        
    }
    
   
    

    
    

})

