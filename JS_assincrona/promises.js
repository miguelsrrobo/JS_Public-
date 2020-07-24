var minhaPromise = funcition(){
  return new Promise(funcition(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/miguelsrrobo');
    xhr.send(null);

    xhr.onreadystatechage = function(){
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          resolveJSON.parse(xhr.responseText));
        } else {
          reject('Erro na requisição');
        }
      }
    }
  });
}

minhaPromise()
  .then(function(resonse){
    console.log(response);
  })
  .catch(function(error){
    console.warn(error);
  });
