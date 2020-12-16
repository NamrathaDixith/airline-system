import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import { getTTFB } from 'web-vitals';
import{Container,Col,Form,Row,FormGroup,Label,Input,Button} from 'reactstrap';

class BookingTable extends Component {
    constructor(props) {
        super(props);  
    }  
    
    render() {
        return (
            
                <tr>
                <td>{this.props.obj.CustomerID} </td>
                <td>{this.props.obj.BookingDate} </td>
                <td>{this.props.obj.Source} </td>
                <td>{this.props.obj.Destination} </td>
            
                
                </tr>



                
            
        )
    }
}

export default BookingTable;