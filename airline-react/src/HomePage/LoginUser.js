import React, { useState, useEffect } from 'react'   
import axios from 'axios';  
import { Link } from 'react-router-dom';
import './Login.css';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

function LoginUser(props) {  

    var isHidden=true;
    const [user, setuser] = useState({ Email: '', Password: ''});  
    const apiUrl = "https://localhost:44391/Login";    
    const Login = (e) => {    
            e.preventDefault();    
            const data = { Email:user.Email, Password: user.Password };    
            axios.post(apiUrl, data)    
            .then((result) => {    
                console.log(result.data);   
                const serializedState = JSON.stringify(result.data.UserDetails);  
               var a= localStorage.setItem('myData', serializedState);   
                console.log("A:",a)  
                const user =result.data.UserDetails;  
                console.log(result.data.Message);  
                if (result.data.status == '200')   
                    props.history.push('./UserProfile/'+user.UserID)
                    //props.history.push('./BookTicket')    
                else    
                alert('Invalid User');    
                
            })        
          };    
       
          const onChange = (e) => {    
                e.persist();    
                
                setuser({...user, [e.target.name]: e.target.value});    
              }  
              



    return (    
        <div><br></br><br></br>
            <div class="col-sm-12 btn btn-dark" style={{width:"400px", marginLeft:"450px"}}>

User Login Form

</div><br></br><br></br>
                
                <form className="form3" onSubmit={Login}>
                
      
  <div class="form-group">
    
    <input type="email" name="Email" placeholder="Enter Email" value={user.Email} onChange={onChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
  </div>
  <div class="form-group">
    
    <input type="password" name="Password" placeholder="Enter Password" value={user.Password} onChange={onChange} class="form-control" id="exampleInputPassword1" required/>
  </div>
  <br></br>
  <button type="submit"  style={{width:"400px"}} class="btn btn-success" >Submit</button>
  
  
  <br></br><br></br>
  
</form>
<Link to={'./AdminLogin'} className="adminlink">Click here if you are an admin</Link>
            </div>


    )  
}  
  
export default LoginUser