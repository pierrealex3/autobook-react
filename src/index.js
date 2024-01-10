import ReactDOM from "react-dom/client";

import FilterableVehicleEventList from "./components/appx";
import IndexPage from "./components/appxx";

const root = ReactDOM.createRoot(document.getElementById("appx"));
//root.render(<FilterableVehicleEventList />);
root.render(
  <IndexPage />
);
