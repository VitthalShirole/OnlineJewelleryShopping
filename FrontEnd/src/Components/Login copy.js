import {Link,useHistory} from 'react-router-dom';
import {useState} from 'react';
import ProductServices from './ProductServices';


const Login =()=>{

    let [loginob , setloginob]= useState({email:"",password:""});
  let history=useHistory();

  const handleChange=(event)=>{
     const {name, value}=event.target;
     setloginob({...loginob,[name]:value});
  }


const passlogin=()=>{
  ProductServices.loginUser(loginob)
  .then((result)=>
   {  
       console.log( result.data.status ==500)
      
      console.log(result.data)
     // sessionStorage.setItem("user",JSON.stringify(result.data.user))
      sessionStorage.setItem("Role",JSON.stringify(result.data.athentication.role));
      sessionStorage.setItem("userId",JSON.stringify(result.data.id))
      console.log(sessionStorage.getItem("Role"))
      console.log(sessionStorage.getItem("userId"))
      let Us=sessionStorage.getItem("Role");
     // let Ur=JSON.stringify(result.data.)
      if(Us.includes("Manager")){
        history.push("/manager")
      }

      else if(Us.includes("Customer")){
        history.push("/home")
      }
    
        
       
      

      
   }).catch((err)=>{
    alert("Incorrect email or pass. If you are new Customer please signup")
   
})
  
  
  }


    
  return(
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" name="email"
    value={loginob.email}
    onChange={handleChange}/> 
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="password" name="password"
     value={loginob.password}
     onChange={handleChange}/>
  </div>
  
  <button type="button" class="btn btn-primary" onClick={passlogin}>Submit</button>
</form>
  )
    }

    export default Login;