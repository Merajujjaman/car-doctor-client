import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="space-y-5 my-4">
            <h3 className="text-3xl font-bold text-error text-center">Service</h3>
            <h1 className="text-center text-6xl font-bold ">Our Service Area</h1>
            <p className="text-center">the majority have suffered alteration in some form, by injected humour, or <br /> randomised words which do not look even slightly believable. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;