
import { useState } from "react";
import { useHistory } from "react-router-dom";
import ProductServices from "../ProductServices";
import { useEffect} from "react";
import './Rings.css'
import axios from 'axios';
import {toast} from 'react-toastify';
//import { Navigate, useNavigate } from "react-router-dom";

import {
    Card,
    CardBody,
    //CardTitle,
    CardSubtitle,
    CardText,
    //CardFooter,
    Button,
    CardImg,
    //Container,
  } from "reactstrap";

  const USER_API_BASE_URL = "http://localhost:7070/cart/add";

const Gold =()=>{

       let [prodarr, setprodarr]=useState([]);
       let [flag, setflag]=useState(false);
       let history=useHistory();

       useEffect( ()=> {
        ProductServices.getProducts(2,6).
        then((response)=>{
            console.log("in useeffect of prodlist");
            console.log(response.data);
            setprodarr(response.data);
        })
       .catch((err)=> {console.log("error occured")})
    },[]);
   // const navigate = useNavigate();
    let userRole = JSON.parse(sessionStorage.getItem("Role"));
    const addToCartHandler = (prod) => {
      if (userRole === "Mnager") {
        history.push("/manager");
      } 
      if (userRole === "Staff") {
        history.push("/staff");
      }

    //   if (sessionStorage.getItem("token")) {
    //     console.log("user is logged in");
    //     if(userRole==='ROLE_ADMIN'){
    //       navigate('/Admin')
    //     }
    if(userRole === "Customer"){
        let id=sessionStorage.getItem("userId")
        let addTOCart = {
            productId: prod,
            customerId: id,
          quantity: 1,
        };
        console.log(addTOCart);
       // toast.success("Product added successfully");
        alert("Product added successfully")
        axios.post(USER_API_BASE_URL, addTOCart).then((res) => {
          console.log(res.data);
        });
      }
       else {
        console.log("user is not logged in");
        alert("Kindly Login First");
       // toast.warning("Kindly Login First");
        history.push("/Login");
      }
    };
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
            return <div style={{ backgroundColor: "transparent" }}>
            <Card
            //   onClick={() => sendId(prod.id)}
              style={{
                backgroundColor: "white",
                color: "light",
                width: "20rem",
                height: "25rem",
                margin: "-5px",
                // padding: "-2px"
              }}

              className="cardss"
            >
              <CardSubtitle className="title">
                <a href="./ProductDetails"></a> {prod.productName}
              </CardSubtitle>
              <img src={`data:image/jpeg;base64,${prod.image}`}style={ {width:"80%", height:"70%"}}/>
              <CardText className="body">{prod.productname} </CardText>
              <CardText className="body">Weight:{prod.weight}gms</CardText>
              <CardText className="body">₹ {prod.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{(sessionStorage.getItem("token") && sessionStorage.getItem("userRole").includes("ADMIN")) 
             ?
             <></>
            
            :<Button
            style={{ margin: "5px" }}
            color="primary"
            key={prod}
             onClick={()=>addToCartHandler(prod.id)}
          >
            Add to Cart
          </Button>
            }</CardText>
            </Card>
             
             
            <br></br>
             
          </div>
        //     return <div >
            
        //     <img src="https://i.imgur.com/KFojDGa.jpg" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2"/>
        //       <h5 class="card-title">Special title treatment</h5>
        //       <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        //       <a href="#" class="btn btn-primary">Go somewhere</a>
        //   </div>
          
        });
    }
    return(
        <div className="myclass" >
       
       
            {renderList()}
       
        </div>
    )
    
    }
    export default Gold;

{/* <tr key={prod.id}><td>{prod.productname}</td><td><img src={`data:image/jpeg;base64,${prod.image}`} /></td><td>{prod.weight}</td><td>{prod.price}</td>
            </tr> */}

//<img src={`data:image/jpeg;base64,${prod.image}`}style={ {width:"30%", height:"30%"}}/>

//<img src="https://i.imgur.com/KFojDGa.jpg" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2"/>

{/* <div class="container py-5">
            <div class="row text-center text-white mb-5">
                <div class="col-lg-7 mx-auto">
                    <h1 class="display-4">Product List</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 mx-auto">
                  
                    <ul class="list-group shadow">
                  
                        <li class="list-group-item">
                           
                            <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                                <div class="media-body order-2 order-lg-1">
                                    <h5 class="mt-0 font-weight-bold mb-2">Apple iPhone XR (Red, 128 GB)</h5>
                                    <p class="font-italic text-muted mb-0 small">128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor</p>
                                    <div class="d-flex align-items-center justify-content-between mt-1">
                                        <h6 class="font-weight-bold my-2">₹64,999</h6>
                                       
                                    </div>
                                </div><img src={`data:image/jpeg;base64,${prod.image}`}style={ {width:"30%", height:"30%"}}/>
                            </div> 
                        </li> 
                
                    </ul> 
                </div>
            </div>
        </div> */}







