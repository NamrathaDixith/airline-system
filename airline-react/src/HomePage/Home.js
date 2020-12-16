import React, { Component } from 'react';
import './Home.css';
import { Link, Route, Switch } from 'react-router-dom';

export default class Home extends Component {

    componentDidMount(){
        document.getElementById('home').style.display="block";
        document.getElementById('abt').style.display="block";
            document.getElementById('lin').style.display="block";
            document.getElementById('lout').style.display="none";
            document.getElementById('profile').style.display="none";
            document.getElementById('bookticket').style.display="none";
            document.getElementById('reg').style.display="block";
            document.getElementById('delflight').style.display="none";
  document.getElementById('addflight').style.display="none";
  document.getElementById('booking').style.display="none";
  document.getElementById('cust').style.display="none";
  document.getElementById('fb').style.display="none";
  document.getElementById('purchased').style.display="none";
  document.getElementById('contact').style.display="block";
        
         }

    render() {
        return (
            <div>
                <br></br>
                <img className="img1" src="https://www.rktravel.com/images/flights-banner.png" />
                <br></br><br></br><br></br><br></br>
                <h2 className="heading3">Radisson Airlines</h2><br></br>
                <div className="homedes">
                <div className="row">
                <div className="col">
                <img className="img2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PGgq0f_pJmSR0vYb_8rPkGX7apmHGPmuXA&usqp=CAU" alt="..."/>
                </div>
                <div className="col">
                <h5 style={{textAlign:"justify"}}>Radisson Airline is aimed at bringing the best in air travels to you. Our outstanding records among airlines makes us achieve this. Our staff members are adequate and loyal. We are aimed at giving you the best services.</h5>
                <br></br>
                
                <Link to={"/AboutUs"}  className="btn btn-dark">Read more..</Link>
                </div>
                </div>
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
        )
    }
}
