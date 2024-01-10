import { useNavigate } from "react-router-dom"

export default function EventSummary() {

    const createVehicleNavHook = useNavigate();
    
    function createVehicule() {
        createVehicleNavHook("/vehicle");

    }

    return (
        <div>
            <h4>Logged on user: {localStorage.getItem("user")}</h4>
            <div>
                <input type="button" value="New Vehicle" className="btn btn-primary" onClick={createVehicule} />
            </div>
        </div>
    )
};