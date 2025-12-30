import { show } from "./dom.js"

let url = "http://localhost:8000/products"

export async function get() {
  let { data } = await axios.get(url)
  show(data)
}