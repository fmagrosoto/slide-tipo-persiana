var usados = new Array();

var generarNumero = function(min,max) {
                  
  // Comprueba la longitud del array...
  if(usados.length <= (max-min)) {
      
      // ...si aún no lo pasamos, entonces...
      // generar un número
      while(res != false){
          var num = Math.floor(Math.random()*(max-min+1))+min;
          var res = pasa(num);
      }
      // y agregar al array.
      usados.push(num);
      
  } else {
      // si llegamos al máximo, entonces
      // vaciar el array y volver a comenzar.
      console.info('Comenzar la cuenta.');
      usados.length = 0;
      num = Math.floor(Math.random()*(max-min+1))+min;
      usados.push(num);
      generarNumero(min,max);
  }
  
  // Finalmente regresar el valor de num
  return num;
}
              
var pasa = function(numero){
                   
   var res = false;
   for(var i=0;i<usados.length; i++){
       if(numero == usados[i]){
           res = true;
       }
   }
   
   // Retornar el valor booleano
   return res;
   
}

var agregarImagen = function(){
    var padre = document.getElementById('carrusel-persiana');
    
    // cuando hijos tiene?
    var hijos = document.querySelectorAll('.carrusel-imagen');
    var nhijos = hijos.length + 1;
    padre.style.width = (nhijos * 600) + 'px';
    console.log('Ancho: ' + padre.style.width);
    
    var imagen = 'carrusel/' + generarNumero(1,11) + '.jpg';
    var hijo = document.createElement('div');
    hijo.setAttribute("class", "carrusel-imagen");
    hijo.innerHTML = "<img src='" + imagen + "' atl='' />";
    padre.appendChild(hijo);
    
    window.setTimeout(function(){
        moverImagen();
    },5000);
    
}

var moverImagen = function(){
    var padre = document.getElementById('carrusel-persiana');
    var hijos = document.querySelectorAll('.carrusel-imagen');
    var nhijos = hijos.length - 1;
    padre.style.left = ((nhijos * 600) * -1) +'px';
    console.log('Mover a: ' + ((nhijos * 600) * -1) +'px');
    agregarImagen();
}

window.onload = function () {
    
    var padre = document.getElementById('carrusel-persiana');
    var imagen = 'carrusel/' + generarNumero(1,11) + '.jpg';
    var hijo = document.createElement('div');
    hijo.setAttribute("class", "carrusel-imagen");
    hijo.innerHTML = "<img src='" + imagen + "' atl='' />";
    padre.appendChild(hijo);
    
    agregarImagen();
    
}