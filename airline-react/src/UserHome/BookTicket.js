import React, { Component } from 'react';
import axios from 'axios';
import '../HomePage/Register.css';
import { Link, Route, Switch } from 'react-router-dom';

import {Container,Col,Form,Row,FormGroup,Label,Input,Button} from 'reactstrap';

export default class BookTicket extends Component {
  componentDidMount(){
    document.getElementById('lin').style.display="none";
    document.getElementById('home').style.display="none";
    document.getElementById('abt').style.display="none";
    document.getElementById('lout').style.display="block";
    document.getElementById('profile').style.display="none";
    document.getElementById('bookticket').style.display="block";
    document.getElementById('reg').style.display="none";
    document.getElementById('purchased').style.display="block";

 }

    constructor(props){
        super(props)
            this.state={
                CustomerID:null, 
                BookingDate:null,
                Source:null,
                Destination:null
                   
            }  
        }
        AddBookingInfo=()=> {
                 axios.post('https://localhost:44391/Api/Booking',{CustomerID:this.state.CustomerID, BookingDate:this.state.BookingDate, Source:this.state.Source, Destination:this.state.Destination})
                 .then(json=>{
                     //if(json.data.Status==='Success'){
                         console.log(json.data.Status);
                         alert('Data added successfully');
                         this.props.history.push('/PurchasedTicket')
                     //}
                    //  else{
                    //  alert('Data is not added');
                    //  debugger;
                    //  this.props.history.push('/UserList')
                 //}
                })
            }

            handleChange= (e) => {
                this.setState({[e.target.name]:e.target.value});
            }

            render(){
                return(
                    <div className="bookt">
                    <div className="col">
                    <Container className="App">
                    <br></br><br></br><br></br>
                    <Form className="form">
                    <Col>

                    <FormGroup row>
                    <Label for="cid" sm={2}>Customer ID</Label>
                    <Col sm={6}>
                    <Input type="text" name="CustomerID" onChange={this.handleChange} value={this.state.name} placeholder="Enter your ID  " required></Input>
                    </Col>
                    </FormGroup>

                    <FormGroup row>
                    <Label for="bookingdate" sm={2}>Date of Booking</Label>
                    <Col sm={6}>
                    <Input type="date" name="BookingDate" onChange={this.handleChange} value={this.state.name} placeholder="Enter date of booking  " required></Input>
                    </Col>
                    </FormGroup>

                    
                    <FormGroup row>
                    
                    <Label for="source" sm={2}>Source City</Label>
                    <Col sm={6}>
                    {/* <Input type="text" name="Source" onChange={this.handleChange} value={this.state.name} placeholder="Enter source city "></Input> */}
                    <select className="city" name="Source" onChange={this.handleChange}>
                
                
                <option value="Chennai" selected>Chennai</option>
                 <option value="Mumbai" selected>Mumbai</option>
                 <option value="Hyderbad" selected>Hyderbad</option>
                 <option selected disabled></option>
                </select>
                    </Col> 
                    </FormGroup>

                    <FormGroup row>
                    <Label for="destination" sm={2}>Destination City</Label>
                    <Col sm={6}>
                    {/* <Input type="text" name="Destination" onChange={this.handleChange} value={this.state.name} placeholder="Enter destination city  "></Input> */}
                    <select className="city" name="Destination" onChange={this.handleChange}>
                
                <option value="Bangalore" selected>Bangalore</option>
                 <option value="Jammu" selected>Jammu</option>
                 <option value="Kolkata" selected>Kolkata</option>
                 <option value="Delhi" selected>Delhi</option>
                 <option value="Panaji" selected>Panaji</option>
                 <option selected disabled></option>
                </select>
                    </Col>
                    </FormGroup><br></br>

                    

                    

                    

                    <FormGroup row>
                    <Col sm={1}>
                        <button type="button" onClick={this.AddBookingInfo} className="btn btn-success">Submit</button>
                    </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Col sm={1}>
                    <Button color="danger">Cancel</Button>{' '}
                    </Col>
                    </FormGroup>

                    
                    </Col>
                    </Form>
                    </Container>
                    </div>
                    
                    </div>
                );}
}
