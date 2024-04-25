const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-count")
const addressInput = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")

let cart = [];

// Abrir o modal do carrinho
cartBtn.addEventListener("click", function(){
    updateCartModal();
    cartModal.style.display = "flex"
    
})

// Fechar o modal do carrinho
cartModal.addEventListener('click', function(event){
    if (event.target === cartModal){
        cartModal.style.display = "none"
    }
})

closeModalBtn.addEventListener("click", function(){
    cartModal.style.display = "none"
})

menu.addEventListener("click", function(event){
    let parentButton = event.target.closest(".add-to-cart-btn")

    if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
        //Adicionar no carrinho
        addToCart(name, price)
    }
})


//Função para adicionar no carrinho
function addToCart(name, price){
    const existingItem = cart.find(item=> item.name === name)

    if(existingItem){
        //Se o item já existe aumenta a quantidade + 1
        existingItem.quantity += 1
    }else{

        cart.push({
            name,
            price,
            quantity: 1,
        })
    }

        updateCartModal()

}


//Atualiza o carrinho
function updateCartModal(){
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("Flex", "justify-between", "mb-4", "flex-col")
        
        cartItemElement.innerHTML = `
        
        <div class="flex items-center justify-between">
            <div>
                <p class="font-medium">${item.name}</p>
                <p>Qtd: ${item.quantity}</p>
                <p class="font-medium mt-2">R$ ${item.price.toFixed(2)}</p>
            </div>

            <div>
                <buttom>
                    Remover
                </buttom>
            </div>

        </div>
        `

        cartItemsContainer.appendChild(cartItemElement)
    })


}