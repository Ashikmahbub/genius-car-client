import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import OrderRow from "../OrderRow/OrderRow";

const Orders = () => {
  const {user,loading,logOut} = useContext(AuthContext);
  console.log(user,"ine 9");
  
  const [orders, setOrders] = useState({});
  console.log(orders);
  const handleDelete =id =>{
    const proceed  =window.confirm('Are you sure want to cancel this order ')
    if (proceed){
      fetch(`https://genius-car-client-qooo.vercel.app/orders/${id}`,{
        method: 'DELETE'
      })
      .then(res =>res.json())
      
      .then(data=>{
        console.log(data)
        if(data.deletedCount >0){
          alert('Deleted Successfully');
          const remaining = orders.filter(odr =>odr._id !==id);
          setOrders(remaining);
        }
      })
    }
  }
  const handleUpdate = id =>{
    fetch(`https://genius-car-client-qooo.vercel.app/order/${id}`,{
      method:'PATCH',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify({status:'Approved'})
    })
    .then(res =>res.json())
    .then(data =>{console.log(data)
    if (data.modifiedCount>0){
      const remaining = orders.filter(odr => odr._id !== id);
      const approving = Orders.find(odr => odr._id === id);
      approving.status = 'Approved'
      const newOrders = [...remaining,approving];
      setOrders(newOrders);
    }
    })
  }
    // console.log(data);
      // if(data.modifiedCount > 0){
      //   const remaining =orders.filter(odr =>orders._id !== id);
      //   const approving = orders.find(odr => odr._id===id);
        
      // }

  useEffect(() => {
    if (user) {
      console.log(user);
      fetch(`https://genius-car-client-qooo.vercel.app/orders?email=${user.email}`,{
        headers:{
          authorization : `Bearer: ${localStorage.getItem(
          'geniusToken'
          )}`
        }
      })
      
        .then(response => {
          if (response.status === 401 || response.status === 403){
            return logOut();
          }
          return response.json()
        })
        .then(data => setOrders(data))
        .catch(error => console.error('Error fetching orders:', error));
    }
  }, [user?.email]);

  return (
    <div>
      <h2 className="text-5xl">you have {orders.length} orders</h2>
      <div className="overflow-x-auto">
        <table className="table">
           
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {Array.isArray(orders) && orders.length > 0 ? (
              orders.map(order => (
                <OrderRow
                 key={order._id} 
                 order={order} 
                 handleDelete ={handleDelete}
                 handleUpdate ={handleUpdate}
                 />

              ))
            ) : (
              <tr>
                <td colSpan="5">No orders available</td>
              </tr>
            )}
          
          </tbody>
         
           
        </table>
      </div>
    </div>
  );
};

export default Orders;
