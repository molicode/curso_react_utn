import React,{Component} from "react"


class MenuOpcion extends Component{
  componentWillUpdate(nextProps, nextState){
    console.log("componentWillUpdate MenuOpcion",nextProps, nextState)
  }
  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate MenuOpcion",prevProps, prevState)
  }
  render(){
    console.log(this.props)
    return(
      <li>{this.props.nombre}</li>
    )
  }
}

export default MenuOpcion;

