

import axios from "axios";
import React, { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import { Table, Container,Form, Row,Col,FormGroup,Label,Input,handleChange, Button} from "reactstrap";
//import Footer from "./Footer";
//import Header from "./Header";
//import ProductDetails from "./ProductDetails";

const USER_API_BASE_URL = "http://localhost:7070/order/";
//const GET_INVOICE=  "http://localhost:8080/medi/report/invoice/";
const PlaceOrders=()=>{

  //let navigate=useNavigate();
  useEffect(()=>{
   
    getOrdersById();
   },[]);
   let[orderNumber,setOrderNumber]=useState(0);
    const [Order,setOrder]=useState([]);
    let [Count,setCount]=useState(0);


    // const getInvoice=(id)=>{

    //       axios.get(GET_INVOICE+id).then(
    //         (response)=>{
    //           console.log(response.data);
    //           navigate('/ViewOrders');
    //         },
    //       (error)=>{
    //         console.log(error)
    //       }
    //       )
    //       }
    


    const productDetails=(id)=>{
        console.log(id);
        //  let id1=JSON.stringify(id)
     // navigate('/OrderDetails/'+id)
      
    }

    
    let id=sessionStorage.getItem("userId")
    let name =sessionStorage.getItem("Name")
    //let toatalAmount = sessionStorage.getItem("TotalAmount")
    //let token=sessionStorage.getItem("token")
    const getOrdersById=()=>{
      
        axios.post(USER_API_BASE_URL + id).
        then((response)=>{
                    console.log(response);
                    JSON.stringify(response);
                    setOrder(response.data);
                    alert("Order Place Successfully")

                   // Order.map((total)=>(total))
                   sessionStorage.setItem("total",response.data.totalAmountl);
              // var   total= sessionStorage.getItem("totalAmountl")
                },
            (error)=>{
                console.log(error);
            }
        )
      
          }  
    return(
        <div className="Home" >
            
            <div className="title" style={{margin:"20px"}}> Your Order List 
                       
                </div>
            {Order.length > 0 && <>
        <div>
        <Container>
        <p> <b>Customer Name : { name }</b> </p>
          <Table striped style={{marginTop:"30px"}}
           bordered
           hover
           dark
           responsive
           size="Lg">
            <thead className="thead dark">
              <tr>
                
                {/* <th>#</th> */}
                <th>Sr.no</th>
                <th>Order ID</th>
                <th>Order Date</th>
                <th>Order Status</th>
                <th>Dilevery Date</th>
                <th>Total Amount</th>
                {/* <th>Details</th>
                <th>Invoice</th> */}
                
              </tr>
            </thead>

            
              { Order.map((item) => (
                  <tbody>
                    <tr>
                      <td >{++orderNumber}</td>
                      <td>
                      {item.orderid}
                      </td>
                      <td>
                      {item.productName}
                      </td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                      <td>
                      {item.price * item.quantity} ₹
                      </td>
                      
                   
                    </tr>
                   
                  </tbody>
                                                          
                ))
                  }
          </Table>
         
          <Table striped style={{marginTop:"30px"}}
           bordered
           hover
           dark
           responsive
           size="Lg">
            <thead className="thead dark">
             
                
                {/* <th>#</th> */}
                <th>Total Amount</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <td>{Order.reduce((acc, item) => {return acc + item.price;}, 0)} ₹</td>
                
             
                
             
            </thead>

            
             
                                             
                
                 
          </Table>
        </Container>
        
      </div>
      
      </>}
    
        </div>

    )
}
export default PlaceOrders;

//    {/* <td>
//                         <Button color="success" onClick={()=>getInvoice(item.id)}> Invoice </Button>
//                       </td> */}
{/* <td>
                        <Button color="primary" onClick={()=>productDetails(item.id)}> Details</Button>
                      </td> */}