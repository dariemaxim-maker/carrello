let somma = 0;
function acquista() {
    let prodotto = document.getElementById("prezzo").value;
    prodotto = parseFloat(prodotto);
    if (isNaN(prodotto)) {
        alert("hai sbagliato");
        console.log("hai sbagliato");
    } else {
        somma += prodotto;
        console.log("totale: " + somma);
        document.getElementById("prezzo").value = "";
    }
    let p;
    p=document.getElementById("output");
    p.innerHTML="Totale: "+somma +"€";
}
function reset(){
    somma=0;
    let p;
    p=document.getElementById("output");
    p.innerHTML="Totale: "+somma;
}