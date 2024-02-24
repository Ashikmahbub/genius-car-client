import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://genius-car-client-qooo.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
       
  });
  return (
    <div>
      <div className="text-center">
        <p className="text-2xl font-bold text-orange my-2">Services</p>
        <h2 className="text-5xl font-semi-bold my-2">Our Services Area</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          molestias?
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
        {
            services.map(service => <ServicesCard 
                
                
            key={service.service_id}
            service ={service}
            ></ServicesCard>)

        }
      </div>
    </div>
  );
};

export default Services;
