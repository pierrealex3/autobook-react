import { useState } from "react";
import { fetchForCreate } from "../services/FetchForCreate"

const dummyVehicle = {
    brand: "",
    model: "",
    year: ""
};

export default function VehicleForm() {

    const [submitted, setSubmitted] = useState("Not Yet Created");
    const [vehicle, setVehicle] = useState(dummyVehicle);

    async function handleSubmit(event) {
        event.preventDefault();        
        console.log(vehicle);
        try {
            const response = await fetchForCreate("vehicles", vehicle);
            debugger            
            setSubmitted("Created");
        } catch (e) {
            console.log(e);
        }        
    }

    function handleChange(event) {
        setVehicle( (v) => {
            return { ...v, [event.target.id]: event.target.value };
        });
    }

    return (
        <div>
            <h1>New Vehicle</h1>
            <h2>{submitted}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="brand">Brand</label>
                    <br />
                    <input id="brand" type="text" value={vehicle.brand} onChange={handleChange} />                    
                </div>

                <div>
                    <label htmlFor="model">Model</label>
                    <br />
                    <input id="model" type="text" value={vehicle.model} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="year">Year</label>
                    <br />
                    <input id="year" type="text" value={vehicle.year} onChange={handleChange}/>
                </div>

                <div>
                    <input type="submit"
                        className="btn btn-primary"
                        value="Save" />
                </div>

            </form>

        </div>

    );


};