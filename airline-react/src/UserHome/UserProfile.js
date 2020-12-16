import React, { useState, useEffect } from 'react' ;
import { Link, Route, Switch } from 'react-router-dom'; 
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, Label, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
function UserProfile(props) {  
        const [user, setuser]= useState({UserID:'',Title: '', Surname: '', DOB: '',Nationality:'',CountryOfResidence:'',Email:'',PhoneNo:''});
        console.log(props.match.params.id);  
        const Url = "https://localhost:44391/Api/RegisterUser/GetUserById?id=" + props.match.params.id;  
        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setuser(result.data);  
          };     
          GetData();  
        }, []);  
        const UpdateUser = (e) => {  
          e.preventDefault();  
          const data = {UserID:props.match.params.id, Title:user.Title, Surname: user.Surname, Email: user.Email,Nationality:user.Nationality,CountryOfResidence:user.CountryOfResidence,PhoneNo:user.PhoneNo};  
         console.log(data);
          axios.post('https://localhost:44391/EditUser', data)  
            .then((result) => {  
                console.log(result.data);
              props.history.push('/BookTicket')  
            }) 
        }    
        const onChange = (e) => {  
          e.persist();  
          setuser({...user, [e.target.name]: e.target.value});  
        }  


        return (  
                <div className="app flex-row align-items-center">  <br></br><br></br><br></br>
                <Container>  
                  <Row className="justify-content-center">  
                    <Col md="12" lg="10" xl="8">  
                      <Card className="mx-4">  
                        <CardBody className="p-4">  
                          <Form onSubmit={UpdateUser}>  
                            <h3 style={{paddingLeft:"250px"}}>My Profile </h3> <br></br> 

                            <InputGroup className="mb-3">  
                            <Label sm={3}>Customer ID</Label>
                              <Input type="text" name="UserID" id="FName" placeholder="Id" value={user.UserID} onChange={ onChange } readOnly />  
                            </InputGroup>                    
                            <InputGroup className="mb-3">  
                            <Label sm={3}>Firstname</Label>
                              <Input type="text" name="Title" id="FName" placeholder="Title" value={user.Title} onChange={ onChange }  />  
                            </InputGroup>  
                             <InputGroup className="mb-3">  
                             <Label sm={3}>Surname</Label>
                             <Input type="text" name="Surname" id="lName" placeholder="Surname" value={user.Surname} onChange={ onChange }  />
                            </InputGroup>  
                            <InputGroup className="mb-3">  
                            <Label sm={3}>Email</Label>
                              <Input type="email" placeholder="Email" name="Email" id="Email"  value={user.Email} onChange={ onChange }  />  
                            </InputGroup>       

                             <InputGroup className="mb-3"> 
                             <Label sm={3}>Nationality</Label> 
                             <Input type="text" name="Nationality" id="lName" placeholder="Nationality" value={user.Nationality} onChange={ onChange }  />  
                            </InputGroup>  
                            <InputGroup className="mb-3">  
                            <Label sm={3}>Country Of Residence</Label>
                              <Input type="text" placeholder="Country of Residence" name="CountryOfResidence" id="Country_of_Residence"  value={user.CountryOfResidence} onChange={ onChange }  />  
                            </InputGroup>       

                            <InputGroup className="mb-3">  
                            <Label sm={3}>Phone Number</Label>
                             <Input type="number" name="PhoneNo" id="Phone_Number" placeholder="Phone Number" value={user.PhoneNo} onChange={ onChange }  />  
                            </InputGroup>        
                            
                                                     
                      <CardFooter className="p-4">  
                          <Row>  
                              
                            <Col  sm="0">  
                              <Link to={'/BookTicket'}Button type="submit" className="btn btn-info" ><span>Next</span></Link>  
                            </Col>  
                            {/* <Col xs="8" sm="0">  
                              <Link to={'/BookTicket'} className="btn btn-info" >Back</Link>  
                            </Col>   */}
                          </Row>  
                        </CardFooter>  
                          </Form>  
                        </CardBody>                 
                      </Card>  
                    </Col>  
                  </Row>  
                </Container>  
                <br></br><br></br><br></br><br></br>
              </div>  
        )  
}  
  
export default UserProfile