import React,{Component} from "react"


class Fruta extends Component{
  render(){
    console.log(this.props)
    const titulo = "Fruta";
    return(
      <div>
        <div>{titulo}</div>
        <p>{this.props.nombre}</p>
        <p>K Calorias: {this.props.calorias}</p>
      </div>
    )
  }
}

export default Fruta;
