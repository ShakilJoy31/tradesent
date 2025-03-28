// import { useEffect, useState } from "react";
// import { getUser } from "./lib/healper";

// export const getDataFromLocalStore = () =>{
//     const [user, setUser] = useState(null);
//     useEffect(()=>{
//         const localStorageSavedUser = JSON.parse(localStorage.getItem('savedUser'));
//             getUser().then(res=> {
//               if(localStorageSavedUser){
//                   const specificUser = res.find(singleUser => singleUser?.email == localStorageSavedUser?.email);
//                   console.log(specificUser);
//                   setUser(specificUser); 
//                 }
//             })
//       },[])
//       return user; 
// }