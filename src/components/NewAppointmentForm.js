import { useState } from "react";
import { fetchForCreate } from "../services/FetchForCreate";
import { useNavigate } from "react-router-dom";
import { AppointmentForm } from "./AppointmentForm";
import { useImmer } from "use-immer";

const appointmentModel = {
    date: "",
    time: "",
    title: "",
    note: ""
};

export default function NewAppointmentForm() {

    const [appointment, setAppointment] = useImmer(appointmentModel);
    const homeNavigateHook = useNavigate();

    function handleChange(event) {
        switch (event.trigger) {
            case "AppointmentForm": {
                setAppointment( draft => {
                    draft[event.event.target.id] = event.event.target.value;
                });
                break;
            } case "AppointmentNoteAdd": {                
                setAppointment( draft => {                    
                    (draft.appointmentNotes ??= []).push('');
                });
                break;
            } case "AppointmentNoteChange": {
                setAppointment( draft => {
                    draft.appointmentNotes[event.index] = event.value;
                });
                break;
            } case "AppointmentWorkItemAdd": {
                setAppointment( draft => {
                    (draft.appointmentWorkItems ??= []).push({});
                });
                break;                
            } case "AppointmentWorkItemTitleChange": {
                setAppointment( draft => {
                    draft.appointmentWorkItems[event.index].title = event.value;
                });
                break;
            }
        }
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