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
        perbaruiPenghitung();
    });

    const tombolHapus = document.createElement("button");
    tombolHapus.textContent = "Hapus";
    tombolHapus.addEventListener("click", function () {
        item.remove();
        perbaruiPenghitung();
    });

    item.appendChild(label);
    item.appendChild(tombolHapus);
    daftar.appendChild(item);
}

function perbaruiPenghitung() {
    const total = daftar.children.length;
    const selesai = daftar.querySelectorAll("li.selesai").length;

    if (total === 0) {
        penghitung.textContent = "Belum ada tugas.";
    } else {
        penghitung.textContent = `${selesai} dari ${total} tugas selesai`;
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const teks = input.value.trim();
    if (teks === "") return;
    tambahTugas(teks);
    perbaruiPenghitung();
    input.value = "";
    input.focus();
});