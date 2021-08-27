import React,{Component} from "react"
import MenuOpcion from "./MenuOpcion";


class Menu extends Component{
  constructor(){
    super()
    this.state={
      options:[
        "Inicio",
        "ingresar",
        "Registrarse"
      ]
    }
  }
  componentWillMount(){
    console.log("componentWillMount")
  }
  componentDidMount(){
    console.log("componentDidMount")
  }
  componentWillUpdate(nextProps, nextState){
    console.log("componentWillUpdate Menu",nextProps, nextState)
  }
  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate Menu",prevProps, prevState)
  }
  shouldComponentUpdate(nextProps, nextState){
    return true
  }
  handleClickLogin=()=>{
    this.setState({
      options:[
        "Inicio",
        "salir"
      ]
    })
  }
  render(){
    return(
      <div>
        <ul>
        {this.state.options.map(option=><MenuOpcion nombre={option} />)}
        <button onClick={this.handleClickLogin}>Login</button>
        </ul>
      </div>
    )
  }
}

export default Menu;
