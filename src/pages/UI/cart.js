function karzina(){
    let box3 = document.querySelector(".boxI")
    box3.innerHTML = ""
        let cart = JSON.parse(localStorage.getItem("cart")) || []
        cart.forEach(prod =>{
            box3.innerHTML += `
            <img width="128" height="130" src="${prod.image}" alt="">
                                <div>
                                    <p>${prod.name}</p>
                                    <h3>${prod.price}</h3>
                                    <div style="display: flex; gap: 10px; align-items: center;">
                                        <img class="add" style="cursor: pointer;" width="28" height="28" src="img2/icons/add_box.png" alt="">
                                        <p class="counter">1</p>
                                        <img class="minus" style="cursor: pointer;" width="28" height="28" src="img2/icons/add_box (1).png" alt="">
                                    </div>
                                </div>
                                `
                 
                                let add = box3.querySelector(".add")
                                let minus = box3.querySelector(".minus")
                                let counter = box3.querySelector(".counter")
                                add.onclick = () =>{
                                    counter.innerHTML = Number(counter.innerHTML) + 1
                                    
                                }
                                minus.onclick = () =>{
                                   if(Number(counter.innerHTML > 1)){
                                        counter.innerHTML = Number(counter.innerHTML) - 1
                                    }
                                }

        })
}
karzina()