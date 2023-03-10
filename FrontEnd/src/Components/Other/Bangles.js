
import { useState } from "react";
import { useHistory } from "react-router-dom";
import ProductServices from "../ProductServices";
import { useEffect} from "react";

const Gold =()=>{

       let [prodarr, setprodarr]=useState([]);
       let [flag, setflag]=useState(false);
       let history=useHistory();

       useEffect( ()=> {
        ProductServices.getProducts(7,5).
        then((response)=>{
            console.log("in useeffect of prodlist");
            console.log(response.data);
            setprodarr(response.data);
        })
       .catch((err)=> {console.log("error occured")})
    },[]);

    useEffect( ()=> {
        ProductServices.getProducts().
        then((response)=>{
            console.log("in useeffect of prodlist");
            console.log(response.data);
            setprodarr(response.data);
        })
       .catch((err)=> {console.log("error occured")})
    },[flag]);

    const renderList=()=>{
        return prodarr.map((prod)=>{
            return <tr key={prod.id}><td>{prod.productname}</td><td><img src={`data:image/jpeg;base64,${prod.image}`} /></td><td>{prod.weight}</td><td>{prod.price}</td>
            </tr>
        });
    }
    return(
        <div>
       
        <table border="2"><thead>
        <tr><th>Product ID</th><th>ProductName</th><th>Image</th><th>Weight</th></tr>
        </thead>
        <tbody>
            {renderList()}
        </tbody>
        </table>
        </div>
    )
    
    }
    export default Gold;







