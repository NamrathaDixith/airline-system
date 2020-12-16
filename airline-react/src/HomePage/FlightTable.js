import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { getTTFB } from 'web-vitals';
import{Container,Col,Form,Row,FormGroup,Label,Input,Button} from 'reactstrap';

class FlightTable extends Component {
    constructor(props) {
        super(props);  
    }  
    
    render() {
        return (
            
                <tr>
                <td>{this.props.obj.FlightDay} </td>
                <td>{this.props.obj.SourceCity} </td>
                <td>{this.props.obj.DestinationCity} </td>
                <td>{this.props.obj.TakeOffTime} </td>
                <td>{this.props.obj.ArrivalTime} </td>
                
                </tr>



                
            
        )
    }
}

export default FlightTable;