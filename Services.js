import axios from "axios";

export default class Service {
  GetUserInformation = () =>{
    return axios.get(`https://jsonplaceholder.typicode.com/users`);
  }
}