export default interface IWorkshop {
    "name": string,
    "id": number,
    "description": string,
    "startDate": string,
    "endDate": string,
    "time": string,
    "location": {
    "address": string,
    "city": string,
    "state": string
    },
    "modes": {
        "inPerson": true,
        "online": false
    },
    "imageUrl": string
}