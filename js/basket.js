var linkBasketAll = document.querySelectorAll(".product-buy");
var basket = document.querySelector(".modal-basket");
var close = basket.querySelector(".close-btn");
var basketContinue = basket.querySelector(".btn-continue");


for (var linkBasket of linkBasketAll) {
linkBasket.addEventListener("click", function (evt) {
  evt.preventDefault();
  basket.classList.add("modal-show");
});
}

basketContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  basket.classList.remove("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  basket.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (basket.classList.contains("modal-show")) {
      evt.preventDefault();
      basket.classList.remove("modal-show");
    }
  }
});