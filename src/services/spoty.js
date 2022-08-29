import{URI,PETICION} from '../helpers/datosPeticionGet.js'
import{consultarCanciones}from './servicioConsultarCanciones.js'

//consumiendo apis 

//1.Para donde voy
consultarCanciones()


.then(function(respuesta){

  return respuesta.json()
})

.then(function(respuesta){
  

})

.catch(function(respuestaError){

  console.log(respuestaError)
})