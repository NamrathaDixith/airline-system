import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutUs from './HomePage/AboutUs';
import ContactUs from './HomePage/ContactUs';
import Home from './HomePage/Home';
import FlightSchedule from './HomePage/FlightSchedule';
import Register from './HomePage/Register';
import AdminHomepage from './AdminHome/AdminHomepage';
import AdminLogin from './HomePage/AdminLogin';
import AddFlight from './AdminHome/AddFlight';
import ViewBooking from './AdminHome/ViewBooking';
import BookTicket from './UserHome/BookTicket';
import ViewCustomers from './AdminHome/ViewCustomers';
import Feedback from './AdminHome/Feedback';
import UserProfile from './UserHome/UserProfile';
import LoginUser from './HomePage/LoginUser';
import PurchasedTicket from './UserHome/PurchasedTicket';

var getObject=localStorage.getItem('myData');
var x=JSON.parse(getObject).UserID;
console.log(x);


function App() {
  return (
    <Router>
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <h1 className="heading1">Radisson</h1>&nbsp;&nbsp;
  <h1 className="heading2">Airlines</h1>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to={'./Home'} class="nav-link" style={{display:"block"}} id="home" >Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link to={'./AboutUs'} class="nav-link" style={{display:"block"}} id="abt" >About Us</Link>
      </li>
      <li class="nav-item">
        <Link to={'./ContactUs'} class="nav-link" id="contact" >Contact Us</Link>
      </li>
      <li class="nav-item">
        <Link to={'./FlightSchedule'} class="nav-link" >Flight Schedule</Link>
      </li>
      <li class="nav-item">
        <Link to={'./LoginUser'} class="nav-link" id="lin">Login</Link>
      </li>
      <li class="nav-item">
        <Link to={'./Register'} class="nav-link" id="reg">Register</Link>
      </li>
      <li class="nav-item">
        <Link to={'./UserProfile/'+x} class="nav-link" style={{display:"none"}} id="profile">My Profile</Link>
      </li>
      <li class="nav-item">
        <Link to={'./BookTicket'} class="nav-link" style={{display:"none"}} id="bookticket">Book Ticket</Link>
      </li>
      <li class="nav-item">
        <Link to={'./PurchasedTicket'} class="nav-link" style={{display:"none"}} id="purchased">Purchased Tickets</Link>
      </li>
      <li class="nav-item">
        <Link to={'./AdminHomepage'} class="nav-link" style={{display:"none"}} id="delflight">Cancel Flight</Link>
      </li>
      <li class="nav-item">
        <Link to={'./AddFlight'} class="nav-link" style={{display:"none"}} id="addflight">Add Flight</Link>
      </li>
      <li class="nav-item">
        <Link to={'./ViewBooking'} class="nav-link" style={{display:"none"}} id="booking">View Booking</Link>
      </li>
      <li class="nav-item">
        <Link to={'./ViewCustomers'} class="nav-link" style={{display:"none"}} id="cust">Customers</Link>
      </li>
      <li class="nav-item">
        <Link to={'./Feedback'} class="nav-link" style={{display:"none"}} id="fb">Feedback</Link>
      </li>
      <li class="nav-item">
        <Link to={'./Home'} class="nav-link" style={{display:"none"}} id="lout">Logout</Link>
      </li>
      
    </ul>
    
  </div>

</nav>



      
<nav class="navbar fixed-bottom navbar-dark bg-dark">
  <p className="navfooter">Copyright@2020 Rwenzori Airline. All rights reserved</p>
</nav>

<Switch>

  <Route exact path='/Home' component={Home}></Route>
  <Route exact path='/AboutUs' component={AboutUs}></Route>
  <Route exact path='/ContactUs' component={ContactUs}></Route>
  <Route exact path='/FlightSchedule' component={FlightSchedule}></Route>
  <Route exact path='/LoginUser' component={LoginUser}></Route>
  <Route exact path='/Register' component={Register}></Route>
  <Route exact path='/AdminHomepage' component={AdminHomepage}></Route>
  <Route exact path='/AdminLogin' component={AdminLogin}></Route>
  <Route exact path='/AddFlight' component={AddFlight}></Route>
  <Route exact path='/ViewBooking' component={ViewBooking}></Route>
  <Route exact path='/BookTicket' component={BookTicket}></Route>
  <Route exact path='/ViewCustomers' component={ViewCustomers}></Route>
  <Route exact path='/Feedback' component={Feedback}></Route>
  <Route exact path='/UserProfile/:id' component={UserProfile}></Route>
  <Route exact path='/PurchasedTicket' component={PurchasedTicket}></Route>
</Switch>
    </div>
    </Router>
  );
}

export default App;
