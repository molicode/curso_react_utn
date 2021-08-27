


function FrutaF(props){
  console.log("funcion",props)
  const {nombre,calorias,children} = props
  return(
      <div>
        {children}
        <p>{nombre}</p>
        <p>K Calorias: {calorias}</p>
        
      </div>
  )
  
}

export default FrutaF;
