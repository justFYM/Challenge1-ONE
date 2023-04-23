function capturarTexto() {
  // Referencia al elemento textarea
  var textarea1 = document.getElementById('textarea1');
  
  // Valor del textarea
  var texto = textarea1.value;

  
  if (texto.trim()) { //Si la cadena contiene texto
    //Se oculta la imagen
    var articleTres = document.getElementById('article3');
    articleTres.style.display = 'none';

    var articleDos = document.getElementById('article2');
    articleDos.style.display = 'flex';

    // Se encripta el texto
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');

    var textArea2 = document.getElementById('textarea2');
    textArea2.innerHTML = texto;

    var copiar = document.getElementById('button-copiar');
    copiar.addEventListener("click", () => {
      navigator.clipboard.writeText(texto);
  });




  } else {
    console.log("No hay texto");
    var articleTres = document.getElementById('article3');
    articleTres.style.display = 'flex';

    var articleDos = document.getElementById('article2');
    articleDos.style.display = 'none';
  }
}
function capturarTextoDesencriptar() {
// Referencia al elemento textarea
var textarea1 = document.getElementById('textarea1');
  
  // Valor del textarea
  var texto = textarea1.value;

  
  if (texto.trim()) { //Si la cadena contiene texto

   //Se oculta la imagen
    var articleTres = document.getElementById('article3');
    articleTres.style.display = 'none';

    var articleDos = document.getElementById('article2');
    articleDos.style.display = 'flex';

    // Se desencripta el texto
    console.log("Hay contenido");
      texto = texto.replace(/enter/g, 'e');
      texto = texto.replace(/imes/g, 'i');
      texto = texto.replace(/ai/g, 'a');
      texto = texto.replace(/ober/g, 'o');
      texto = texto.replace(/ufat/g, 'u');
      
      var textArea2 = document.getElementById('textarea2');
    textArea2.innerHTML = texto;

    var copiar = document.getElementById('button-copiar');
    copiar.addEventListener("click", () => {
      navigator.clipboard.writeText(texto);
  });

  } else {
    console.log("No hay texto");
    var articleTres = document.getElementById('article3');
    articleTres.style.display = 'flex';
    var articleDos = document.getElementById('article2');
    articleDos.style.display = 'none';
  }
}