/* #1 Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà;
#2 Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
#3 Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

$(document).ready(function () {
    //START JS

    //Esercizio #1
    var student = {
        nome: "Mario",
        cognome: "Rossi",
        eta: 25,
    };

    for (var k in student) {
        console.log("Esercizio #1 " + k + ": " + student[k]);
    }

    //Esercizio #2
    var students = [
        {
            nome: "Mario",
            cognome: "Red",
            eta: 26,
        },
        {
            nome: "Luigi",
            cognome: "Green",
            eta: 25,
        },
        {
            nome: "Peach",
            cognome: "Princess",
            eta: 22,
        },
        {
            nome: "Todd",
            cognome: "Mushroom",
            eta: 18,
        },
    ];

    for(i = 0; i < students.length; i++) {
        console.log("Esercizio #2 " + students[i].nome + " " + students[i].cognome);
    }

    //Esercizio #3
    console.log("Esercizio #3:lista prima dell'aggiunta", students);

    //Definisco un nuovo utente
    var newStudent = {
        nome: prompt("Inserisci un nome"),
        cognome: prompt("Inserisci un cognome"),
        eta: parseInt(prompt("Inserisci un'età'")),
    };

    students.push(newStudent);

    console.log("Esercizio #3:lista dopo l'aggiunta", students);

    //END JS
});

// MY FUNCTIONS--------------------------

