import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";


const ViewOrderDetails = () => {
    const params=useParams();
    const firebase=useFirebase();

    const [orders,setOrders]=useState([]);

    useEffect(() => {
        firebase.getOrders(params.bookId).then((orders)=>setOrders(orders.docs));
    },[]);

    console.log(params);
return (
    <div className="conatiner">
        <h1>Orders</h1>
        {orders.map((order) =>{
                const data=order.data();
                return(
                    <div key={order.id} className="mt-3" style={{border: "1px solid black", padding:"10px"}}>
                        <h5>Order By: {data.displayName}</h5>
                        <h6>Qty:{data.qty}</h6>
                        <p>Email:{data.userEmail}</p>
                    </div>
                );
            })
        }
    </div>
);
};

export default ViewOrderDetails;