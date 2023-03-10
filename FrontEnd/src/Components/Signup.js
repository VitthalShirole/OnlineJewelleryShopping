import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios, { Axios } from 'axios';
//import EmployeeService from './EmployeeService';

const USER_API_BASE_URL = "http://localhost:7070";
const Signup =()=>{
    let [cust,setcust]=useState({customerName:"",email:"",password:"",cotactNo:"",city:"",state:"",zip:"" });
    let history=useHistory();
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setcust({...cust,[name]:value});
    }
    const addData=()=>{
        axios.post(USER_API_BASE_URL+"/customer/add",cust)
        .then((result)=>{
            console.log(result.data);
            history.push("/home");
        })
        .catch(()=>{})
    }
    return(
        <div>
        <form>
  <div className="form-group">
    <label htmlFor="customerName">Customer Name</label>
    <input type="text" className="form-control" name="customerName" id="customerName" 
    value={cust.customerName}
    onChange={handleChange}
    placeholder="Enter Name"/>
   
  </div>
  <div className="form-group">
    <label htmlFor="email">Email </label>
    <input type="email" className="form-control" name="email" id="email"
     value={cust.email}
     onChange={handleChange}
     placeholder="Enter Email"/>
  </div>
  <div className="form-group">
    <label htmlFor="sal">Password </label>
    <input type="password" className="form-control" name="password" id="password"
     value={cust.password}
     onChange={handleChange}
     placeholder="Enter password"/>
  </div>
  <div className="form-group">
    <label htmlFor="cotactNo">Contact No </label>
    <input type="text" className="form-control" name="cotactNo" id="cotactNo"
     value={cust.cotactNo}
     onChange={handleChange}
     placeholder="Enter Contact No"/>
  </div>
  <div className="form-group">
    <label htmlFor="city">City </label>
    <input type="text" className="form-control" name="city" id="city"
     value={cust.city}
     onChange={handleChange}
     placeholder="Enter city"/>
  </div>
  <div className="form-group">
    <label htmlFor="state">state </label>
    <input type="text" className="form-control" name="state" id="state"
     value={cust.state}
     onChange={handleChange}
     placeholder="Enter state"/>
  </div>
  <div className="form-group">
    <label htmlFor="zip">Zip </label>
    <input type="number" className="form-control" name="zip" id="zip"
     value={cust.zip}
     onChange={handleChange}
     placeholder="Enter zip"/>
  </div>
  <button type="button" class="btn btn-primary" onClick={addData}>SignUp</button>
</form>
    </div>
)
    



}
export default Signup;