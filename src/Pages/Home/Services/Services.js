import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])
 

    return (
        <div>
            <div className='text-center'>
                <p className="text-2xl font-bold text-red-400">Services</p>
                <h2 className="text-5xl font-bold mb-4">Our Service Area</h2>
                <p className=''>The majority have suffered alteration in some form, by injected humour, or randomised <br/>words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12'>
                
                {
                  services.map(service=><ServiceCard
                  key={service._id} service={service}></ServiceCard>)
                }
            </div>
           <div className='text-center mb-16 mt-5'>
           <button className="btn btn-outline btn-error">More Services</button>
           </div>
        </div>
    );
};

export default Services;