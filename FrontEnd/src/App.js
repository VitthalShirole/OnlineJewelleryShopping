import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Gold from './Components/Gold';
import GRing from './Components/Goldd/Rings';
import GChain from './Components/Goldd/Chains';
import GMangalsutra from './Components/Goldd/Mangalsutra';
import GPendent from './Components/Goldd/Pendants';
import GBangles from  './Components/Goldd/Bangles';
import GBracelet from './Components/Goldd/Bracelet';
import GNecklace from './Components/Goldd/Necklace';

import Silver from './Components/Silver';
import SRing from './Components/Silverr/Rings';
import SChain from './Components/Silverr/Chains';
import SMangalsutra from './Components/Silverr/Mangalsutra';
import SPendent from './Components/Silverr/Pendants';
//import SBangles from  './Components/Silverr/Bangles';
import SBracelet from './Components/Silverr/Bracelet';
import SNecklace from './Components/Silverr/Necklace';



import AddProduct from './Components/AddProduct'
import Manager from './Components/Manager'

import ListOfStaff from './Components/Staff/EmployeeList'
import EmployeeAdd from './Components/Staff/EmployeeAdd'
import EmployeeDetails from './Components/Staff/EmployeeDetails'
import EmployeeEdit from './Components/Staff/EmployeeEdit'
import AddCartItems from './Components/AllCartItems'

import SignUp from'./Components/Signup'
import LogOut from './Components/LogOut'

import logo3 from './Components/new2.JPG';
import PlaceOrders from './Components/Order';


let profile = sessionStorage.getItem("Name");
function App() {
  return (
    <div className="App">
      <div className='mydiv'>
       <nav class="navbar  navbar-expand-lg navbar-custom"  
       >
  <a class="navbar-brand" href="#"><img src={logo3} height={70} width={150}></img>  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav" id="top">
      <li class="nav-item active">
        <a class="nav-link" href="/Home">Home <span class="sr-only">(current)</span></a>
      </li>
      {/* <li class="nav-item active">
        <a class="nav-link" href="/AddProduct">AddProduct <span class="sr-only">(current)</span></a>
      </li> */}
      <li class="nav-item">
        <a class="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-megaphone" viewBox="0 0 16 16">
  <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z"/>
</svg>Features</a>
      </li>
         
    </ul>
       
    <div class="mx-auto">
			<a class="navbar-brand " href="/Login" id="ab">Login</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			  <span class="navbar-toggler-icon"></span>
			</button>
		</div>
     
   
    
    <div class="nav-item">
    <div className='a1'> aaaaaaa </div>
      <a class="nav-link"  href="/Card"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>My Cart</a>
      </div>

      <div class="nav-item">
        <div className='a1'> aaaaaaa </div>
      <a class="nav-link"  href="/Login"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>Login</a>
      </div>
      <div class="nav-item">
      <div className='a1'> aaaaaaa </div>
      <a class="nav-link"  href="/Signup"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>SignUp</a>


      </div>  
      <div class="nav-item">
     <b> Welcome {profile}</b>
      <a class="nav-link"  href="/logout"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>LogOut</a>
      </div> 

     
  </div>
</nav>
<nav class="navbar navbar-expand-lg navbar-light bg-light "
 style={{
  position: "relative"
  // padding: "-2px"
}} >
  <a class="navbar-brand" href="/home">CATEGORIES</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown" >
    <ul class="navbar-nav nav-fill w-100">
      <li class="nav-item active">
        <a class="nav-link" href="/gold">GOLD <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/silver">SILVER</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">DIAMOND</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">PLATINUM</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">BULLION</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Antique</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">1GRAM</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">COIN</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">OTHER</a>
      </li>
      </ul>
      </div> 
</nav>
</div>    
    <Router>
        <Switch>
        <Route path="/" exact component={Home}></Route>
       
        <Route path="/home" component={Home}></Route>
        <Route path="/addProduct" component={AddProduct}></Route>
        <Route path="/addProduct" component={AddProduct}></Route>

        <Route path="/gold" component={Gold}></Route>
        
        <Route path="/1/1" component={GRing}></Route>
        <Route path="/1/2" component={GChain}></Route>
        <Route path="/1/3" component={GMangalsutra}></Route>
        <Route path="/1/4" component={GPendent}></Route>
        <Route path="/1/5" component={GBangles}></Route>
        <Route path="/1/6" component={GBracelet}></Route>
        <Route path="/1/7" component={GNecklace}></Route>

        <Route path="/silver" component={Silver}></Route>

        <Route path="/2/1" component={SRing}></Route>
        <Route path="/2/2" component={SChain}></Route>
        <Route path="/2/3" component={SMangalsutra}></Route>
        <Route path="/2/4" component={SPendent}></Route>
        {/* <Route path="/2/5" component={SBangles}></Route> */}
        <Route path="/2/6" component={SBracelet}></Route>
        <Route path="/2/7" component={SNecklace}></Route>

        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/logout" component={LogOut}></Route>

        <Route path="/manager" component={Manager}></Route>

        <Route path="/list" component={ListOfStaff}></Route>
        <Route path="/addemp" component={EmployeeAdd}></Route>
        <Route path="/edit/:empid" component={EmployeeEdit}></Route>
        <Route path="/view/:empid" component={EmployeeDetails}></Route> 

        <Route path="/card" component={AddCartItems}></Route>
        <Route path="/order" component={PlaceOrders}></Route>
       

        </Switch>
    </Router>


    <p ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z"/>
</svg>Vitthal Jewellers&nbsp;&nbsp;&nbsp;&nbsp;All Rights Reserved </p>


      
     
        <a id="top" href="/Home"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg> <span class="sr-only">(current)</span></a>
      
        <a id="top" href="/Home"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg><span class="sr-only">(current)</span></a>
 
    </div>
  );
}

export default App;
