//generar un token automatico

//uri
const URI = "https://accounts.spotify.com/api/token"

//datos de envio

const DATO1="grant_type=client_credentials"

const DATO2="client_id=27be513c94cc48feb38256098e61ebd5"

const DATO3="client_secret=c8462953897b41789cf0c005fe421a91"

//peticion
const PETICION = {
    method:"POST",
    headers:{
        
    },
    body:DATO1+ "&" +DATO2+ "&"+ DATO3,

}

//fetch
fetch()
.then()
.then()
.catch()
