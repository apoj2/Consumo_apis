const ID_ARTISTA = "15UsOTVnJzReFVN1VCnxy4"

export const URI = `https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

const TOKEN = "Bearer BQBAwkaxV7XvQZkZGJJ1jJyNTo_v0ARhrrp3idaEx6Pt8nxBDBRcamw9KjfqJQYC5luKctBRD5Llk9u3t0-j8V5A48pH1T8xFY7l6hB_qvRW3gB8B9NbTJu2OzJwXWl5REa1tEgBnTKGqD2rFaqYZkfPy70-36sIMrn08QlRICQVp2TLGN_SPzFmubsLmjQ"

export const PETICION = {
    method:"GET",
    headers:{
      Authorization:
        TOKEN
    }
  
  }

