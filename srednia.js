function srednia() {
    var li1 = parseInt(document.getElementById('ocena1').value);
    var li2 = parseInt(document.getElementById('ocena2').value);
    var li3 = parseInt(document.getElementById('ocena3').value);

    if(!isNaN(li1) && !isNaN(li2) && !isNaN(li3)) {
        wynik = (li1 + li2 + li3) / 3;
        document.getElementById('srednia').innerHTML = "Średnia ocen: " + wynik;
    }
    else {
        document.getElementById('srednia').innerHTML = "Wpisz poprawne dane!";
    }}