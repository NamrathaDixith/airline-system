import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css';
import {Container,Col,Form,Row,FormGroup,Label,Input,Button} from 'reactstrap';

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validNameRegex = RegExp(/^[A-Z]*[a-z]*$/);
  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

export default class ContactUs extends Component {

    

    constructor(props){
        super(props)
            this.state={
                Name:null, 
                Email:null,
                PhoneNo:null,
                Msg:null,
                errors: {
                    Name: '',
                    PhoneNo: '',
                    Email: ''
                  }
                   
            }  
        }

        handleChange = (event) => {
            event.preventDefault();
            const { name, value } = event.target;
            let errors = this.state.errors;
        
            switch (name) {
              case 'Name': 
                errors.Name = 
                  validNameRegex.test(value)
                    ? ''
                    : 'Invalid name!';
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

        AddMessage=()=> {
                 axios.post('https://localhost:44391/Api/UserMessage',{Name:this.state.Name, Email:this.state.Email, PhoneNo:this.state.PhoneNo, Msg:this.state.Msg })
                 .then(json=>{
                     
                         console.log(json.data.Status);
                         alert('Data added successfully');
                         
                })
            }

            // handleChange= (e) => {
            //     this.setState({[e.target.name]:e.target.value});
            // }

    render() {
        const {errors} = this.state;
        return (
            <div>
            <div className="googlemap">
            {/* <p>{this.state.message}</p> */}
                <h2>Contact us</h2><br></br>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.4815785473943!2d77.08941921430755!3d13.320292210736186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02ea2e47be715%3A0xd11867fcac2dd566!2sSri%20Siddhartha%20Institute%20Of%20Technology!5e0!3m2!1sen!2snp!4v1607426207378!5m2!1sen!2snp" 
                className="contactdetails" ></iframe><br></br><br></br><br></br>
                <h3>Head office:</h3>
                <h6>17, MG Road, Bangalore</h6>
                <h6>Karnataka, India</h6>
                <br /><br />
                <h6 className="phoneno">Telephone No: 9845265072,&nbsp;&nbsp; 9811151874</h6>
                <br />
                <p><a href="mailto:someone@radissonairlines.com">Email: customer@radisson.com</a></p>
            </div>
          
            <div className="flightform"><br></br>
            <h3>Send Us A Message</h3>
            <Form className="form" onSubmit={this.handleSubmit} noValidate>
            <br></br><label>Name:</label><br />
            <div>
            <input type="text" name="Name" onChange={this.handleChange} value={this.state.name} placeholder="Enter your Name" required/><br />
            {errors.Name.length > 0 && 
                <span style={{color:"red", fontSize:"15px"}} className='error'>{errors.Name}</span>}</div>
            <br></br><label>Email:</label><br />
            <div>
            <input type="email" name="Email" onChange={this.handleChange} value={this.state.name} placeholder="Enter your Email" noValidate required/><br />
            {errors.Email.length > 0 && 
                <span style={{color:"red", fontSize:"15px"}} className='error'>{errors.Email}</span>}
                </div>
            <br></br><label>Phone No:</label><br />
            <div>
            <input type="number" name="PhoneNo" onChange={this.handleChange} value={this.state.name} placeholder="Phone No" noValidate required/><br />
            {errors.PhoneNo.length > 0 && 
                <span style={{color:"red", fontSize:"15px"}} className='error'>{errors.PhoneNo}</span>}
                </div>
            <br></br><label>Message for us:</label><br />
            <input type="text" name="Msg" onChange={this.handleChange} value={this.state.name} placeholder="Enter your message" required/><br /><br />
            <button onClick={this.AddMessage} type="submit" className="btn btn-info">Submit</button>
            </Form>
            </div>
            
            
            </div>
        )
    }
}
