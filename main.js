let pesquisa = document.querySelector('.searchbar');
let botaopesquisa = document.querySelector('.button1');
let botaopesquisa2 = document.querySelector('.button2');
let voz = document.querySelector('.voz');

botaopesquisa.onclick= function(){
let url = 'https://www.google.com/search?q='+pesquisa.value;
window.open(url,'_self');
}
botaopesquisa2.onclick= function(){
    let url = 'https://www.google.com/doodles';
    window.open(url,'_self');
    }
    
  