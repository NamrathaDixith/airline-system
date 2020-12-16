import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import { getTTFB } from 'web-vitals';
import{Container,Col,Form,Row,FormGroup,Label,Input,Button} from 'reactstrap';

class PurchasedTable extends Component {
    constructor(props) {
        super(props);  
    }  
    BookingList= ()=>{
        
        axios.delete('https://localhost:44391/api/Booking/DeleteBooking?id='+this.props.obj.TicketID)
        .then(json =>{
            
                alert('Record deleted successfully');
                
            
        })
    }
    render() {
        return (
                
                <tr>
                
                <td>{this.props.obj.BookingDate} </td>
                <td>{this.props.obj.Source} </td>
                <td>{this.props.obj.Destination} </td>
            
                {/* <td>
                <button type="button" onClick={this.BookingList} className="btn btn-danger">Cancel Ticket</button>
               </td> */}
                </tr>
                




                
            
        )
    }
}

export default PurchasedTable;