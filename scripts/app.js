
const header = document.querySelector("header");
const menuIcon = header.firstElementChild;
const menu = document.querySelector(".menu-hide");
const closeMenuIcon = document.querySelector(".menu-hide__div-menu--icon-close-menu");
const cartIcon = header.lastElementChild;
const cart = document.querySelector(".cart-hide");
const closeCartIcon = document.querySelector(".cart__close-icon");

const addCartButtons = document.querySelectorAll(".product-card__button");
const cartItemsList = document.querySelector(".cart__item");

const badgeCart = document.querySelector(".header__cart-badge");

const iconTrash = document.querySelectorAll(".product-card__trash-icon");

const buyButton = document.querySelector(".check__out-button");

const prueba = "$1000";

console.log(prueba);

console.log(parseInt(prueba));



iconTrash.forEach(elem => { //se realiza un loop para enlazarle el evento a cada uno del array                              
    elem.addEventListener("click", () => { //forEach guarda cada elemento en elem y ejecuta la funcion en cada uno al ejectuar el evento (hacer click)
        console.log("clickkkk");
        const elemParent = elem.parentElement; /*el elemento selecciona su padre y lo guarda en elemParent. Ej: Si elem es un <p> y esta dentro de un <section>,                                                elemParent va a ser el section */
        elemParent.remove(); //elemParent se le aplica el metodo remove() y elimina el section
    })
})


let cartCount = 0;
buyButton.classList.replace("check-out-button", "check-out-button-hide");

function updateBageCart() {

    badgeCart.textContent = cartCount;
    if (cartCount == 0) {
        badgeCart.classList.replace("header__cart-badge-show", "header__cart-badge");
        buyButton.classList.replace("check-out-button", "check-out-button-hide");

    }

    console.log(cartCount);
}


addCartButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const productArticle = event.target.closest("article");
        moveToCart(productArticle);
    });
});


const classTrash = document.querySelector(".product-card__trash-icon");

function moveToCart(productArticle) {
    const articleClone = productArticle.cloneNode(true);

    const trashIcons = articleClone.querySelectorAll(".product-card__trash-icon");
    trashIcons.forEach(icon => {
        icon.classList.add("product-card__trash-icon-two");
        icon.addEventListener("click", () => {
            const elemParent = icon.parentElement;
            elemParent.remove();
            cartCount = cartCount - 1;
            updateBageCart();
        });

    });

    cartItemsList.appendChild(articleClone);

    badgeCart.classList.replace("header__cart-badge", "header__cart-badge-show");
    cartCount++;
    updateBageCart();
    if (cartCount > 0) {
        buyButton.classList.replace("check-out-button-hide", "check-out-button");
    }
};

menuIcon.addEventListener("click", () => {
    menu.classList.replace("menu-hide", "menu-show");
});

closeMenuIcon.addEventListener("click", () => {
    menu.classList.replace("menu-show", "menu-hide");
});

cartIcon.addEventListener("click", () => {
    cart.classList.replace("cart-hide", "cart-show");
})

closeCartIcon.addEventListener("click", () => {
    cart.classList.replace("cart-show", "cart-hide");
});