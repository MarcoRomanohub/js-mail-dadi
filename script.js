const emailList = ['mail@1.com', 'mail@2.it', 'mail@3.net', 'miamail@io.it'];

const userEmail = prompt('Inserisci la tua email');


for(let i = 0; i < emailList.length; i++){
  const email = emailList[i];
  console.log(email);

  if(userEmail == email){
    document.querySelector('h1').innerHTML = `
    Accesso eseguito ${emailList[i]}`
  }else{
    document.querySelector('h1').innerHTML = `
    La tua mail non è valida`;
  }
}




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