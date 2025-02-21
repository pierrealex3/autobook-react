

export function AppointmentForm(props) {

    function handleChange(event) {
        props.handleChange(event);
    }

    function handleSubmit(event) {
        props.handleSubmit(event);
    }

    return (
        <div>
            <h4>selected vehicle id: {localStorage.getItem("selectedVehicleId")}</h4>
            <form onChange={handleChange} onSubmit={handleSubmit}>            
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
                <div>
                    <input type="submit" className="btn btn-primary" value="Create" />
                </div>
            </form>
        </div>

    );

}