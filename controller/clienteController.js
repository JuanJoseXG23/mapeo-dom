import { clientes } from "../model/clientes.js";
let listarClientes = document.querySelector("#listarClientes");
console.log(listarClientes)

listarClientes.addEventListener("click", function () {
    clientes.map(function (index) {
        let cardCliente = document.createElement("div")
        cardCliente.classList.add("cliente-card")
        console.log(cardCliente)
    })
})