import React, { Component } from 'react';
import axios from 'axios';
import './Register.css';
import {Container,Col,Form,Row,FormGroup,Label,Input,Button} from 'reactstrap';

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validTitleRegex = RegExp(/^[A-Z]*[a-z]*$/);
  const validSurnameRegex = RegExp(/^[A-Z]*[a-z]*$/);
  const validOtherNameRegex = RegExp(/^[A-Z]*[a-z]*$/);
  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

export default class Register extends Component {
    constructor(props){
        super(props)
            this.state={
                Title:null, 
                Surname:null,
                OtherName:null,
                DOB:null,
                CountryOfResidence:null,
                Nationality:null,
                Email:null,
                PhoneNo:null,
                Password:null,
                errors: {
                    Title: '',
                    Surname: '',
                    OtherName: '',
                    PhoneNo: '',
                    Email: '',
                    Password: '',
                  }
                   
            }  
        }

        handleChange = (event) => {
            event.preventDefault();
            const { name, value } = event.target;
            let errors = this.state.errors;
        
            switch (name) {
              case 'Title': 
                errors.Title = 
                validTitleRegex.test(value)
                    ? ''
                    : 'Invalid Firstname';
                break;
              case 'Surname': 
                errors.Surname = 
                validSurnameRegex.test(value)
                    ? ''
                    : 'Invalid Surname';
                break;
              case 'OtherName': 
                errors.OtherName = 
                validOtherNameRegex.test(value)
                    ? ''
                    : 'Invalid name';
                break;
              case 'PhoneNo': 
                errors.PhoneNo = 
                  value.length < 10
                    ? 'Phone number must contain 10 digits!'
                    : '';
                break;
              case 'Email': 
                errors.Email = 
                  validEmailRegex.test(value)
                    ? ''
                    : 'Email is not valid!';
                break;
              case 'Password': 
                errors.Password = 
                  value.length < 5
                    ? 'Password must be at least 5 characters long!'
                    : '';
                break;
              default:
                break;
            }
        
            this.setState({errors, [name]: value});
          }

          handleSubmit = (event) => {
            event.preventDefault();
            if(validateForm(this.state.errors)) {
              console.info('Valid Form')
            }else{
              console.error('Invalid Form')
            }
          }

        AddUser=()=> {
                 axios.post('https://localhost:44391/AddUserReg',{Title:this.state.Title, Surname:this.state.Surname, OtherName:this.state.OtherName, DOB:this.state.DOB, CountryOfResidence:this.state.CountryOfResidence, Nationality:this.state.Nationality, Email:this.state.Email, PhoneNo:this.state.PhoneNo, Password:this.state.Password })
                 .then(json=>{
                     
                         console.log(json.data.Status);
                         alert('Data added successfully');
                         this.props.history.push('/LoginUser')
                     
                })
            }

            // handleChange= (e) => {
            //     this.setState({[e.target.name]:e.target.value});
            // }

            render(){
                const {errors} = this.state;
                return(
                    <Container className="App">
                    <br></br><br></br><br></br>
                    <Form className="form" onSubmit={this.handleSubmit} noValidate>
                    <Col>
                    <FormGroup row>
                    <Label for="title" sm={2}>Title</Label>
                    <Col sm={4}>
                    <Input type="text" name="Title" onChange={this.handleChange} value={this.state.name} placeholder="Enter name " noValidate required></Input>
                    {errors.Title.length > 0 && 
                <span style={{color:"red"}} className='error'>{errors.Title}</span>}
                    </Col>
                    <Label for="surname" sm={1} >Surname</Label>
                    <Col sm={4}>
                    <Input type="text" name="Surname" onChange={this.handleChange} value={this.state.name} placeholder="Enter surname  " required></Input>
                    {errors.Surname.length > 0 && 
                <span style={{color:"red"}} className='error'>{errors.Surname}</span>}
                    </Col>
                    </FormGroup>

                    

                    <FormGroup row>
                    <Label for="othername" sm={2}>Other Name</Label>
                    <Col sm={4}>
                    <Input type="text" name="OtherName" onChange={this.handleChange} value={this.state.name} placeholder="Enter other name  " required></Input>
                    {errors.OtherName.length > 0 && 
                <span style={{color:"red"}} className='error'>{errors.OtherName}</span>}
                    </Col>
                    <Label for="dob" sm={1} >DOB</Label>
                    <Col sm={4}>
                    <Input type="date" name="DOB" onChange={this.handleChange} value={this.state.name} placeholder="Enter DOB  " required></Input>
                    </Col>
                    </FormGroup>

                    

                    <FormGroup row>
                    <Label for="countryofresidence" sm={2}>Country Of Residence</Label>
                    <Col sm={4}>
                    <Input type="text" name="CountryOfResidence" onChange={this.handleChange} value={this.state.name} placeholder="Enter country of residence  " required></Input>
                    </Col>
                    <Label for="nationality" sm={1} >Nationality</Label>
                    <Col sm={4}>
                    <Input type="text" name="Nationality" onChange={this.handleChange} value={this.state.name} placeholder="Enter nationality  " required></Input>
                    </Col>
                    </FormGroup>

                    

                    <FormGroup row>
                    <Label for="email" sm={2}>Email</Label>
                    <Col sm={9}>
                    <Input type="email" name="Email" onChange={this.handleChange} value={this.state.name} placeholder="Enter email  " noValidate required></Input>
                    {errors.Email.length > 0 && 
                <span style={{color:"red"}} className='error'>{errors.Email}</span>}
                    </Col>
                    </FormGroup>

                    <FormGroup row>
                    <Label for="phoneno" sm={2}>Phone Number</Label>
                    <Col sm={9}>
                    <Input type="number" name="PhoneNo" onChange={this.handleChange} value={this.state.name} placeholder="Enter phone number  " noValidate required></Input>
                    {errors.PhoneNo.length > 0 && 
                <span style={{color:"red"}} className='error'>{errors.PhoneNo}</span>}
                    </Col>
                    </FormGroup>

                    <FormGroup row>
                    <Label for="pwd" sm={2}>Password</Label>
                    <Col sm={9}>
                    <Input type="password" name="Password" onChange={this.handleChange} value={this.state.name} placeholder="Enter password  " noValidate required></Input>
                    {errors.Password.length > 0 && 
                <span style={{color:"red"}} className='error'>{errors.Password}</span>}
                    </Col>
                    </FormGroup>

                    <FormGroup row>
                    <Col sm={1}>
                        <button type="button" onClick={this.AddUser} className="btn btn-success">Register</button>
                    </Col>
                    <Col sm={1}>
                    <Button color="danger">Cancel</Button>{' '}
                    </Col>
                    </FormGroup>
                    <br></br><br></br><br></br><br></br>
                   
                    </Col>
                    </Form>
                    </Container>
                );}
}
