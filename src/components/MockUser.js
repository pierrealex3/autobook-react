import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MockUser() {

    const [user, setUser] = useState("");
    const homeNavigateHook = useNavigate();


    function handleSave(e) {
        localStorage.setItem("user", user);
        homeNavigateHook("/");
    }

    return (
        <div>
            <label htmlFor="mockuser">Mock User</label>
            <br/>
            <input id="mockuser" value={user} onChange={ (e) => setUser(e.target.value) } />
            <input type="button" value="Save To Local Storage" onClick={handleSave} />

        </div>
    );
};