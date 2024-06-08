const modalWrap = document.querySelector(".modal-wrap");
const modalContent = document.querySelector(".modal-content");
const modalBtn = document.querySelector(".modal-btn");
const cancel = document.querySelector(".cancel");
const phoneNumber = document.querySelector(".phone-number");

modalBtn.addEventListener("click", () => {
  modalContent.classList.remove("slide-out");
  modalWrap.classList.toggle("display-none");
});

cancel.addEventListener("click", () => {
  modalContent.classList.add("slide-out");
  setTimeout(() => {
    modalWrap.classList.toggle("display-none");
  }, 650);
  phoneNumber.value = "";
});
