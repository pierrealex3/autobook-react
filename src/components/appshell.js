import TopShelf from "./topshelf";
import EventSummary from "./eventsummary";
import MockUser from "./MockUser";
import {Routes, Route} from "react-router-dom";
import VehicleForm from "./VehicleForm";

export default function AppShell () {
    return (
        <>
        <TopShelf />
        <Routes>
          <Route path="/" element={<EventSummary />} />
          <Route path="/mockuser" element={<MockUser />} />
          <Route path="/vehicle" element={<VehicleForm />} />
        </Routes>
      </>
    );
};