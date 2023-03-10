import image1 from './images/bangle.png'
import image2 from './images/Rings.png'
import image3 from './images/chain.jpg'
import image4 from './images/pendent.jpg'
import image5 from './images/mangalsutra.png'
import image6 from './images/gold-necklace.jpg'
import image7 from './images/Bracelet.jpg'
import  './Gold.css'
const Gold =()=>{
    return(

<div>
    
    <div className="flexcontainer1">
        
        <div>
        <a href="/1/1"> <img src={image2 }  width={1000} height={300} ></img><div className='mydiv'>Rings</div></a>
        </div>
        <hr></hr>
        <div>
        <a href="/1/2"><img src={image3 }  width={1000} height={300} ></img><div className='mydiv'>Chains</div></a>
        </div>
        <hr></hr>
        <div>
        <a href="/1/3"> <img src={image5 }  width={1000} height={300} ></img><div className='mydiv'>Mangalsutra</div></a>
        </div>
        <hr></hr>
        <div>
        <a href="/1/4"><img src={image4 }  width={1000} height={300} ></img><div className='mydiv'>Pendents</div></a>
        </div>
        <hr></hr>
        <div>
        <a href="/1/5"><img src={image1} height={300} width={1000}   ></img><div className='mydiv'>Bangles</div></a>
        </div>
        <hr></hr>
        <div>
        <a href="/1/6"> <img src={image7}  width={1000} height={300} ></img><div className='mydiv'>Bracelet</div></a>
        </div>
        <hr></hr>
        <div>
        <a href="/1/7"> <img src={image6 }  width={1000} height={300} ></img><div className='mydiv'>Necklace</div></a>
        </div>
        <hr></hr>
       
    </div>
    
</div>

    )
}

export default Gold;