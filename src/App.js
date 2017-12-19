
/*import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
      {'Testdd'}
      </div>
    );
  }
}

export default App;*/
import React, { Component } from 'react';
import EvaluationSection from './EvaluationSection.js';
import './App.css';
const Controller = window.EvaluationClass;

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			validationsComplete :false,
			selectedtechOption  :'1',
			selectedfunctOption :'1',
			SearchEmployeeName :'',
			ContactsFound:[],
			componentsToLoad: []
		}
    this.SaveEvaluation = this.SaveEvaluation.bind(this)
	}

	componentWillMount(){
		/*const recordId = getUrlParameters()["id"];
		this.setState({
		RecordId: recordId
		}, () => {getInitialState(this)
		});*/
	    let componentsToLoad = [
	                    {                    
	                    levels  : ['Bajo','Medio-Bajo','Medio','Medio-Alto','Alto','Other'],
	                    title   :'Conocimientos Funcionales',
	                    desc    :'Relacionado a los procesos, tecnicas, metodologias o estandares requeridos para cumplir con su tarea',
	                    noteDesc:'Conocimientos Funcionales (Nota) ',
	                    groupName:'FuncGroup'
	                    },
	                    {
	                    levels  : ['Bajo','Medio-Bajo','Medio','Medio-Alto','Alto','Other'],
	                    title   :'Conocimientos Tecnicos',
	                    desc    :'Posee las herramientas, tecnologias y metodologias de trabajo que tiene que utilizar para cumplir sus tareas',
	                    noteDesc:'Conocimientos Tecnicos (Nota) ',
	                    groupName:'TechGroup'
	                    }];
	                    this.setState({
	                      componentsToLoad
	                    })
	  }	
	UserSearch(){

        var contactName = document.getElementById('contactName').value;  
        Controller.findContact(contactName, 
					(response, error) => {
						if(error.status) {debugger} 
						else{debugger} 
					});

        /*Visualforce.remoting.Manager.invokeAction(
                    '{!$RemoteAction.EvaluationClass.findContact}',
                       contactName, 
                    
                        function(result, event){
                            if (event.status) 
                            {
                                // Get DOM IDs for HTML and Visualforce elements like this
                                document.getElementById('contactId').innerHTML = result.Id
                                
                                document.getElementById
                                (
                                 "{!$Component.block.blockSection.secondItem.contactName}"
                                ).innerHTML = result.Name;
                            } 
                            
                            else if (event.type === 'exception') 
                            {
                                document.getElementById("responseErrors").innerHTML = 
                                    event.message + "<br/>\n<pre>" + event.where + "</pre>";
                            } 
                            else 
                            {
                                document.getElementById("responseErrors").innerHTML = event.message;
                            }
                        }, 
                        {escape: true}
                );*/

                
	}
	LoadEvaluation(){}
	SaveEvaluation(){}

	/*shouldComponentUpdate: function(nextProps,nextState){
		return nextProps.id !== nextState.id
	}*/	
	render(){
		return(
			<div className="containerBody">
		    <br/>
		    <h1>Evaluación</h1><hr/><br/>
		    <h2>Evaluación del desempeño</h2>
		    <hr/>
		    <h3>Nombre del evaluado - {this.state.text}</h3>
		    <input id="contactName" type="text" placeholder="search for user here"></input><br/>
		    <button onClick={this.UserSearch.bind(this)}>Get Contact</button>
		    <EvaluationSection componentsToLoad={this.state.componentsToLoad}/>
		    <br/><br/><br/>
	        <button id="searchButton" onClick={this.SaveEvaluation.bind(this)}>Guardar</button>
	        <br/><br/><br/>
	        <div id="SearchResult">
	        <p id="contactId"></p>
	        <p id="contactName"></p>
	        </div>
	        <br/><br/><br/>
		  </div>
		  )
	  }
}



  export default App








