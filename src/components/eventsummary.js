import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EventSummary() {

    const createVehicleNavHook = useNavigate();
    const [vehicles, setVehicles] = useState([]);

    function createVehicule() {
        createVehicleNavHook("/vehicle");

    }

    return (
        <div>
            <h4>Logged on user: {localStorage.getItem("user")}</h4>
            <div>
                { vehicles.length == 0 ? <input type="button" value="New Vehicle" className="btn btn-primary" onClick={createVehicule} /> : <h4>VEHICLE SHIFTER</h4> }
            </div>
        </div>
    )
};