var sayi1;
var sayi2;
var sonuc;
var beklenen;
var test;
var can = 3;
var seviye = 1;
var tecrube = 0;

function topla() {
    oku();
    beklenen = sayi1 + sayi2;
    dy();
}

function cikar() {
    oku();
    beklenen = sayi1 - sayi2;
    dy();
}

function carp() {
    oku();
    beklenen = sayi1 * sayi2;
    dy();
}

function dy() {
    test = beklenen === sonuc;
    if (test) {
        tecrube = tecrube + 20;
        if (tecrube > 200) {
            seviye = seviye + 1;
        }
        document.getElementsByClassName("seviye")[0].style.width = tecrube + "px";
    }
    document.getElementById("dy").innerHTML = test;
    console.log("sayi1: " + sayi1);
    console.log("sayi2: " + sayi2);
    console.log("sonuc: " + sonuc);
    console.log("beklenen: " + beklenen);
    console.log(test);
}

function oku() {
    sayi1 = parseInt(document.getElementById("sayi1").value);
    sayi2 = parseInt(document.getElementById("sayi2").value);
    sonuc = parseInt(document.getElementById("sonuc").value);
}