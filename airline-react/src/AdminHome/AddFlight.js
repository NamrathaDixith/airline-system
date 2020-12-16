import React, { Component } from 'react';
import axios from 'axios';
import '../HomePage/Register.css';
import { Link, Route, Switch } from 'react-router-dom';

import {Container,Col,Form,Row,FormGroup,Label,Input,Button} from 'reactstrap';

export default class AddFlight extends Component {
    constructor(props){
        super(props)
            this.state={
                SourceCity:null, 
                DestinationCity:null,
                TakeOffTime:null,
                ArrivalTime:null,
                Price:null,
                FlightDay:null,
                TotalSeats:'',
                SeatsBooked:'',
                AvailableSeats:''
                   
            }  
        }
        AddFlightSch=()=> {
                 axios.post('https://localhost:44391/AddFlight',{SourceCity:this.state.SourceCity, DestinationCity:this.state.DestinationCity, TakeOffTime:this.state.TakeOffTime, ArrivalTime:this.state.ArrivalTime, Price:this.state.Price, FlightDay:this.state.FlightDay, TotalSeats:400, SeatsBooked:0, AvailableSeats:400 })
                 .then(json=>{
                     
                         console.log(json.data.Status);
                         alert('Data added successfully');
                         this.props.history.push('/AdminHomepage')
                     
                })
            }

            handleChange= (e) => {
                this.setState({[e.target.name]:e.target.value});
            }

            render(){
                return(
                    <div className="addflt">
                    <div className="col">
                    <Container className="App">
                    <br></br><br></br><br></br>
                    <Form className="form">
                    <Col>
                    <FormGroup row>
                    <Label for="source" sm={2}>Source City</Label>
                    <Col sm={6}>
                    <Input type="text" name="SourceCity" onChange={this.handleChange} value={this.state.name} placeholder="Enter source city " required></Input>
                    </Col>
                    </FormGroup>

                    <FormGroup row>
                    <Label for="destination" sm={2}>Destination City</Label>
                    <Col sm={6}>
                    <Input type="text" name="DestinationCity" onChange={this.handleChange} value={this.state.name} placeholder="Enter destination city  " required></Input>
                    </Col>
                    </FormGroup>

                    <FormGroup row>
                    <Label for="takeoff" sm={2}>Take Off Time</Label>
                    <Col sm={6}>
                    <Input type="text" name="TakeOffTime" onChange={this.handleChange} value={this.state.name} placeholder="Enter take off time  " required></Input>
                    </Col>
                    </FormGroup>

                    <FormGroup row>
                    <Label for="arrival" sm={2}>Arrival Time</Label>
                    <Col sm={6}>
                    <Input type="text" name="ArrivalTime" onChange={this.handleChange} value={this.state.name} placeholder="Enter arrival time  " required></Input>
                    </Col>
                    </FormGroup>

                    <FormGroup row>
                    <Label for="price" sm={2}>Price Of Flight</Label>
                    <Col sm={6}>
                    <Input type="number" name="Price" onChange={this.handleChange} value={this.state.name} placeholder="Enter price  " required></Input>
                    </Col>
                    </FormGroup>

                    <FormGroup row>
                    <Label for="flightday" sm={2}>Flight Day</Label>
                    
                    <Col sm={6}>
                    
                    <select className="day" name="FlightDay" onChange={this.handleChange}>
                
                
                <option value="Sunday" selected>Sunday</option>
                 <option value="Monday" selected>Monday</option>
                 <option value="Tuesday" selected>Tuesday</option>
                 <option value="Wednesday" selected>Wednesday</option>
                 <option value="Thursday" selected>Thursday</option>
                 <option value="Friday" selected>Friday</option>
                 <option value="Saturday" selected>Saturday</option>
                
                </select>
                    </Col> 
                    
                    </FormGroup>

                    

                    <FormGroup row>
                    <Col sm={1}>
                        <Button type="button" onClick={this.AddFlightSch} className="btn btn-success">Submit</Button>
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
