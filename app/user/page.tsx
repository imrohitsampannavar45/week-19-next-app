// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios"
// export default function User() {



//     const [loading, setLoading] = useState(true);
//     const [data, setData] = useState({})


//     useEffect(() => {
//         axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
//             .then(response => {
//                 setData(response.data);
//                 setLoading(false);
//             })
//     }, [])


//     if (loading) {
//         return <div>
//             loading......
//         </div>
//     }


//     return (

//         <div className="flex flex-col justify-center h-screen">
//             <div className="flex justify-center">
//                 <div className="border p-8 rounded">
//                     <div>
//                         Name: {data?.name}
//                     </div>

//                     {data?.email}
//                 </div>
//             </div>
//         </div>
//     );
// }

// import axios from "axios"
// export default async function User() {

//     const response = await axios.get("http://localhost:3000/api/v1/user/details")

//     await new Promise(r => setTimeout(r, 5000))

//     const data = response.data;

//     console.log("request was sent");

//     return <div>
//         user page

//         {data.name}
//         {data.email}
//     </div>

// }