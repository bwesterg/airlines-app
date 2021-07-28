const airlinesURL = "http://localhost:3000/airlines/"


export function patchAirline(airline){
    fetch(airlinesURL + airline.id, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({ airline })
    })
}

export function postAirline(airline) {
    fetch(airlinesURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ airline })
      })
}

export function deleteAirline(id){
    fetch(airlinesURL + id, { method: "DELETE" } )
}