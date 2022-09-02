import {consultarCanciones} from './servicioConsultarCanciones.js'
import {URI,PETICION} from '../helpers/datosPeticionGet.js'
import {llenarspoty} from '../controllers/controladorPintarCanciones.js'

const CANCIONES = await consultarCanciones(URI,PETICION);

llenarspoty(CANCIONES.tracks)

console.log(CANCIONES)