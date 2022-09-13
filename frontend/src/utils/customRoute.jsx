import { React ,useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const PrivateRoute = ({ children }) => {
    const [provider, setProvider] = useState([]);
    const [user, token] = useAuth();
  
    useEffect(() => {
        // debugger
        fetchProvider();
      }, [token]);
    
      console.log("p:", provider)
      console.log("u:", user)

      const fetchProvider = async () => {
        try {
          // debugger
          let response = await axios.get("http://127.0.0.1:8000/api/auth/users/all/", {
            headers: { Authorization: "Bearer " + token,},
          });
          // debugger
          let isCT = response.data.filter(res => res.is_provider == 1)
          setProvider(isCT);
          // console.log("yy:", isCT)
        } catch (error) {
          console.log(error.response.data);
        }
      };

  //  for (let i = 0; i < provider.length; i++) {
//     if (provider[i].first_name == user.first_name) return children; 
//     return <Navigate to={"/"} />;
//     // else {
//       // prompt("You are not looged in as a Service Provider")
//       // return <Navigate to={"/"} />
//   // }
// }
return provider ? children : <Navigate to={"/login"} />

}
export default PrivateRoute;

