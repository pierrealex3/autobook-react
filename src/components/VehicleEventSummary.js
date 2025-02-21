import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useFetch from "../services/FetchForGetHook";
import { vehicleBrandImageMap } from "../utils/ImageUtils";
import { CurrentUser } from './CurrentUser';

export default function VehicleEventSummary() {

    const navHook = useNavigate();
    const { dataArr:vehicles, setDataArr:setVehicles, error:errorVehicles, loading:loadingVehicles } = useFetch("vehicles", []);
    const { dataArr:events, setDataArr:setEvents, error:errorEvents, loading:loadingEvents } = useFetch("events", []);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    let vehicleIdPropsMap = {}; /* vehicle id as top-level key */

    function createVehicule() {
        navHook("/vehicle");

    }

    function handleOnVehicleClick(vehicle) {
        setSelectedVehicle(vehicle === selectedVehicle ? null : vehicle);        
    }

    function handleOnNewVehicleEventClick() {
        localStorage.setItem("selectedVehicleId", selectedVehicle.id);
        navHook('/vehicleevent');
    }

    /**
     * Add navigation for many other events represented by the discriminator "event.type"
     * @param {*} event 
     */
    function handleOnEventClick(event) {
        console.log("hell");
        if ("APPOINTMENT" === event.eventType) {
            navHook(`/vehicleevent/appointment/${event.eventTargetId}`);
        }

    }

    if (loadingVehicles || loadingEvents) return (<div>SPINNER</div>);


    vehicles.forEach( v => {
        vehicleIdPropsMap[v.id] = {
        brand: v.brand,
        model: v.model,
        year: v.year
     }
    });

    return (
        <div>
            <CurrentUser />
            
            <div>
                {
                    vehicles.length == 0 ? <input type="button" value="New Vehicle" className="btn btn-primary" onClick={createVehicule} /> :
                        vehicles.map(
                            v => 
                            <div key={v.id} style={{border: 'outset', backgroundColor: v === selectedVehicle ? 'lime' : 'white'}} onClick={ () => handleOnVehicleClick(v) }>
                            <img src={vehicleBrandImageMap[v.brand]} alt={v.brand} width="100" />
                            <h4>{v.brand} {v.model} {v.year}</h4>
                            </div>
                            )
                }
            </div>
            { selectedVehicle &&
            <div>
                <input type='button' value="New !" onClick={handleOnNewVehicleEventClick} />
            </div> 
            }
            <div>
                {events.map(eventx => {
                    if (selectedVehicle === null || selectedVehicle?.id === eventx.vehicleId) {
                        return (
                            <div key={eventx.eventTargetId} style={{ border: 'groove', backgroundColor: 'lightgray' }} onClick={ () => handleOnEventClick(eventx) }>
                                <img src={vehicleBrandImageMap[vehicleIdPropsMap[eventx.vehicleId].brand]} alt={vehicleIdPropsMap[eventx.vehicleId].brand} width="75" />
                                <h4>{eventx.vehicleTag}</h4>
                                <p>
                                    {eventx.date}
                                    <br></br>
                                    {eventx.title}
                                </p>
                            </div>);
                    }
                    return null;
                }
               )}              
            </div>
        </div>
    )
};