function buyurtma() {
    let ism = document.getElementById("ism").value;
    let tel = document.getElementById("telefon").value;

    if (!ism || tel.length < 18) {
        alert("Ma’lumotlarni to‘liq kiriting");
        return;
    }

    document.getElementById("loading").style.display = "block";
    document.getElementById("success").style.display = "none";

    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        document.getElementById("success").style.display = "block";

        setTimeout(() => {
            if (confirm("Instagram sahifamizga o‘tasizmi?")) {
                window.location.href = "https://www.instagram.com/kfc/";
            }
        }, 1000);

    }, 2000);
}

// Telefon formatlash
function formatPhone(input) {
    let x = input.value.replace(/\D/g, "");
    if (!x.startsWith("998")) x = "998";

    input.value =
        "+" + x.slice(0,3) + " (" +
        x.slice(3,5) + ") " +
        x.slice(5,8) + "-" +
        x.slice(8,10) + "-" +
        x.slice(10,12);
}

// Info ochib-yopish
function toggleInfo() {
    let box = document.getElementById("infoBox");
    box.style.display = box.style.display === "block" ? "none" : "block";
}

// Taymer
let time = 300;
setInterval(() => {
    let m = Math.floor(time / 60);
    let s = time % 60;
    document.getElementById("timer").innerText =
        `⏳ Chegirma tugashiga: 0${m}:${s < 10 ? "0"+s : s}`;
    if (time > 0) time--;
}, 1000);





