import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {

    const[services,setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[])

    return (
        <div>
            <div className="w-3/4 space-y-3 mt-4 mx-auto text-center">
                <h3 className="text-[#FF3811] text-2xl font-bold">Services</h3>
                <h1 className="text-4xl font-bold">Our Service Area</h1>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-5">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;