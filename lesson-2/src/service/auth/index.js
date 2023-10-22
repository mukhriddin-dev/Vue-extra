import api from "../axios";


 const useAuth = {
    login: (data)=> api.post("/auth/login", data)
 }


export default useAuth;