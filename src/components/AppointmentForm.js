import AppointmentWorkItem from "./AppointmentWorkItem";


export function AppointmentForm(props) {

    function handleChange(event) {
        const eventWrapper = {
            trigger: "AppointmentForm",
            event: event
        };
        props.handleChange(eventWrapper);
    }

    function handleSubmit(event) {
        props.handleSubmit(event);
    }

    function addAppointmentNote(event) {
        console.log("add appointment note");
        const eventWrapper = {
            trigger: "AppointmentNoteAdd"
        };
        props.handleChange(eventWrapper);
    }

    function changeAppointmentNote(event, index) {
        console.log("change appointment note");
        const eventWrapper = {
            trigger: "AppointmentNoteChange",
            index: index,
            value: event.target.value
        };
        props.handleChange(eventWrapper);
    }

    function addAppointmentWorkItem() {
        const eventWrapper = {
            trigger: "AppointmentWorkItemAdd"
        };
        props.handleChange(eventWrapper);
    }

    return (
        <div>
            <h4>selected vehicle id: {localStorage.getItem("selectedVehicleId")}</h4>
            <span>
                <input type="button" className="btn" value="Add Appointment Note" onClick={addAppointmentNote} />
                <input type="button" className="btn" value="Add Appointment Work Item" onClick={addAppointmentWorkItem} />
            </span>
            <div onChange={handleChange} >
                <div>
                    <label htmlFor="date">Date <i>(Format yyyy-MM-dd)</i></label>
                    <br />
                    <input id="date" type="text" value={props.appointment.date} />
                </div>
                <div>
                    <label htmlFor="time">Time <i>(Format hh:mm)</i></label>
                    <br />
                    <input id="time" type="text" value={props.appointment.time} />
                </div>
                <div>
                    <label htmlFor="title">Title</label>
                    <br />
                    <input id="title" type="text" value={props.appointment.title} />
                </div>
                <div>
                    <label htmlFor="note">Note</label>
                    <br />
                    <textarea id="note" value={props.appointment.note}></textarea>
                </div>
            </div>

            {props.appointment.appointmentWorkItems?.map((awi, index) => (
                <AppointmentWorkItem key={index} awi={awi} awiIndex={index} handleChange={props.handleChange} />
            ))}

            <div>
                <label>Appointment Notes</label>
                <br />
                {props.appointment.appointmentNotes?.map((note, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            value={note}
                            onChange={(e) => changeAppointmentNote(e, index)}
                        />
                    </div>
                ))}
            </div>
            <div>
                <input type="button" className="btn btn-primary" value="Create" onClick={handleSubmit} />
            </div>

        </div>

    );

}