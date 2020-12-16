import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import { getTTFB } from 'web-vitals';
import{Container,Col,Form,Row,FormGroup,Label,Input,Button} from 'reactstrap';

class FeedbackTable extends Component {
    constructor(props) {
        super(props);  
    }  
    
    render() {
        return (
            
                <tr>
                <td>{this.props.obj.Name} </td>
                <td>{this.props.obj.Email} </td>
                <td>{this.props.obj.PhoneNo} </td>
                <td>{this.props.obj.Msg} </td>
            
                
                </tr>



                
            
        )
    }
}

export default FeedbackTable;