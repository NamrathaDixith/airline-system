import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import { getTTFB } from 'web-vitals';
import{Container,Col,Form,Row,FormGroup,Label,Input,Button} from 'reactstrap';

class AdminFlightTable extends Component {
    constructor(props) {
        super(props);  
    }  
    FlightList= ()=>{
        
        axios.delete('https://localhost:44391/api/Flight/DeleteFlight?id='+this.props.obj.Id)
        .then(json =>{
            //if(json.data.Status=='Delete'){
                alert('Record deleted successfully');
                
            //}
        })
    }
    render() {
        return (
            
                <tr>
                <td>{this.props.obj.FlightDay} </td>
                <td>{this.props.obj.SourceCity} </td>
                <td>{this.props.obj.DestinationCity} </td>
                <td>{this.props.obj.TakeOffTime} </td>
                <td>{this.props.obj.ArrivalTime} </td>
                <td>Rs. {this.props.obj.Price} </td>

                

               <td>
                <button type="button" onClick={this.FlightList} className="btn btn-danger">Delete</button>
               </td>
                
                </tr>



                
            
        )
    }
}

export default AdminFlightTable;