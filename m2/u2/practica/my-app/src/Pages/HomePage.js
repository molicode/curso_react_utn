import React, {useState, useEffect} from 'react'
import Producto from '../components/Producto'
import {getAll} from '../services/ProductosServices'

function HomePage(){
  
  const [loading,setLoading] = useState(true);
  const [productos,setProductos]=useState([])
  
  useEffect(
    ()=>{
      /*getAll()
      .then(data=>{
        console.log("data",data)
        if(data.results){
          setProductos(data.results)
          setLoading(false)
        }
        
      })*/
      async function request(){
        const {data} = await getAll()
        //console.log("response",response)
        if(data.results){
          setProductos(data.results)
          setLoading(false)
        }
      }
      request()
    },
    []
  )

  if(loading){
    return (
    
      <div className="App">
        Loading ..
        
       
      </div>
  
    );
  }else{
    return(
      <div className="App">
        {productos.map(producto=><Producto datos={producto}/>)}
      </div>
    )
  }
  
}



export default HomePage;
