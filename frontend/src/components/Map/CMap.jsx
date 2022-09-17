import React, { useMemo, useState, useEffect } from 'react'
import useAuth from "../../hooks/useAuth";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import axios from "axios";


// export default function Map(props) {
//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: "AIzaSyBkHpy27ugJefQS3y53MBhHIFE8T4k__aQ"
//       });
//       if (!isLoaded) return <div>Loading... Please Wait</div>
//     //   console.log("props:", props)  
//       return Mapp();
//     }
//     // let center = { lat: 29, lng: -95}
    
//     function Mapp(props) {
//         console.log("props:", props)
//         return (
//         // <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
//         //     <Marker position={center}/>
//         // </GoogleMap>
//         <div class="mapouter">
//             <div class="gmap_canvas">
//                 <iframe width="535" height="388" id="gmap_canvas" src="https://maps.google.com/maps?q=5138%20San%20Felipe%20St,%20Houston,%20TX%2077056&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
//                 </iframe>
//             </div>
//         </div>
//     )}

function CMap(Cleaning) {
    const [user, token] = useAuth();
    const [address, setAddress] = useState([]);

    useEffect(() => {
        // debugger
        fetchAddress();
      }, [token]);

      console.log("user:", user)
      console.log("add:", address)

      const fetchAddress = async () => {
        try {
          // debugger
          let response = await axios.get(`http://127.0.0.1:8000/api/addresses/${address.user_id}`, {
            headers: { Authorization: "Bearer " + token,},
          });
        //   console.log("user:", user)
          // debugger
          setAddress(response.data);
          // console.log("addy:", address)
        } catch (error) {
          console.log(error.response.data);
        }
      };

    console.log("props:", Cleaning)
  return (
        <div className="mapouter">
            <div className="gmap_canvas">
                <iframe width="100%" height="488" id="gmap_canvas" src="https://maps.google.com/maps?q=5138,sanfelipeSt,Houston,TX,77056&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                </iframe>
            </div>
        </div>
  )
}

export default CMap