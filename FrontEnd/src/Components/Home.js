import Login from "./Login";
import {Link,useHistory} from 'react-router-dom';
import logo from './images/main.png';
import logo1 from './images/gold_banner.png';
import Gold from "./Gold";
const Home=()=>{


    return(
      <div>
       <img src={logo1} width="100%" height="500"></img>
      
      <div>
        
      <b> <hr></hr>  </b>
        
        <img src={logo} width="100%" height="400"></img>
      </div>
  

</div>
    )
}

export default Home;