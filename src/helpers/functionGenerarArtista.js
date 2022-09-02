export function generarUri(ID_ARTISTA){

    const URI = `https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

    return URI

  }