const emailList = ['mail@1.com', 'mail@2.it','miamail@io.it', 'mail@3.net'];

const userEmail = prompt('Inserisci la tua email');
let mailTrovata = false;
let message = 'ACCESSO NEGATO'

for(let i = 0; i < emailList.length; i++){
  const email = emailList[i];
  console.log(email)

  if(email === userEmail){
    mailTrovata = true
    // document.querySelector('h1').innerHTML = `
    // Accesso eseguito ${emailList[i]}`
  }
}

if (mailTrovata) {
  message = 'ACCESSO CONSENTITO'
}

document.querySelector('h1').innerHTML = message;



const numPc = Math.ceil(Math.random() * 6)
console.log(numPc);
const numPlayer = Math.ceil(Math.random() * 6)
console.log(numPlayer);
if(numPc > numPlayer){
  document.querySelector('h2').innerHTML += `
  numPc = ${numPc} <br>  numPlayer = ${numPlayer}  <br> Ha vinto il Pc`;
}else if(numPc == numPlayer){
  document.querySelector('h2').innerHTML += `
  numPc = ${numPc} <br>  numPlayer = ${numPlayer}  <br> Pareggio`;
}else{
  document.querySelector('h2').innerHTML += `
  numPc = ${numPc} <br>  numPlayer = ${numPlayer}  <br> Ha vinto il Giocatore`;
}