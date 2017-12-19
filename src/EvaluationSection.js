import React, { Component } from 'react';

class EvaluationSection extends Component{
  constructor(props){
    super(props);
    this.state =  {
                    /*selectedfunctOption :'1'
                    levels              :['Bajo','Medio-Bajo','Medio','Medio-Alto','Alto','Other'],
                    title:'Conocimientos Funcionales',
                    desc:'Relacionado a los procesos, tecnicas, metodologias o estandares requeridos para cumplir con su tarea',
                    noteDesc:'Conocimientos Funcionales (Nota) '*/
                  }          
  }

  functOptionChange(e){
    this.setState({selectedfunctOption: e.target.value})
  }
  componentWillMount(){console.log('Mount Ok' )}

  render(){
    console.log('render ok', this.props)
    let rows = this.props.componentsToLoad.map( (item) =>
        <div ><br/>
          <h3>{item.title}</h3>
          <label>{item.desc}</label><br/><br/>   

         <div>{item.levels.map((option) =><label><input type="radio" name={item.groupName} />{option}<br/><br/></label>)}</div>
          <h3>{item.noteDesc}</h3>
          <input type="text" placeholder="Insert comments here" ></input></div>


      )

      return(<div>
          {rows}
          </div>)
  }

}
  export default EvaluationSection;