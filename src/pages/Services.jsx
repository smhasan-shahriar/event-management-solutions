import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/MainAuth';
import useAuthHook from '../hooks/useAuthHook';

const Services = () => {
    const {user} = useAuthHook()
    return (
        <div>
            services {user}
        </div>
    );
};

export default Services;