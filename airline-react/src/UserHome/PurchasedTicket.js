import React, { Component } from 'react';
import axios from 'axios';
import PurchasedTable from './PurchasedTable';
import '../HomePage/Register.css';
import {Link} from 'react-router-dom';

export default class PurchasedTicket extends Component {

    

    constructor(props)
{
super(props);
this.state={business:[]};
}    

componentDidMount(){

    document.getElementById('lin').style.display="none";
        document.getElementById('lout').style.display="block";
        document.getElementById('profile').style.display="none";
        document.getElementById('home').style.display="none";
        document.getElementById('abt').style.display="none";
        document.getElementById('bookticket').style.display="block";
        document.getElementById('reg').style.display="none";
        document.getElementById('purchased').style.display="block";
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

return <PurchasedTable obj={object} key={i} />
});
}
render(){
return(
<div className="row">
<br></br><br></br>
<div className="col">
<br></br><br></br>
    <table className="table table-striped" style={{marginTop:10}}>
<thead>
    <tr>
        
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


// import {Table} from 'react-bootstrap';
// import axios from 'axios'
// import '../HomePage/Register.css'

// import React, { useState, useEffect } from 'react'  

// export default function PurchasedTicket(props){

//     var x=[];
//     var getObject;
//     if(localStorage.myData!=='undefined' || localStorage.myData!=='null'){
//         try{
//             getObject=localStorage.getItem('myData');
//              x=JSON.parse(getObject).BookingSchedule;
//         }catch{}
//             }
//             console.log( x)

//         return (
//             <div>
//                 <Table class="table" style={{marginTop:'50px'}}>
//                   <thead className="btn-primary">
//                       <tr>
                          
//                           <th>Date of Booking</th>
//                           <th>Flying From</th>
//                           <th>Moving To</th>
                          
//                       </tr>
//                       </thead>
//                       <tbody>
//                           {x.map(flight=>(
//                               <tr key={flight.UserID}>
//                                   <td>{flight.BookingDate}</td>
//                                   <td>{flight.Source}</td>
//                                   <td>{flight.Destination}</td>
                                  
//                               </tr>
//                           ))}
//                       </tbody>
//                       </Table>
//                       <p> </p>  
//             </div>
//         )
                          

//  }
