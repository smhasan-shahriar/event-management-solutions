import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const OurServices = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('/data.json')
        .then(response=> response.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div data-aos="fade-up" className='max-w-[1360px] mx-auto my-10 p-5'>
            <h2 className='font-bold text-5xl text-center my-5'>Our Services</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default OurServices;