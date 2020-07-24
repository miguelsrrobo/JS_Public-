var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/miguelsrrobo');
xhr.send(null);

xhr.onreadystatechage = function(){
  if(xhr.readyState === 4){
    console.log(JSON.parse(xhr.responseText));
    
  }
}
