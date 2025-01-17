import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NewVehicleEventSelector() {

    const navigateHook = useNavigate();

    function handleClick(event) {
        if (event.target.value === "Appointment") {
            navigateHook("/vehicleevent/appointment");
        }
    }



    return (
        <div onClick={handleClick}>
            <h4>selected vehicle id: {localStorage.getItem("selectedVehicleId")}</h4>
            <input type="button" value="Appointment" />
            <input type="button" value="Incident" />
            <input type="button" value="Buy Part" />
        </div>
    );
}