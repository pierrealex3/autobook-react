const API_BASE_URI = "http://localhost:7778/autobook/";

export async function fetchForUpdate(resourcePath, resource) {

    return fetch(API_BASE_URI + resourcePath, {
        method: "PUT",
        headers: {
            "X-MockUser": localStorage.getItem("user"),
            "Content-Type": "application/json",
        },
        body: JSON.stringify(resource),
    });

}