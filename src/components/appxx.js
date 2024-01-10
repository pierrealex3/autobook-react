import {BrowserRouter} from "react-router-dom";
import AppShell from "./appshell";

const IndexPage = () => {
    return (        
        <BrowserRouter>          
          <AppShell />
        </BrowserRouter>
    );

};

export default IndexPage;