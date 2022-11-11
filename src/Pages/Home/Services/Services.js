import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true);
    const [search, setSearch] = useState('');

    const searchRef = useRef();

    useEffect( () =>{
        fetch(`http://localhost:5000/services?search=${search}&order=${isAsc? 'asc':'des'}`)
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [isAsc,search])
 
    const handleSearch = () =>{
      setSearch(searchRef.current.value);
    }
    return (
        <div>
            <div className='text-center'>
                <p className="text-2xl font-bold text-red-400">Services</p>
                <h2 className="text-5xl font-bold mb-4">Our Service Area</h2>
                <p className=''>The majority have suffered alteration in some form, by injected humour, or randomised <br/>words which don't look even slightly believable. </p>
                <input className='border-2 shadow-md p-1' ref={searchRef} type="text" /> <button onClick={handleSearch}>Search</button>
                <button className='btn btn-ghost' onClick={()=> setIsAsc(!isAsc)}>{isAsc?'des':'asc'}</button>
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