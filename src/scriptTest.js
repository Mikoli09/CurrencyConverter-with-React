// import axios from "axios";

// (async () => {
//     console.log("Rozpoczynam zapytanie...");
//     try {
//         const response = await axios.get("data.json");
//         console.log(response.data);
//     }
//     catch (error) {
//         console.error(error);
//     }
// })();

console.log ("Ładowanie danych");

fetch("https://mikoli09.github.io/CurrencyConverter-with-React/data.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(products => console.log(products))
    .catch(error => console.log("Error:", error));