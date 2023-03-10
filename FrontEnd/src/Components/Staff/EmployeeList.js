import { useEffect, useState} from "react";
import EmployeeService from './EmployeeService';
import {Link,useHistory} from 'react-router-dom';
import { Table, Container,Form, Row,Col,FormGroup,Label,Input,handleChange, Button} from "reactstrap";
import  "./EmployeeList.css"
const EmployeeList=()=>{
    let [emparr,setemparr] =useState([]);
    let [flag,setflag]=useState(false);
    let history=useHistory();
    //initialization data
    let Id = sessionStorage.getItem("userId")
    useEffect(()=>{
     EmployeeService.getEmployees(Id).
     then((response)=>{
        console.log("in useffect of emplist initialization");
        console.log(response.data);
        setemparr(response.data);
     })
     .catch((err)=>{console.log("error occured",err)});

    },[]);
    useEffect(()=>{
        EmployeeService.getEmployees(sessionStorage.getItem("userId")).
        then((response)=>{
           console.log("in useffect of emplist initialization");
           console.log(response.data);
           setemparr(response.data);
        })
        .catch((err)=>{console.log("error occured",err)});
   
       },[flag]); 
    const deleteData=(id)=>{
        EmployeeService.deleteEmployee(id)
        .then((result)=>{
            console.log(result.data);
            history.push("/list");
           setflag(true);
        })
        .catch((err)=>{
            console.log("error occured",err);
        })

    }
    const renderList=()=>{
        return emparr.map((emp)=>{
            return <tr key={emp.id}><td>{emp.id}</td><td>{emp.staffName}</td><td>{emp.contactNo}</td><td>{emp.address.city}</td><td>{emp.address.state}
            </td><td>{emp.address.zip}</td><td>{emp.athentication.mailId}</td><td>{emp.athentication.role}</td>
            <td>
                <button type="button" className="btn btn-danger" name='btn' id="delete" onClick={()=>deleteData(emp.id)}>Delete</button>
                &nbsp;&nbsp;&nbsp;
                <Link to={{pathname:`/edit/${emp.id}`,state:{employee:emp}}}>
                     <button type="button" className="btn btn-primary" name='btn' id="edit">Edit</button>
                </Link>
               
            </td></tr>
        });
    }
    return(
        <div>
            <div className="bdiv">
        <Link to="/addemp">
            <button type="button" name="btn" id="btn" className="btn btn-primary">Add Employee</button>

        </Link>
        <Link to="/manager">
            <button type="button" name="btn" id="btn" className="btn btn-primary">Home Page</button>

        </Link>
        </div>
        <Table striped style={{marginTop:"30px"}}
           bordered
           hover
           dark
           responsive
           size="Lg"><thead className="thead dark">
        <tr><th>Staff ID</th><th>Name</th><th>Contact No</th><th>City</th><th>State</th><th>Zip</th><th>MailId</th><th>Role</th></tr>
        </thead>
        <tbody>
            {renderList()}
        </tbody>
        </Table>
        </div>
    )
}

export default EmployeeList;