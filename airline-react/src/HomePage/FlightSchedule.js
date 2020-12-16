import React, { Component } from 'react';
import axios from 'axios';
import FlightTable from './FlightTable';
import './Contact.css';

export default class FlightSchedule extends Component {

    constructor(props)
{
super(props);
this.state={business:[]};
}    



componentDidMount(){
debugger;

axios.get('https://localhost:44391/Api/Flight').then(response=>{
this.setState({business:response.data});
debugger;
})
.catch(function(error){
console.log(error);
})
}
tabRow(){
return this.state.business.map(function(object,i){
    console.log(object);
    console.log(i);

return <FlightTable obj={object} key={i} />
});
}
render(){
return(
<div className="row">
<br></br><br></br>
<div className="col">
    <h4 className="heading3" style={{paddingLeft:"460px"}}>Our Flight Schedule</h4><br></br><br></br>
    <img className="img3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PGgq0f_pJmSR0vYb_8rPkGX7apmHGPmuXA&usqp=CAU" alt="..."/>
    <br></br><br></br><br></br>
    <table className="table table-striped" >
<thead>
    <tr>
        <th>Day</th>
        <th>Source City</th>
        <th>Destination City</th>
        <th>Departure Time</th>
        <th>Arrival Time</th>
        
        </tr>

    
</thead>


<tbody>{this.tabRow()}</tbody>
    </table>
    </div>
    
</div>

);
}
}
