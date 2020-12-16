import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { getTTFB } from 'web-vitals';
import{Container,Col,Form,Row,FormGroup,Label,Input,Button} from 'reactstrap';

class CustomersTable extends Component {
    constructor(props) {
        super(props);  
    }  
    
    render() {
        return (
            
                <tr>
                <td>{this.props.obj.Title} </td>
                <td>{this.props.obj.Surname} </td>
                <td>{this.props.obj.OtherName} </td>
                <td>{this.props.obj.DOB} </td>
                <td>{this.props.obj.CountryOfResidence} </td>
                <td>{this.props.obj.Nationality} </td>
                <td>{this.props.obj.Email} </td>
                <td>{this.props.obj.PhoneNo} </td>
                
                </tr>



                
            
        )
    }
}

export default CustomersTable;