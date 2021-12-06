import { IceCream } from "./IceCream.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = IceCream()
}

renderAllHTML();