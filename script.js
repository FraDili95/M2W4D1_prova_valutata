/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
      title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
  ]

/*FUNZIONALITA' INSERITE:
1)ALGORITMO DI RICERCA
2)BOTTONI PER LA CANCELLAZIONE AUTOMATICA "X"
3)GESTIONE EVENTO "NULLA INSERITO DEI CAMPI DI TESTO"
4)GESTIONE EVENTO "LAVORO NON TROVATO"
5)BOTTONE CANCEL COLLEGATO ALLA LOGICA DELLA FUNZIONE DI RICERCA
modifica tendina verde risultati con il numero
aggiustamento algoritmo di ricerca con minuscole anche da insertimento
*/


// Assegnazione dei puntatori
const button = document.querySelector("#go");//puntatore al bottone GO
const titleCamp = document.querySelector("#job_title");//puntatore al campo di testo TITLE
const locationCamp = document.querySelector("#job_location");//puntatore al campo di testo LOCATION

//Dischiaro funzione lettrice dei campi di testo
function reader ( pointer ){
  let imputValue = pointer.value.toLowerCase();//converto in minuscolo
  return imputValue;
}//fine reader

//Dischiaro funzione cercatrice nell'array caricato come parametro
function seeker( database ){
  let titles= reader( titleCamp );
  let locations= reader( locationCamp );
  let result= [];
  if( titles == "" && locations == "" ){
    result.push(false); 
    return result;
  }else{
      //ALGORITMO DI RICERCA
  for (let job of database) {
    if( job.title.toLowerCase().includes( titles ) && job.location.toLowerCase().includes( locations ) ){
       result.push(job); 
    }        
   }
   return result;
  }

}//fine seeker

button.addEventListener('click', function() {
  let buttonCancelPunct = document.querySelector(".cancel");//punto al bottone cancel
  let errorEventPunct = document.querySelector( ".error" );//punto div error fantasma
  let errorTwoEventPunct = document.querySelector( ".error_two" );//punto div errorTwo fantasma
  errorEventPunct.classList.remove("event_error");//se presente rimuove la classe attiva event_error
  errorTwoEventPunct.classList.remove("event_error");//se presente rimuove la classe attiva event_error
  let result= [];//array contenitore eventuali riscontri
  let count= 0;//contatore risultati
  result = seeker(jobs);//cerca i risultati dall'imput utente
  //----------------
  if( result[0] == false ){//se l'utente non inserisce nulla e cerca
     errorEventPunct.classList.add("event_error");//aggiungo una classe
     return ;//esce dalla funzione
  }
  //----------------
  count += result.length;//conteggio risultati
  if( count === 0 ){//se i risultati sono 0
    errorTwoEventPunct.classList.add("event_error");//aggiungo una classe
    return ;//esce dalla funzione
  }else if( buttonCancelPunct.classList.contains("cancel_event") === false ){//se invece trova e se non si è già cercato o schiaccito cancel
    //----------------stampa risultato.....
    //NUMERO DI RISULTATI--------------------------------
    const punctMain = document.querySelector("#principal");//punto al main
    let newDivNum = document.createElement("div");//creo un div num elements
    newDivNum.classList.add("event_result");//aggiungo la classe con il css pronto ad associarsi
    newDivNum.classList.add("event_result_header");//aggiungo la classe con il css pronto ad associarsi
    newDivNum.textContent = `Sono stati trovati ${result.length} risultati compatibili con i criteri di ricerca...`;//inserisco la stringa
    //POSIZIONI LAVORATIVE--------------------------------
    punctMain.appendChild(newDivNum);//posiziono sull'html
    for ( let job of result ) {
      let newDiv = document.createElement("div");//creo un div
      newDiv.textContent = `Job: ${job.title}, Location: ${job.location}`;//gli scrivo sopra ciò che ho salvato in result
      newDiv.classList.add("event_result");//aggiungo la classe con il css pronto ad associarsi
      punctMain.appendChild(newDiv);//posiziono sull'html
    }//fine for of
  }//fine else if
  buttonCancelPunct.classList.add("cancel_event");//aggiungo impedimento alla ricerca
});//fine event listener

const buttonCancelPunct= document.querySelector(".cancel");

buttonCancelPunct.addEventListener('click', function() {//evento del bottone cancel
  let punctMain= document.querySelector("#principal");//punto main
  let lastdiv = punctMain.lastElementChild;//punto ultimo elemento main
   while( !lastdiv.classList.contains("error_two") ){//finchè l'ultimo elemento non è parte della struttura originale
    lastdiv.parentNode.removeChild(lastdiv);//rimuove elemento puntato
    lastdiv = punctMain.lastElementChild;//ripunta ultimo elemento di main
   }
   buttonCancelPunct.classList.remove("cancel_event");//toglie il blocco a continuare nell'altro event listener
});

// Assegnazione dei puntatori agli input e alle icone "x"
const jobTitleInput = document.getElementById("job_title");
const jobLocationInput = document.getElementById("job_location");
const userLoginImput = document.getElementById("user_text_login");
const jobTitleClear = document.getElementById("job_title").nextElementSibling;
const jobLocationClear = document.getElementById("job_location").nextElementSibling;
const userLoginTextClear = document.getElementById("user_text_login").nextElementSibling;

//( uso trim() per rimuovere gli spazi bianchi all'inizio e alla fine e this per fare riferimento a cio su cui è puntato )
//----------------PARTE DEDICATA ALLA COMPARSA DELLE ICONE X------------------
// Aggiunge event listener per il campo di input del titolo del lavoro
jobTitleInput.addEventListener('input', function() {
  if (this.value.trim() !== '') {
    jobTitleClear.style.display = 'inline';
  } else {
    jobTitleClear.style.display = 'none';
  }
});
// Aggiunge event listener per il campo di input della località del lavoro
jobLocationInput.addEventListener('input', function() {
  if (this.value.trim() !== '') {
    jobLocationClear.style.display = 'inline';
  } else {
    jobLocationClear.style.display = 'none';
  }
});
// Aggiunge event listener per il campo di input della località del lavoro
userLoginImput.addEventListener('input', function() {
  if (this.value.trim() !== '') {
    userLoginTextClear.style.display = 'inline';
  } else {
    userLoginTextClear.style.display = 'none';
  }
});
//----------------PARTE DEDICATA A FAR SPARIRE LA X UNA VOLTA USATA------------------
// Aggiunge event listener per la pulizia del campo di input del titolo del lavoro
jobTitleClear.addEventListener('click', function() {
  jobTitleInput.value = '';
  jobTitleClear.style.display = 'none';
});

// Aggiunge event listener per la pulizia del campo di input della località del lavoro
jobLocationClear.addEventListener('click', function() {
  jobLocationInput.value = '';
  jobLocationClear.style.display = 'none';
});
// Aggiunge event listener per la pulizia del campo di input del login utente
userLoginTextClear.addEventListener('click', function() {
  userLoginImput.value = '';
  userLoginTextClear.style.display = 'none';
});

//--------FINE-DELLA---PARTE DEDICATA ALLA COMPARSA/SCOMPARSA DELLE ICONE X------------------
//----------LOGICA DELLA CANCELLAZIONE APPLICATA ALLE X------------------
// Seleziona le icone "x"
const xIcons = document.querySelectorAll(".fa-solid.fa-x");

// Aggiunge un evento di click ad ogni icona "x"
xIcons.forEach((icon) => {
  icon.addEventListener("click", function() {
    const inputField = icon.previousElementSibling; // Seleziona l'input precedente all'icona cliccata
    inputField.value = ""; // Cancella il testo 
  });
});

//----------------------------------EXTRA--------------------------------------------------------------------------------------------------------------------

const users = { //utenti registrati
  name: "Cristina Niamkevich",
  name: "Francesco Di liberto",
  name: "Abdul Mohamed",
  name: "Simone Di meglio",
  name: "Ermenegildo Zegna",
  name: "Giorgio Armani",
};

const loginIcons = document.querySelector("#icon_user");
const divFatherLoginOne = document.querySelector("#extra_part");

loginIcons.addEventListener("click", function(){
    divFatherLoginOne.classList.add("event_login");
});

