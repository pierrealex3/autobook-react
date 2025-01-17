import { useState } from "react";
import { fetchForCreate } from "../services/FetchForCreate";

const appointmentModel = {
    date: "",
    time: "",
    title: "",
    note: ""
};

export default function NewAppointmentForm() {

    const [appointment, setAppointment] = useState(appointmentModel);

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
            const response = await fetchForCreate(`vehicles/${selectedVehicleId}/appointments`, appointment);
            response.text(); // prevent the "Fetch failed loading" message in the console
            if (response.status === 204) {
                console.log("Saved appointment...");                
            }
        } catch (e) {
            console.log(e);
        }        
    }

    return (
        <div>
            <h4>selected vehicle id: {localStorage.getItem("selectedVehicleId")}</h4>
            <form onChange={handleChange} onSubmit={handleSubmit}>            
                <div>
                    <label htmlFor="date">Date <i>(Format yyyy-MM-dd)</i></label>
                    <br />
                    <input id="date" type="text" value={appointment.date} />
                </div>
                <div>
                    <label htmlFor="time">Time <i>(Format hh:mm)</i></label>
                    <br />
                    <input id="time" type="text" value={appointment.time} />
                </div>
                <div>
                    <label htmlFor="title">Title</label>
                    <br />
                    <input id="title" type="text" value={appointment.title} />
                </div>
                <div>
                    <label htmlFor="note">Note</label>
                    <br />
                    <textarea id="note" value={appointment.note}></textarea>
                </div>
                <div>
                    <input type="submit" className="btn btn-primary" value="Create" />
                </div>
            </form>
        </div>

    );
}