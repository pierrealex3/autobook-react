import TopShelf from "./TopShelf";
import VehicleEventSummary from "./VehicleEventSummary";
import MockUser from "./MockUser";
import {Routes, Route} from "react-router-dom";
import VehicleForm from "./VehicleForm";
import NewVehicleEventSelector from "./NewVehicleEventSelector";
import NewAppointmentForm from "./NewAppointmentForm";

export default function AppShell () {
    return (
        <>
        <TopShelf />
        <Routes>
          <Route path="/" element={<VehicleEventSummary />} />
          <Route path="/mockuser" element={<MockUser />} />
          <Route path="/vehicle" element={<VehicleForm />} />
          <Route path="/vehicleevent" element={<NewVehicleEventSelector />} />
          <Route path="/vehicleevent/appointment" element={<NewAppointmentForm />} />
        </Routes>
      </>
    );
};