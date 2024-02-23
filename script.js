let userEmail = prompt('Inserisci la tua email');

const emailList = ['mail@1.com', 'mail@2.it', 'mail@3.net', 'miamail@io.it'];

for(i = 0; i < emailList.length; i++){
  const email = emailList[i];
  console.log(email);

  if(userEmail == email) {
    document.querySelector('h1').innerHTML = `
    Accesso eseguito ${emailList[i]} `;
  }else{
    document.querySelector('h1').innerHTML = `
    La tua mail non è valida`;
  }
}
