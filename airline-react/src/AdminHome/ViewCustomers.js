import React,{Component} from 'react';
import axios from 'axios';
import CustomersTable from './CustomersTable';
import {Link} from 'react-router-dom';

export default class ViewCustomers extends Component{
constructor(props)
{
super(props);
this.state={business:[]};
}    
componentDidMount(){
debugger;
axios.get('https://localhost:44391/Api/RegisterUser').then(response=>{
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

return <CustomersTable obj={object} key={i} />
});
}
render(){
return(
<div className="row">
    
    
    <table className="table table-striped" style={{width:"80%", marginTop:"50px", marginLeft:"150px"}}>
<thead>
    <tr>
        <th>Title</th>
        <th>Surname</th>
        <th>Other name</th>
        <th>DOB</th>
        <th>Residence</th>
        <th>Nationality</th>
        <th>Email</th>
        <th>Phone No</th>
        
        </tr>

    
</thead>


<tbody>{this.tabRow()}</tbody>
    </table>
    
    
</div>

);
}
}