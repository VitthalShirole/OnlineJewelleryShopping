import { useEffect, useState} from "react";
import EmployeeService from './EmployeeService';
import {Link,useHistory} from 'react-router-dom';


const AllCartItem =()=>{

    const getCartItems = () => {
        let id = sessionStorage.getItem("userID");
        console.log(id);
        let token = sessionStorage.getItem("token");
        console.log(token);
        if (sessionStorage.getItem("token")) {
          axios
            .get(USER_API_BASE_URL + id, {
              headers: { Authorization: token },
            })
            .then((response) => {
              console.log(response);
              JSON.stringify(response);
              setProduct(response.data);
              let product = response.data.product;
              sessionStorage.setItem("product");
            });
        } else {
          console.error("unexpected error");
        }
      };
      return (
        <div className="Home">
          <Header />
           
            {
              Product.length==0 && <div className="title" style={{margin:"50px"}}><h4>Your Cart is Empty</h4> <br/>
              <a href="/">
              <Button color="success">Shop Again</Button>
              </a>
              </div>
            }
            
            {Product.length > 0 && <>
            <div>
            <Container>
            <div className="title" style={{margin:"50px"}}><h4>Let's place the order</h4></div>
              <Table striped style={{marginTop:"50px"}}>
                <thead className="thead dark">
                  <tr>
                    {/* <th>#</th> */}
                    <th>Product Name</th>
                    <th>Product Quantity</th>
                    <th>price per item</th>
                    <th>Best Price</th>
                  </tr>
                </thead>
    
                
                  { Product.map((item) => (
                      <tbody>
                        <tr>
                          <td>{item.product.productName}</td>
                          <td>
                            <Button color="primary" size="sm" onClick={()=>reduceItemQty(item.product.id)}>
                              -
                            </Button>
                            &nbsp;&nbsp;{item.quantity}&nbsp;&nbsp;
                            <Button color="primary" size="sm" onClick={()=>increaseItemQty(item.product.id)}>
                              +
                            </Button>
                          </td>
                          <td>{item.product.unitPrice} ₹</td>
                          <td>{item.subtotal} ₹</td>
                          <td>
                            <Button
                              color="danger"
                              onClick={() => removeCartItem(item.product.id)}
                            >
                              {" "}
                              Remove{" "}
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    ))
                      }
              </Table>
              
              
            </Container>
          </div>
          <div>
            <a href="/Address" >
              <Button color="success">Check Out</Button>
            </a>{" "}
            <Button color="primary" onClick={emptyCart}>
              Empty Cart
            </Button>
          </div>
          </>}
          <Footer />
        </div>
    
      );
}
export default AllCartItem;