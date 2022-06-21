const rulesButton = document.getElementById("rulesButton");
const closeModalButton = document.getElementById("modalCloseButton");
const modal = document.getElementById("rulesModal");

export function initializeModal() {
    rulesButton.addEventListener("click", openModal);
    closeModalButton.addEventListener("click", closeModal);
}

function openModal() {
    modal.classList.add("modal-open");
}

function closeModal() {
    modal.classList.remove("modal-open");
}