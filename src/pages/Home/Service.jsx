import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
    const [services, setServices] = useState([])
    const [acs, setAcs] = useState(true)
    const searchRef = useRef(null)
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}&sort=${acs ? 'acs' : 'decs'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [acs, search])

    const handleSearch = () => {
        console.log(searchRef.current.value);
        setSearch(searchRef.current.value)
    }

    return (
        <div className="space-y-5 my-4">
            <h3 className="text-3xl font-bold text-error text-center">Service</h3>
            <h1 className="text-center text-6xl font-bold ">Our Service Area</h1>
            <p className="text-center">the majority have suffered alteration in some form, by injected humour, or <br /> randomised words which do not look even slightly believable.
            </p>

            <div className="form-control">
                <div className="input-group">
                    <input type="text" ref={searchRef} placeholder="Search…" className="input input-bordered" />
                    <button onClick={handleSearch} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

            <button onClick={() => setAcs(!acs)} className="btn btn-outline btn-info btn-xs">{acs ? 'Price high to law' : 'Price law to high'}</button>

            <div>

            </div>

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