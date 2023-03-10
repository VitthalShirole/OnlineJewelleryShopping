import axios from 'axios';

class ProductService{
    constructor(){
        this.baseUrl="http://localhost:7070/";
   }
    getProductss(){
        return axios.get(this.baseUrl+"products");
    }
    getProducts(cid,csid){
        return axios.get(this.baseUrl+"products/"+cid+"/"+csid);
    }
    addProduct(prod){
        return axios.post(this.baseUrl+"products",prod)
    }

    getProduct(mid){
        return axios.get(this.baseUrl+"manager/allproducts/"+mid)
    }

    changeProfile = (body, userId) => {
  return axios.post(this.baseUrl+`products/${userId}/image`, body,
    { headers: { 'Content-type': 'multipart/form-data;boundary=add-random-characters', Authorization: "Bearer " + localStorage.getItem("token") } });
}

loginUser(loginob){
    return axios.post(this.baseUrl+"user/login",loginob)
}

    // deleteProduct(id){
    //     return axios.delete(this.baseUrl+"product/"+id)

    // }
    // updateProduct(emp){
    //     return axios.put(this.baseUrl+"product/"+emp.empid,emp)
    // }

}

export default new ProductService();