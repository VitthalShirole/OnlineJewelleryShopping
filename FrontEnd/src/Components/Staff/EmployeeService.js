import axios from 'axios';

class EmployeeService{
    constructor(){
        this.baseUrl="http://localhost:7070/";
   }
    getEmployees(id){
        return axios.get(this.baseUrl+"staff/getall/"+id);
    }

    addEmployee(emp){
        return axios.post(this.baseUrl+"staff/add",emp)
    }

    deleteEmployee(id){
        return axios.delete(this.baseUrl+"staff/delete/"+id)

    }
    updateemeployee(emp){
        return axios.put(this.baseUrl+"staff/update/"+emp.empid,emp)
    }

}

export default new EmployeeService();