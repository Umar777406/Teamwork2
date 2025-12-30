import { get } from "./api.js"
get()
let cnt = document.querySelector(".cnt")
if(cnt){
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cnt.textContent = cart.length
}