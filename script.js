const form = document.querySelector("#form-tugas");
const input = document.querySelector("#input-tugas");
const daftar = document.querySelector("#daftar-tugas");
const penghitung = document.querySelector("#penghitung");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Isi input:", input.value);
});

