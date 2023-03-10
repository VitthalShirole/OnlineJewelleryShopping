import { useEffect,useState } from "react";
import { useLocation ,useHistory} from "react-router-dom";
import EmployeeService from "./EmployeeService";
const EmployeeEdit=()=>{
    let [empob,setempob]=useState({staffName:"",contactNo:"", subcategoryId:"",email:"",password:"",city:"",state:"",zip:"",manager:""});
    let state=useLocation().state;
    let history=useHistory();

    useEffect(()=>{
        setempob({...state.employee})

    },[])
    const updateData=()=>{
        EmployeeService.updateemeployee(empob)
        .then((result)=>{
            console.log(result.data);
            history.push("/list");
        })
        .catch(()=>{})
    }
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setempob({...empob,[name]:value});
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
    <label htmlFor="sal">Employee ContactNo</label>
    <input type="text" className="form-control" name="contactNo" id="contactNo"
     value={empob.contactNo}
     onChange={handleChange}
     placeholder="Enter Salary"/>
  </div>
  <div className="form-group">
    <label htmlFor="sal">SubCategoryId</label>
    <input type="text" className="form-control" name="subcategoryId" id="subcategoryId"
     value={empob.subcategoryId}
     onChange={handleChange}
     />
  </div>
  <div className="form-group">
    <label htmlFor="sal">Email</label>
    <input type="text" className="form-control" name="email" id="email"
     value={empob.email}
     onChange={handleChange}
     />
  </div>
  <div className="form-group">
    <label htmlFor="sal">Password</label>
    <input type="text" className="form-control" name="password" id="password"
     value={empob.password}
     onChange={handleChange}
     />
  </div> <div className="form-group">
    <label htmlFor="sal">City</label>
    <input type="text" className="form-control" name="city" id="city"
     value={empob.city}
     onChange={handleChange}
    />
  </div> <div className="form-group">
    <label htmlFor="sal">State</label>
    <input type="text" className="form-control" name="state" id="state"
     value={empob.state}
     onChange={handleChange}
     />
  </div> <div className="form-group">
    <label htmlFor="sal">ZipCode</label>
    <input type="text" className="form-control" name="zip" id="zip"
     value={empob.zip}
     onChange={handleChange}
    />
  </div> <div className="form-group">
    <label htmlFor="sal">ManagerId</label>
    <input type="manager" className="form-control" name="manager" id="manager"
     value={empob.manager}
     onChange={handleChange}
    />
  </div>
  <button type="button" class="btn btn-primary" onClick={updateData}>update Employee</button>
</form>
        </div>
        
    )
}

export default EmployeeEdit;