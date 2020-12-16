import React, { Component } from 'react';
import axios from 'axios';
import AdminFlightTable from './AdminFlightTable';
import '../HomePage/Register.css';
import {Link} from 'react-router-dom';

export default class AdminHomepage extends Component {

    constructor(props)
{
super(props);
this.state={business:[]};
}    

componentDidMount(){
  document.getElementById('home').style.display="none";
  document.getElementById('abt').style.display="none";
  document.getElementById('lin').style.display="none";
  document.getElementById('reg').style.display="none";
  document.getElementById('lout').style.display="block";
  document.getElementById('delflight').style.display="block";
  document.getElementById('addflight').style.display="block";
  document.getElementById('booking').style.display="block";
  document.getElementById('cust').style.display="block";
  document.getElementById('fb').style.display="block";
  document.getElementById('contact').style.display="none";

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

return <AdminFlightTable obj={object} key={i} />
});
}
render(){
return(
<div className="row">
<br></br><br></br>
<div className="col">
    
    <table className="table table-striped" style={{marginTop:"40px", width:"70%", marginLeft:"200px"}}>
<thead>
    <tr>
        <th>Day</th>
        <th>Source City</th>
        <th>Destination City</th>
        <th>Departure Time</th>
        <th>Arrival Time</th>
        <th>Price</th>
        <th colSpan="4">Action</th>
        </tr>

    
</thead>


<tbody>{this.tabRow()}</tbody>
    </table>
    </div>
    
</div>

);
}
}
