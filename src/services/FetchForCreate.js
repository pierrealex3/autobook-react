const API_BASE_URI = "http://localhost:7778/autobook/";

export async function fetchForCreate(resourcePath, resource) {

    return fetch(API_BASE_URI + resourcePath, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(resource),
    });

}