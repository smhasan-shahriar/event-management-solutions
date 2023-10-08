import React, { useEffect, useState } from 'react';
import ExperienceCard from '../components/ExperienceCard';
import Footer from '../components/Footer';

const Experiences = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('/data.json')
        .then(response=> response.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='mb-10'>
            <div>
                {
                    services.map(service => <ExperienceCard key={service.id} service={service}></ExperienceCard>)
                }
            </div>
        </div>
    );
};

export default Experiences;