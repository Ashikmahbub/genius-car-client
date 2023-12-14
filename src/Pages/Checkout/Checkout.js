import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { _id,title,price } = useLoaderData();
  const {user} =useContext(AuthContext);
  const handlePlaceOrder = event =>{
    event.preventDefault();
    const form = event.target;
    const name = `${form.first_name.value} ${form.last_name.value}`
    const email = user?.email || 'unregistered';
    const phone = form.phone.value;
    const message = form.message.value;
    const order ={
        service:_id,
        serviceName:title,
        price,
        customer:name,
        email,
        phone,
        message
    }
    // if(phone.length >10){
    //     alert('Phone number should be 10 characters')
    // }
    fetch('http://localhost:5000/orders',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      
      console.log(data)
      if (data.acknowledged){
        alert('Order placed successfully')
        form.reset();
      }
    })
    .catch(er => console.error(er));
    
  }
  return (
    <div className="mb-10">
      <form onSubmit={handlePlaceOrder}>
        <h2 className="text-4xl">You are about to order :  {title}</h2>
        <h4 className="text-3xl">Price : {price}</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full"
            name="first_name"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full"
            name="last_name"
          />
          <input
            type="text"
            placeholder="Your Phone"
            className="input input-bordered w-full"
            name="phone"
            required
          />
          <input
            type="text"
            placeholder=" Your Email"
            className="input input-bordered w-full"
            defaultValue={user?.email}
            readOnly
            name="email"
          />
        </div>
        <textarea className="textarea textarea-bordered h-24 w-full" name="message" placeholder="Customer Comment"></textarea>
        <input className="btn btn-warning input-bordered p-3 m-5" type="submit" value="Place Your Order" />
      </form>
    </div>
  );
};

export default Checkout;
