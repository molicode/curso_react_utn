import instance from "../config/Axios"
export function getAll(){
      return instance.get("sites/MLA/search?q=ipod")
}

/* con fetch*/
/*export function getAll(){
    return fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod")
      .then(res=>res.json())
}*/


