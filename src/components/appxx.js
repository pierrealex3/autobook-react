import {BrowserRouter} from "react-router-dom";
import AppShell from "./AppShell";

const IndexPage = () => {
    return (        
        <BrowserRouter>          
          <AppShell />
        </BrowserRouter>
    );

};

export default IndexPage;