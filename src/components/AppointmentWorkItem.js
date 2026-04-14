export default function AppointmentWorkItem(props) {

    function changeAwiTitle(event) {
        console.log("change appointment work item title");
        const eventWrapper = {
            trigger: "AppointmentWorkItemTitleChange",
            index: props.awiIndex,
            value: event.target.value
        };
        props.handleChange(eventWrapper);
    }

    return (
        <div>        
          <label htmlFor= "awiTitle" > Title </label>
          <br />
          <input id="awiTitle" type="text" value={props.awi.title} onChange={changeAwiTitle} />
        </div>
    );

}