import React, { Component } from 'react';
import axios from 'axios';
import BookingTable from './BookingTable';
import '../HomePage/Register.css';
import {Link} from 'react-router-dom';

export default class ViewBooking extends Component {

    constructor(props)
{
super(props);
this.state={business:[]};
}    

componentDidMount(){
debugger;

axios.get('https://localhost:44391/Api/Booking').then(response=>{
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

return <BookingTable obj={object} key={i} />
});
}
render(){
return(
<div className="row">
<br></br><br></br>
<div className="col">
    
    <table className="table table-striped" style={{marginTop:10}}>
<thead>
    <tr>
        <th>Customer ID</th>
        <th>Date Of Booking</th>
        <th>Source City</th>
        <th>Destination City</th>
        
        
        </tr>

    
</thead>


<tbody>{this.tabRow()}</tbody>
    </table>
    </div>
    
</div>

);
}
}
