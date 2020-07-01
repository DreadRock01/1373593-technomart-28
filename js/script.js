var mapLink = document.querySelector(".map-button");
var mapModal = document.querySelector(".modal-map");
var close = mapModal.querySelector(".close-btn");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapModal.classList.contains("modal-show")) {
      evt.preventDefault();
      mapModal.classList.remove("modal-show");
    }
  }
});

var writeUsButton = document.querySelector(".writeus-btn");
var writeUsModal = document.querySelector(".writeus");
var close = writeUsModal.querySelector(".close-btn");
var writeUsForm = writeUsModal.querySelector(".writeus-form");
var userName = writeUsModal.querySelector(".input-name");
var userEmail = writeUsModal.querySelector(".input-email");
var userMessage = writeUsModal.querySelector(".input-textarea");

var isStorageSupport = true;
var storageName, storageEmail = "";

try {
  storageName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

writeUsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsModal.classList.add("writeus-show");
  if (storageName) {
    userName.value = storageName;
    userEmail.focus();
  }
  if (storageEmail) {
    userEmail.value = storageEmail;
    userMessage.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsModal.classList.remove("writeus-show");
  writeUsModal.classList.remove("modal-error");
});

writeUsForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userMessage.value) {
    evt.preventDefault();
    writeUsModal.classList.remove("modal-error");
    writeUsModal.offsetWidth = writeUsModal.offsetWidth;
    writeUsModal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userEmail", userEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeUsModal.classList.contains("writeus-show")) {
      evt.preventDefault();
      writeUsModal.classList.remove("writeus-show");
      writeUsModal.classList.remove("modal-error");
    }
  }
});

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