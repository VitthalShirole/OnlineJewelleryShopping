import {Link,useHistory} from 'react-router-dom';
import {useState} from 'react';
import ProductServices from './ProductServices';



const AddProduct =()=>{

    

     let [prodob , setprodob]= useState({id:"",productname:"",category_Id:"",subCategory_Id:"",weight:"",price:"",imageurl:""});
     let history=useHistory();
     const handleChange=(event)=>{
        const {name, value}=event.target;
        setprodob({...prodob,[name]:value});
     }
    const addData=()=>{
        ProductServices.addProduct(prodob)
        .then((result)=>
         {
            console.log(result.data);
            
         }).catch(()=>{})

        
        }

        const upload = (e) => {

          const formData = new FormData();
          formData.append('imgFile', e);
  
          // setImgPreview(JSON.stringify(e))
          ProductServices.changeProfile(formData, prodob.id)
              .then((response) => {
                  console.log("Profile Picture Udated Success", "Profile Picture Udated successfully", "success");
              })
              .catch()
      }

    return(
      
<div>
 <form class="form-horizontal">
<fieldset>

<legend>PRODUCTS</legend> 



<div align="left"class="form-group">
  <label   class="col-md-4 control-label" for="id">PRODUCT ID</label>  
  <div class="col-md-4">
  <input id="id" name="id" placeholder="PRODUCT ID" class="form-control input-md" 
  required="" type="text"
  value={prodob.id}
  onChange={handleChange}/>
    
  </div>
</div>
 
 <div align="left"class="form-group">
  <label   class="col-md-4 control-label" for="productname">PRODUCT NAME</label>  
  <div class="col-md-4">
  <input id="productname" name="productname" placeholder="PRODUCT NAME" class="form-control input-md" 
  required="" type="text"
  value={prodob.productname}
  onChange={handleChange}/>
    
  </div>
</div>  




<div align="left" class="form-group">
  <label class="col-md-4 control-label" for="category_Id">PRODUCT CATEGORY</label>
  <div class="col-md-4">
    <select onChange={handleChange} id="category_Id" name="category_Id" class="form-control">
    <option value="null">---Select Categorie--- </option>
    <option value="1">Gold</option>
  <option value="2">Silver</option>
  <option value="3">Platinum</option>
  <option value="4">Diamond</option>
  <option value="5">Bullion</option>
  <option value="6">Antique</option>
  <option value="7">1Gram</option>
  <option value="8">Other</option>
    </select>
  </div>
</div>

<div align="left" class="form-group">
  <label class="col-md-4 control-label" for="subCategory_Id">PRODUCT SUB CATEGORY</label>
  <div class="col-md-4">
    <select  onChange={handleChange} id="subCategory_Id" name="subCategory_Id" class="form-control">
    <option value="null">---Select Sub Categorie--- </option>
   
  <option value="1">Ring</option>
  <option value="2">Chain</option>
  <option value="3">Mangalsutra</option>
  <option value="4">Pendant</option>
  <option value="5">Bangles</option>
  <option value="6">Bracelet</option>
  <option value="7">Necklace</option>
  <option value="8">Other</option>
    </select>
  </div>
</div> 


 <div align="left" class="form-group">
  <label class="col-md-4 control-label" for="weight">PRODUCT WEIGHT</label>  
  <div class="col-md-4">
  <input type="text" id="weight" name="weight" placeholder="PRODUCT WEIGHT" class="form-control input-md" required="" 
  value={prodob.weight}
  onChange={handleChange}/>
    
  </div>
</div> 

 <div align="left" class="form-group">
  <label class="col-md-4 control-label" for="price">PRODUCT PRICE</label>  
  <div class="col-md-4">
  <input id="price" name="price" placeholder="PRODUCT PRICE" class="form-control input-md" required="" type="text"
   value={prodob.price}
   onChange={handleChange}/>
    
  </div>
</div> 

{/* <div align="left" class="form-group">
  <label class="col-md-4 control-label" for="imageurl">SELECT IMAGE</label>
  <div class="col-md-4">
    <input id="imageurl" name="imageurl" class="input-file" type="file"
    value={prodob.imageurl}
    onChange={handleChange}/>
  </div>
</div>  */}



   
   <button type="button" class="btn btn-primary" onClick={addData}>Add Product</button>
 
  </fieldset>
  </form>
         <form style={{ width: "40%", float: "right", marginLeft: "55%" }}>
       <div className="form-group preview">
       </div>
    <div className="form-group mb-2">
    <input type="file" className="form-control" onChange={(e) => {
      upload(e.target.files[0])
       }} />
     </div>
     {/* <button type="button" className="btn btn-success btn-block mt-2" onClick={upload} style={{ marginLeft: "25%" }}>Change Profile Picture</button> */}

</form >
  </div>
    )
}
  
      export default AddProduct;
      //setImgFormData(URL.createObjectURL(e.target.files[0]));
//       <form style={{ width: "40%", float: "right", marginLeft: "55%" }}>
//       <div className="form-group preview">
//       </div>
//     <div className="form-group mb-2">
//     <input type="file" className="form-control" onChange={(e) => {
//     setImgFormData(URL.createObjectURL(e.target.files[0])); upload(e.target.files[0])
//       }} />
//     </div>
//     {/* <button type="button" className="btn btn-success btn-block mt-2" onClick={upload} style={{ marginLeft: "25%" }}>Change Profile Picture</button> */}

// </form >
      // <button id="singlebutton" name="singlebutton" class="btn btn-primary">ADD</button>
      // {
      //   "productname": "string",
      //   "subCategory_Id": 0,
      //   "category_Id": 0,
      //   "price": 0,
      //   "weight": 0,
      //   "imageurl": "string"
      // }
      