import getData from "./getData.js"
import { showData } from "./showData.js"

const element = document.querySelector("#grid-elementos")

const endpoint="http://localhost:4000/productos/"


document.addEventListener("DOMContentLoaded", async () =>{
    const data = getData(endpoint)
    showData(data, element)
    console.log(data);
})