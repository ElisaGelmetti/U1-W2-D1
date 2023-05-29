 /*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// In JavaScript sono presenti delle datatypes (scatole - contenitori)dove al loro interno vengono definiti vari valori che sono : Le stringhe, i numeri, i boolenari i undefined e i null. Ogni valore a delle caratteristiche.
// 1) Le stringhe sono delle sequenze di lettere, numeri o simboli inseriti dentro a delle virgolette (singole '__' o doppie "__")
// 2) Sono compresi i numeri che vanno dallo 0 ad un numero ilimintato. In JavaScript vanno scritti dopo l'uguale senza le virgolette. As esempio let numero = 5. E' possibile inserire anche numeri non intero cioè con la virgola. Ad es: 10,5
// 3) I booleani sono dei risultati di  controllo. Si usano se bisogna mettere in confronto 2 o più elementi si vuole capire se il risultato che vogliamo ottenere sia vero o falso. Ad esempio se un valore x è uguale a 2 e un volore y è uguale a  possiamo chiedere attraverso la prorpietà booleani se x < Y. Lui automaticamte ci dirà se è vero o falso. 
// 4) Gli undefined sono dei datatyper dove il loro interno non è definito. Sappiamo che c'è ma non sappiamo di cosa si tratta.
// 5) I Null sono dei datatype vuori, all' interno non troviamo nessun valore.

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "elisa"
console.log("name")
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1 = 12
let number2 = 20
let number3 = number1 + number2
console.log(number3)
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12
console.log(x)
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let names = "elisa"
 names = "gelmetti"
const cielo = "sole"
 cielo = luna
 console.log("cielo")


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 let number4 = 4
 x = 12
 let number5 = number4 - x
console.log(number5)
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 let name1 = "john"
 let name2 = "John"
 console.log(name1 = name2)

String nome = "John"
Boolean risultato = nome.equals("John")
String risultato = nome.toUpperCase()
 console.log(name1 = name2)