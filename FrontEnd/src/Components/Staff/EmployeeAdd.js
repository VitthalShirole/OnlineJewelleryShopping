import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import EmployeeService from './EmployeeService';

const EmployeeAdd=()=>{
let [empob,setempob]=useState({staffName:"",contactNo:"", subcategoryId:"",email:"",password:"",city:"",state:"",zip:"",manager:""});
let history=useHistory();
const handleChange=(event)=>{
    const {name,value}=event.target;
    setempob({...empob,[name]:value});
}
const addData=()=>{
    EmployeeService.addEmployee(empob)
    .then((result)=>{
        console.log(result.data);
        history.push("/list");
    })
    .catch(()=>{"error occured in axios"})
}
return(
    <div>
        <form>
        <div className="form-group">
    <label htmlFor="ename">Employee Name</label>
    <input type="text" className="form-control" name="staffName" id="staffName"
     value={empob.staffName}
     onChange={handleChange}
     placeholder="Enter name"/>
  </div>
  <div className="form-group">
    <label htmlFor="sal">ContactNo</label>
    <input type="number" className="form-control" name="contactNo" id="contactNo"
     value={empob.contactNo}
     onChange={handleChange}
     placeholder="Enter ContactNo"/>
  </div>
  <div className="form-group">
    <label htmlFor="sal">SubCategoryId</label>
    <input type="number" className="form-control" name="subcategoryId" id="subcategoryId"
     value={empob.subcategoryId}
     onChange={handleChange}
     placeholder="Enter SubcategoryID"/>
  </div>
  <div className="form-group">
    <label htmlFor="sal">Email</label>
    <input type="email" className="form-control" name="email" id="email"
     value={empob.email}
     onChange={handleChange}
     placeholder="Enter Email"/>
  </div>
  <div className="form-group">
    <label htmlFor="sal">Employee Password</label>
    <input type="password" className="form-control" name="password" id="password"
     value={empob.password}
     onChange={handleChange}
     placeholder="Enter Salary"/>
  </div> <div className="form-group">
    <label htmlFor="sal">City</label>
    <input type="text" className="form-control" name="city" id="city"
     value={empob.city}
     onChange={handleChange}
     placeholder="Enter City"/>
  </div> <div className="form-group">
    <label htmlFor="sal">State </label>
    <input type="text" className="form-control" name="state" id="state"
     value={empob.state}
     onChange={handleChange}
     placeholder="Enter State"/>
  </div> <div className="form-group">
    <label htmlFor="sal">Zip </label>
    <input type="number" className="form-control" name="zip" id="zip"
     value={empob.zip}
     onChange={handleChange}
     placeholder="Enter Zip"/>
  </div> <div className="form-group">
    <label htmlFor="sal">Manager Id </label>
    <input type="number" className="form-control" name="manager" id="manager"
     value={empob.manager}
     onChange={handleChange}
     placeholder="Enter Manager Id"/>
  </div>
  <button type="button" class="btn btn-primary" onClick={addData}>Add Employee</button>
</form>
    </div>
)
}
export default EmployeeAdd;