const form = document.querySelector("#form-tugas");
const input = document.querySelector("#input-tugas");
const daftar = document.querySelector("#daftar-tugas");
const penghitung = document.querySelector("#penghitung");


function tambahTugas(teks) {
    const item = document.createElement("li");
    const label = document.createElement("span");
    label.textContent = teks;
    label.addEventListener("click", function () {
        item.classList.toggle("selesai");
    });
    item.appendChild(label);
    const tombolHapus = document.createElement("button");
    tombolHapus.textContent = "Hapus";
    tombolHapus.addEventListener("click", function () {
        item.remove();
    });
    item.appendChild(tombolHapus);
    daftar.appendChild(item);
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const teks = input.value.trim();
    if (teks === "") return;
    tambahTugas(teks);
    input.value = "";
    input.focus();
});