import { useState,useEffect } from 'react';
import {Link,useHistory} from 'react-router-dom';
import ProductServices from './ProductServices';
import { Table, Container,Form, Row,Col,FormGroup,Label,Input,handleChange, Button} from "reactstrap";
const Manager =()=>{
    let [prodarr,setprodarr] =useState([]);
    let[category,setcategory]=useState();
    useEffect(()=>{
        console.log(sessionStorage.getItem("userId"));
       ProductServices.getProduct(sessionStorage.getItem("userId")).
        then((response)=>{
           console.log(response.data);
           setprodarr(response.data.intlist);
           setcategory(response.data.categoryName);
        })
        .catch((err)=>{console.log("error occured",err)});
   
       },[]);
    const renderList=()=>{
        return prodarr.map((prod)=>{
            return <td>{prod}</td>
        });
    }
    return(

<div>
    <div></div>
<Link to="/list">
         <button type="button" name="btn" id="btn" className="btn btn-success">StaffDetails</button>
</Link>   
 <h1>Category:{category}</h1>
<Table striped style={{marginTop:"30px"}}
           bordered
           hover
           dark
           responsive
           size="Lg"><thead className="thead dark">
        <tr><th>Ring</th><th>Chain</th><th>MangalSutra</th><th>Pendants</th><th>Bangles</th><th>Bracelet</th><th>NeckLace</th><th>Other</th></tr>
        </thead>
        <tbody>
            {renderList()}
        </tbody>
 </Table>
 </div>
    


    )
}

export default Manager;