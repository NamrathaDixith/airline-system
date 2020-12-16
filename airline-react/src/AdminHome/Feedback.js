import React, { Component } from 'react';
import axios from 'axios';
import FeedbackTable from './FeedbackTable';
import '../HomePage/Register.css';
import {Link} from 'react-router-dom';

export default class Feedback extends Component {

    constructor(props)
{
super(props);
this.state={business:[]};
}    

componentDidMount(){
debugger;

axios.get('https://localhost:44391/Api/UserMessage').then(response=>{
this.setState({business:response.data});
debugger;
})
.catch(function(error){
console.log(error);
})
}
tabRow(){
return this.state.business.map(function(object,i){
    console.log(object);
    console.log(i);

return <FeedbackTable obj={object} key={i} />
});
}
render(){
return(
<div className="row">
<br></br><br></br>
<div className="col">
    
    <table className="table table-striped" style={{marginTop:10}}>
<thead>
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone No</th>
        <th>Message</th>
        
        
        </tr>

    
</thead>


<tbody>{this.tabRow()}</tbody>
    </table>
    </div>
    
</div>

);
}
}
