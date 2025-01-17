export function CurrentUser() {

    return(
        <h4>Logged on user: {localStorage.getItem("user")}</h4>
    )
        
};