import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import './Login.css';

class Login extends Component {
    constructor() {
        super();


        this.state = {

            Email: '',

            Password: ''
        }


        this.Password = this.Password.bind(this);

        this.Email = this.Email.bind(this);

        this.login = this.login.bind(this);

    }


    Email(event) {

        this.setState({ Email: event.target.value })

    }

    Password(event) {

        this.setState({ Password: event.target.value })

    }

    login(event) {

        
        debugger;

        fetch('https://localhost:44391/AdminLogin', {

            method: 'post',

            headers: {

                'Accept': 'application/json',

                'Content-Type': 'application/json'

            },

            body: JSON.stringify({

                Email: this.state.Email,

                Password: this.state.Password

            })

        }).then((Response) => Response.json())

            .then((result) => {

                console.log(result);

                if (result.Status =='Invalid')

                    alert('Invalid User');

                else

                    this.props.history.push("./AdminHomepage");

            })

    }


    render() {


        return (
            
          <div className="loginform">
              <br></br><br></br><br></br>
            <div className="app flex-row align-items-center">

                <Container >

                    <Row className="justify-content-center">

                        <Col md="9" lg="7" xl="6">


                            <CardGroup>

                                <Card className="p-2">

                                    <CardBody>

                                        <Form>

                                            <div class="row" className="mb-4 pageheading">

                                                <div class="col-sm-12 btn btn-dark">

                                                    Admin Login Form

                             </div>

                                            </div>

                                            <InputGroup className="mb-4">


                                                <Input type="text" onChange={this.Email} placeholder="Enter Username" />

                                            </InputGroup>

                                            <InputGroup className="mb-4">


                                                <Input type="password" onChange={this.Password} placeholder="Enter Password" />

                                            </InputGroup>

                                            <Button  onClick={this.login} color="success" block>Login</Button>

                                        </Form>

                                    </CardBody>

                                </Card>

                            </CardGroup>

                        </Col>

                    </Row>

                </Container>
                

            </div>
            

  
            </div>
            

        );

    }

}


export default Login;





