let box2 = document.querySelector(".products")
export function show(products,all=products) {
  box2.innerHTML = ""
      let range = document.querySelector(".r")
let valueRange = document.querySelector(".valueRange")
range.oninput = () =>{
    valueRange.innerHTML = `Value : ${range.value}$`
     let filtered = all.filter(product => product.price <= range.value)
     show(filtered,all)
}
  products.forEach(product => {
    let div = document.createElement("div")
    div.innerHTML = `
      <div style="text-align: center;">
        <a href="info.html?id=${product.id}">
          <img width="310" height="200" src="${product.image}" alt="">
        </a>
        <h1 style="cursor: pointer;" style="color: gray;">${product.name}</h1>
        <h4>${product.price}</h4>
      </div>
    `
    box2.append(div)
  })
}
let modal = document.querySelector(".modal")
let karzina = document.querySelector(".karzina")
let close = document.querySelector(".closeBtn")
karzina.onclick = () =>{
  modal.showModal()
}
close.onclick = () =>{
  modal.close()
}