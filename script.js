var sayi1;
var sayi2;
var sonuc;
var beklenen;
var test;
var can = 3;
var seviye = 1;
var tecrube = 0;
var saglik = 240;

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
        tecrube = tecrube + 24;
        if (tecrube = 240) {
            seviye = seviye + 1;
            tecrube = 0;
            can = 3
            saglik = can * 80;
        }
    }
    else {
        can = can - 1;
        saglik = can * 80;
        if (can === 0) {
            seviye = seviye - 1;
            tecrube = 0;
            can = 3
            saglik = can * 80;
        }
    }
    document.getElementsByClassName("can")[0].style.width = saglik + "px";
    document.getElementById("can").innerHTML = can;
    document.getElementsByClassName("seviye")[0].style.width = tecrube + "px";
    document.getElementById("seviye").innerHTML = seviye;
    document.getElementById("dy").innerHTML = test;
    console.log("sayi1: " + sayi1);
    console.log("sayi2: " + sayi2);
    console.log("sonuc: " + sonuc);
    console.log("beklenen: " + beklenen);
    console.log("can: " + can);
}

function oku() {
    sayi1 = parseInt(document.getElementById("sayi1").value);
    sayi2 = parseInt(document.getElementById("sayi2").value);
    sonuc = parseInt(document.getElementById("sonuc").value);
}