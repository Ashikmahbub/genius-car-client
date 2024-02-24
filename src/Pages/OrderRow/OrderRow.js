import React, { useEffect, useState } from 'react';

const OrderRow = ({order,handleDelete,handleUpdate}) => {
  const {_id,serviceName,phone,customer,price,service,status}=order;
  const[orderService,setOrderService] =useState({});
    useEffect(()=>{
      fetch(`https://genius-car-client-qooo.vercel.app/services/${service}`)
      .then(res =>res.json())
      .then(data =>(setOrderService(data)))


    },[service])
    
    return (
        <tr>
              <th>
                <label>
                     <button onClick={()=>handleDelete(_id)} className='btn btn-warning'>Delete</button>
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="rounded w-24 h-24">
                     {
                      orderService?.img && 
                     <img
                        src= {orderService.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                     }
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{customer}</div>
                    <div className="text-sm opacity-50">United States</div>
                    <div className="text-sm opacity-50">{phone}</div>
                  </div>
                </div>
              </td>
              <td>
                {price}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {serviceName}
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button onClick={()=>handleUpdate(_id)}className="btn btn-ghost">{status?status:'pending'}</button>
              </th>
            </tr>
    );
};

export default OrderRow;