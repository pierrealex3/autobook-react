import { useState } from "react";
import { fetchForCreate } from "../services/FetchForCreate";
import { useNavigate } from "react-router-dom";
import {AppointmentForm} from "./AppointmentForm";

const appointmentModel = {
    date: "",
    time: "",
    title: "",
    note: ""
};

export default function NewAppointmentForm() {

    const [appointment, setAppointment] = useState(appointmentModel);
    const homeNavigateHook = useNavigate();

    function handleChange(event) {
        setAppointment( (a) => {
            return {...a, [event.target.id] : event.target.value};
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();        
        console.log(appointment);
        try {
            const selectedVehicleId = localStorage.getItem("selectedVehicleId");
            const response = await fetchForCreate(`vehicles/${selectedVehicleId}/appointment`, appointment);
            response.text(); // prevent the "Fetch failed loading" message in the console
            if (response.status === 201) {
                console.log("Saved appointment...");                
                homeNavigateHook("/");
            }
        } catch (e) {
            console.log(e);
        }        
    }

    return (
        <div>
          <AppointmentForm handleChange={handleChange} handleSubmit={handleSubmit} appointment={appointment} />
        </div>
    );
}