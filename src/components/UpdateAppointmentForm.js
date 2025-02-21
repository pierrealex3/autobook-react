import { fetchForUpdate } from "../services/FetchForUpdate";
import useFetch from "../services/FetchForGetHook";
import { useNavigate, useParams } from "react-router-dom";
import {AppointmentForm} from "./AppointmentForm";


export default function UpdateAppointmentForm() {

    const { appointmentId } = useParams();
    const { dataArr:appointment, setDataArr:setAppointment, error:errorFetchAppointment, loading:loadingAppointment } = useFetch(`appointments/${appointmentId}`, []);
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
            const response = await fetchForUpdate(`appointments/${appointmentId}`, appointment);
            response.text(); // prevent the "Fetch failed loading" message in the console
            if (response.status === 204) {
                console.log("Updated appointment...");                
                homeNavigateHook("/");
            }
        } catch (e) {
            console.log(e);
        }        
    }

    if (loadingAppointment) return (<div>SPINNER</div>);

    return (
        <div>
          <AppointmentForm handleChange={handleChange} handleSubmit={handleSubmit} appointment={appointment} />
        </div>
    );
}